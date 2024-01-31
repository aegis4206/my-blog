'use client'
import React, { useEffect, useState, useRef } from 'react'
import { Grid, Typography, Paper, Button, MenuItem, Select, Snackbar, Alert, Checkbox } from '@mui/material'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'



const ws = new WebSocket('ws://aegis4206.tplinkdns.com:8001/')

const messageFormat = {
    date: '日期區間錯誤或需要選擇同年份',
    network: '伺服器無回應或選擇日期無航班'
}
interface eventsType {
    title: string,
    date: string,
    backgroundColor?: string
}

const ScrapyFlight = () => {
    const [webSocketState, setWebSocketState] = useState(false)
    const [message, setMessage] = useState('');
    const [detail, setDetail] = useState('');
    const calendarRef = useRef<FullCalendar | null>(null);
    const [open, setOpen] = useState(false);
    const [onLoad, setOnLoad] = useState('開始爬取')
    const [searchOptions, setSearchOptions] = useState({
        forward: 'KHH',
        back: 'OKA',
        goDate: moment().add(3, 'M').format('yyyy-MM-DD'),
        returnDate: moment().add(3, 'M').format('yyyy-MM-DD'),
        choseBrowser: "firefox",
        head: false
    })
    const [events, setEvents] = useState<eventsType[]>([])


    const dateFliterHandle = (goDateList: string[], returnDateList: string[]) => {
        const filterDate = (list: string[], back?: boolean) => {
            const res = list.reduce((acc: any, cur: any, i: any) => {
                if (i % 2 == 0) {
                    acc.push({
                        title: list[i + 1],
                        date: moment(cur).year(moment(searchOptions.goDate).year()).format('yyyy-MM-DD'),
                        backgroundColor: back ? "#e91e63" : null,
                        priority: back ? 2 : 1
                    })
                }
                return acc
            }, []);
            return res
        }
        const eventList = [...filterDate(goDateList), ...filterDate(returnDateList, true)]
        return eventList
    }

    useEffect(() => {
        setWebSocketState(ws ? true : false)
        ws.onopen = () => {

        }


        ws.onmessage = event => {
            let data = JSON.parse(event.data)
            console.log(data)
            data.complete && setOnLoad('爬取完畢');
            if (data.message) {
                setMessage(messageFormat.network)
                setOpen(true);
                setOnLoad('開始爬取');
            }
            if (data.goDateList && data.returnDateList) {
                const { goDateList, returnDateList } = data
                const eventList = dateFliterHandle(goDateList, returnDateList)
                setEvents(eventList)
            }
        }
        return () => {
            ws.onclose = () => {
                setWebSocketState(false)
            };
        }
    }, [])

    useEffect(() => {
        setOnLoad('開始爬取');
    }, [searchOptions])

    const startClick = () => {
        // fetch('http://127.0.0.1:8000/api/start', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         forward: 'KHH',
        //         back: 'OKA'
        //     }),
        // })
        const { returnDate, goDate } = searchOptions
        if ((moment(returnDate) < moment(goDate)) || (moment(returnDate).year() != moment(goDate).year())) {
            setMessage(messageFormat.date)
            setOpen(true);
            return
        }
        ws.send(JSON.stringify(searchOptions))
        setOnLoad('爬取中...')
        calendarRef.current!.getApi().gotoDate(goDate);
    }

    // snackbar
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleEventClick = (info: any) => {
        console.log('Entered event:', info.event);
        const target = info.event;
        const detailContent = target.backgroundColor == "#e91e63" ? "返程" + target.startStr + "$" + target.title
            : "去程 " + target.startStr + "  $" + target.title;
        setDetail(detailContent)
    }


    return (
        <Grid item xs={12} md={12}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <Typography variant="h5" color="primary" gutterBottom>
                    虎航機票爬取
                </Typography>
                <Typography sx={{ display: 'flex' }} gutterBottom>
                    (有機率卡reCAPTCHA驗證)後臺連線狀態{webSocketState ? <CheckBoxIcon color='primary' /> : <DisabledByDefaultIcon />}
                </Typography>
                <div>
                    <div style={{ marginBottom: "10px", display: "flex" }}>
                        <label>若持續錯誤請更換瀏覽器核心試試</label>
                        <Select sx={{ height: "30px", marginLeft: "10px", marginRight: "30px" }} value={searchOptions.choseBrowser}
                            onChange={e => setSearchOptions(pre => ({ ...pre, choseBrowser: e.target.value }))}>
                            <MenuItem value="chromium">chrome</MenuItem>
                            <MenuItem value="firefox">firefox</MenuItem>
                            <MenuItem value="webkit">webkit</MenuItem>
                        </Select>
                    </div>
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: 'center' }}>
                        <label>Headless模式(開啟後速度快但高機率被鎖)</label>
                        <Checkbox
                            checked={searchOptions.head}
                            onChange={e => setSearchOptions(pre => ({ ...pre, head: e.target.checked }))}
                        />
                    </div>
                    <div style={{ marginBottom: "30px", display: "flex" }}>
                        <label>出發</label>
                        <Select sx={{ height: "30px", marginLeft: "10px", marginRight: "30px" }} value={searchOptions.forward}
                            onChange={e => setSearchOptions(pre => ({ ...pre, forward: e.target.value }))}>
                            <MenuItem value="KHH">高雄</MenuItem>
                            <MenuItem value="TPE">台北</MenuItem>
                        </Select>
                        <label>目的</label>
                        <Select sx={{ height: "30px", marginLeft: "10px" }} value={searchOptions.back}
                            onChange={e => setSearchOptions(pre => ({ ...pre, back: e.target.value }))}>
                            <MenuItem value="NRT">成田</MenuItem>
                            <MenuItem value="KIX">大阪</MenuItem>
                            <MenuItem value="OKA">沖繩</MenuItem>
                        </Select>
                    </div>
                    <div style={{ display: "flex" }}>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            {/* <label>開始日期</label> */}
                            <DatePicker shouldDisableDate={(day) => day <= moment().add(-1, 'day') || day >= moment().add(1, 'year')}
                                sx={{ marginLeft: "10px", marginRight: "30px" }} label="開始日期"
                                format="YYYY-MM-DD"
                                value={moment(searchOptions.goDate)}
                                onChange={e => setSearchOptions(pre => ({ ...pre, goDate: moment(e).format('yyyy-MM-DD') }))} />
                            {/* <label>結束日期</label> */}
                            <DatePicker shouldDisableDate={(day) => day <= moment().add(-1, 'day') || day >= moment().add(1, 'year')}
                                sx={{ marginLeft: "10px" }} label="結束日期"
                                format="YYYY-MM-DD"
                                value={moment(searchOptions.returnDate)}
                                onChange={e => setSearchOptions(pre => ({ ...pre, returnDate: moment(e).format('yyyy-MM-DD') }))} />
                        </LocalizationProvider>
                    </div>
                </div>

                <br></br>
                <Typography gutterBottom>
                    <Button disabled={!webSocketState || (onLoad == "開始爬取" ? false : true)} variant="contained" onClick={startClick}>{onLoad == '爬取中...' ? <CircularProgress size="1.5rem" /> : onLoad}</Button>
                </Typography>
                <Typography gutterBottom sx={{ marginTop: "10px" }}>
                    顏色區分
                    <Button sx={{ backgroundColor: '#3788d8', color: "#fff", marginX: "20px" }} variant="contained">去程</Button>
                    <Button sx={{ marginRight: "20px" }} variant="contained">回程</Button>
                    詳細資料 : {detail}
                </Typography>
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                    eventClick={handleEventClick}
                    eventOrder="priority"
                />
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Alert
                        onClose={handleClose}
                        severity="info"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {message}
                    </Alert>
                </Snackbar>

            </Paper>
        </Grid>

    )
}

export default ScrapyFlight