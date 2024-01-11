import type { Metadata } from 'next'
import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'
export const metadata: Metadata = {
    title: "learn daily note - ZuStand",
    description: 'ZuStand',
}
import CodeHighlight from '@/app/@component/prism/CodeHighlight';

const ZuStand = async () => {
    const installCode = `npm i zustand 或 yarn add zustand`
    const storeCode = `import { create } from "zustand";

const store = create((set, _) => {
    return ({
        // 初始化state值
        state: '',
        setState: (NewValue: string) => {
            // 回傳物件內使用內置函數set回傳狀態
            set((allState: any) => {
                return ({
                    // 在將全部狀態解構丟回物件
                    ...allState,
                    state: NewValue
                })
            })
        }
    })
})
    
export default store`
    const devToolsCode = `import { devtools } from "zustand/middleware";

const store = 
    create(
        devtools(
            (set) => {
            ... ...
            }
        )
    )`
    const useCode = `import store from './store'

const { state, setState } = store();`


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
                    Jotai
                </Typography>
                <Typography >
                    同為狀態管理工具
                </Typography>
                <Typography >
                    環境安裝
                </Typography>
                <CodeHighlight language="bash" code={installCode} />
                <Typography >
                    引入create創建Store
                </Typography>
                <CodeHighlight title="store.tsx" code={storeCode} />
                <Typography >
                    ZuStand不需要額外使用Provider去包，可直接引入解構使用
                </Typography>
                <CodeHighlight title="component.tsx" code={useCode} />
                <Typography >
                    另外若想使用Redux Devtools只需要在Store的set前多包一層devtools
                </Typography>
                <CodeHighlight title="store.tsx" code={devToolsCode} />
                <Typography >
                    非同步可直接async，不像Redux需額外透過thunk
                </Typography>

            </Paper>
        </Grid>

    )
}

export default ZuStand