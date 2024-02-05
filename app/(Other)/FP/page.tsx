import type { Metadata } from 'next'
import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'
export const metadata: Metadata = {
    title: "learn daily note - fetchFP",
    description: 'fetchFP',
}
import CodeHighlight from '@/app/@component/prism/CodeHighlight';

const FP = () => {
    const fetchCode = `function fetchActions(url: string) {
    const fetchHandle = async (method: string, param?: string | number, body?: any) => {
        try {
            const res = await fetch(\`https://jsonplaceholder.typicode.com/\${url}\${param ? '/' + param.toString() : ''}\`, {
                method, body: body ? JSON.stringify(body) : null
            });
            const data = await res.json();
            return data
        } catch (err) {
            console.log('errorMessage', err)
        }

    }
    const getFetchAction = (method: string) => async () => fetchHandle(method);
    const postFetchAction = (method: string) => async (body: any) => fetchHandle(method, undefined, body);
    const withParamFetchAction = (method: string) => async (param: string | number) => fetchHandle(method, param);
    const withParamBodyFetchAction = (method: string) => async (param: string | number, body: any) => fetchHandle(method, param, body);

    const get = getFetchAction("GET")

    const post = postFetchAction("POST")

    const getById = withParamFetchAction("GET")
    const _delete = withParamFetchAction("DELETE")

    const put = withParamBodyFetchAction("PUT")
    const patch = withParamBodyFetchAction("PATCH")

    return ({
        get,
        post,
        delete: _delete,
        put,
        patch,
        getById
    })
}

export default fetchActions

//使用方式
const fetchAPI = fetchActions(prefixUrl);
const resData = await fetchAPI.get();
await fetchAPI.getById(id: string | number);
await fetchAPI.post(body: any);
await fetchAPI.delete(id: string | number);
await fetchAPI.put(id: string | number, body: any);
await fetchAPI.patch(id: string | number, body: any);`
    const functorCode = `const initFn = () =>{
    console.log('init');
    return 0;
}
const Box = f => ({
    FN: nextF => Box(() => nextF(f())),
    runFN: () => f()
})
const initBox = Box(initFn); // 初始傳入值
const addNumber = initBox.FN(n => n + 1);
const doubleNumber = addNumber.FN(n => n * 2); // 可重複帶入FN函式
// 結果 init return 0 => 0+2 return 2 => 2*2 return 4
`


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
                    FP筆記
                </Typography>
                <Typography>
                    練習fetchAPI
                </Typography>
                <CodeHighlight code={fetchCode} />
                <Typography>
                    functor
                </Typography>
                <CodeHighlight code={functorCode} />

            </Paper>
        </Grid>

    )
}

export default FP