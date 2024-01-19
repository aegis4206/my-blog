import { Title } from "@mui/icons-material";
import Grid from "@mui/material/Grid"
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const AboutSiderProject = () => {
    return (
        <>
            <Grid item xs={12} md={6}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <Typography component="h2" variant="h5" color="primary" gutterBottom>
                        <Link sx={{ textDecorationLine: 'none' }} color="primary" href="https://order-puce.vercel.app/" target="_blank">
                            Order System
                        </Link>
                    </Typography>
                    <Typography color="text.secondary">
                        點餐系統
                    </Typography>
                    <Typography component="p">
                        Node.JS後端API串接PostgreSQL，WebSocket監聽PostgreSQL trigger即時更新訂單，外觀Ant Design Pro UI，Echarts營業額折線圖，EasyModel狀態管理，詳細請點標題或下方連結~
                    </Typography>
                    <Typography color="text.secondary" sx={{ flex: 1, fontSize: '0.9rem' }}>
                        後端與資料庫架設在Render，休眠後需待重啟時間
                        {/* 登入帳號與密碼(已鍵入初始值僅需按登入即可)
                        <br></br>
                        帳號 : admin
                        密碼 : admin */}
                    </Typography>
                    <div>
                        <Link color="primary" href="https://order-puce.vercel.app/" target="_blank">
                            Link To
                        </Link>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <Typography component="h2" variant="h5" color="primary" gutterBottom>
                        <Link sx={{ textDecorationLine: 'none' }} color="primary" href="https://find-note-aegis4206-whites-projects.vercel.app/posts" target="_blank">
                            FindNote
                        </Link>
                    </Typography>
                    <Typography color="text.secondary">
                        會員制留言板
                    </Typography>
                    <Typography component="p">
                        後台Firebase資料庫(NoSQL)，外觀Semantic UI，SPA路由React Router，詳細請點標題或下方連結~
                    </Typography>
                    <Typography color="text.secondary" sx={{ flex: 1, fontSize: '0.9rem' }}>
                        登入信箱與密碼(已鍵入初始值僅需按登入即可)
                        <br></br>
                        信箱 : admin@admin.admin
                        密碼 : password
                    </Typography>
                    <div>
                        <Link color="primary" href="https://find-note-aegis4206-whites-projects.vercel.app/posts" target="_blank">
                            Link To
                        </Link>
                    </div>
                </Paper>
            </Grid>
        </>
    )
}

export default AboutSiderProject