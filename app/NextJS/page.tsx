import type { Metadata } from 'next'
import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'

export const metadata: Metadata = {
    title: "learn daily note",
    description: 'Next JS',
  }

const NextJS = () => {

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
                <Typography component="h2" variant="h5" color="primary" gutterBottom>
                    NextJS
                </Typography>
                <Typography>
                    測試
                </Typography>
            </Paper>
        </Grid>

    )
}

export default NextJS