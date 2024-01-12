import type { Metadata } from 'next'
import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'
export const metadata: Metadata = {
    title: "learn daily note - tanstack/react-query",
    description: 'tanstack/react-query',
}
import CodeHighlight from '@/app/@component/prism/CodeHighlight';

const React_Query = () => {
    const installCode = `npm i @tanstack/react-query 或 yarn add @tanstack/react-query`
    const providerCode = `import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
    <Layout>
        {children}
    </Layout>
    // React Query開發工具 
    // 可直接看到fetch到的data
    <ReactQueryDevtools />
</QueryClientProvider>`
    const fetchDataCode = `import { useQuery } from '@tanstack/react-query';
    
const fetchData = async ({ QueryKey }) => {
    const res = await fetch("url");
    const data = await res;
    return data
}

// useQuery(QueryKey,API FN,{參數項設定})
const { data, isSuccess, isError, dataUpdatedAt, error, isLoading, isIdle, refetch } = useQuery( 
    {
        queryKey: [...QueryKey],
        queryFn: () => fetchAPI(id),
        {
            // 預設0次
            retry : 3,
            // 快取預設保留五分鐘 單位毫秒
            gcTime : 1000,
            // 設置初始化不請求 
            // 後續搭配isIdle、refetch使用
            enabled : false
    }
})
`
    const useQueriesCode = `import { useQueries } from '@tanstack/react-query';

const queries = useQueries(
    queryIdList.map(id=>{
        return {
            queryKey: [...QueryKey],
            queryFn: () => fetchAPI(id)
        }
    })
)`
    const useMutationCode = `import { useMutation, useQueryClient  } from '@tanstack/react-query';

const postData = async ({...variables}) => {
    const res = await fetch('url', {
        method: "POST",
        header:{
            "content-type": "application/json"m
        },
        body: JSON.stringify({
            id,
            title,
            user,
            ...
        })
    });
    const data = await res.json();
    return data
}

const queryClient = useQueryClient()

const { mutate } = useMutation({
    mutationFn: postData,
    onMutate: ( variables )=>{

        // 執行成功後會向Success傳遞
        return context
    },
    onSuccess: ( data, variables, context )=>{

        // 成功時可透過invalidateQueries(重新抓取新資料)
        queryClient.invalidateQueries({ queryKey: QueryKey[0] })
    },
    onError: () => {

    },
    onSettled: () => {
        // 最後執行
    },
    ...Options
});

// 觸發API
mutate(variables, {
    onError,
    onSettled,
    onSuccess,
})`

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
                    <a href="https://tanstack.com/query/latest/docs/react/overview" target="_blank" rel="noopener noreferrer">tanstack/react-query V5</a>
                </Typography>
                <Typography >
                    非同步fetch data工具
                </Typography>
                <Typography >
                    環境安裝
                </Typography>
                <CodeHighlight language="bash" code={installCode} />
                <Typography >
                    需要使用Provider來包，才能在組件中使用該功能
                </Typography>
                <CodeHighlight title="layout.tsx" code={providerCode} />
                <Typography >
                    fetch Data，若失敗不會重新fetch，需設置retry
                    <br></br>
                    chace機制預設保留五分鐘
                </Typography>
                <CodeHighlight code={fetchDataCode} />
                <Typography >
                    useQueries (Parallel Queries)
                </Typography>
                <CodeHighlight code={useQueriesCode} />
                <Typography >
                    useMutation & invalidateQueries
                </Typography>
                <CodeHighlight code={useMutationCode} />
            </Paper>
        </Grid>

    )
}

export default React_Query