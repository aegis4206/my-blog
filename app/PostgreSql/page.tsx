import type { Metadata } from 'next'
import React, { useState } from 'react'
import { Grid, Typography, Paper, Button } from '@mui/material'
export const metadata: Metadata = {
    title: "learn daily note - PostgreSql",
    description: 'PostgreSql',
}
import CodeHighlight from '@/app/@component/prism/CodeHighlight';


const PostgreSql = async () => {
    const installCode = `建置中...`

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
                    PostgreSql
                </Typography>
                <Typography>
                    XX工具
                </Typography>
                <Typography>
                    套件安裝
                </Typography>
                <CodeHighlight language="bash" code={installCode} />
                <Typography>
                    ...
                </Typography>

            </Paper>
        </Grid>

    )
}

export default PostgreSql