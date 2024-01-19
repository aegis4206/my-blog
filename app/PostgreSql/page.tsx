import type { Metadata } from 'next'
import React, { useState } from 'react'
import { Grid, Typography, Paper, Button } from '@mui/material'
export const metadata: Metadata = {
    title: "learn daily note - PostgreSql",
    description: 'PostgreSql',
}
import CodeHighlight from '@/app/@component/prism/CodeHighlight';


const PostgreSql = async () => {
    const memoCode = `// DISTINCT過濾掉重複欄位的值
SELECT DISTINCT 欄位名 FROM 表;

// LEFT JOIN 與 RIGHT JOIN 返回左或右表所有資料
// FULL JOIN返回左右表所有資料
// 多表時可使用簡寫在表後方
SELECT 簡寫.欄位, 簡寫.欄位...
FROM 表 簡寫
FULL JOIN 表 簡寫
ON 條件;
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
                    SQL
                </Typography>
                <Typography>
                    常用筆記
                </Typography>
                <CodeHighlight language="sql" code={memoCode} />
                <Typography>
                    ...
                </Typography>

            </Paper>
        </Grid>

    )
}

export default PostgreSql