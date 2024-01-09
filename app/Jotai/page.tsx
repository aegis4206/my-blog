import type { Metadata } from 'next'
import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'
export const metadata: Metadata = {
    title: "learn daily note - Jotai",
    description: 'Jotai',
}
import CodeHighlight from '@/app/@component/prism/CodeHighlight';

const Jotai = () => {
    const installCode = `npm i jotai 或 yarn add jotai`
    const stateCode = `import { atom } from "jotai";

export const isLoginAtom = atom(false);`
    const providerCode = `import { Provider } from 'jotai';

<Provider>
    <Layout>
        {children}
    </Layout>
</Provider>`
const useCode = `import { isLoginAtom } from './@jotai/login';
import { useAtom } from 'jotai';

const [isLogin, setIsLogin] = useAtom(isLoginAtom); //是否已登入`


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
                    狀態管理工具，與Redex、ZuStand雷同，使用方式較接近原生React Hook的操作方式。
                </Typography>
                <Typography >
                    環境安裝
                </Typography>
                <CodeHighlight language="bash" code={installCode} />
                <Typography >
                    以管控登入狀態為例，創建一個集中管理組件，引入atom並export狀態
                </Typography>
                <CodeHighlight title="login.tsx" code={stateCode} />
                <Typography >
                    使用Provider包覆所有需要用到狀態的組件，以NextJS來說直接包在Layout最外層
                </Typography>
                <CodeHighlight title="layout.tsx" code={providerCode} />
                <Typography >
                    引入最初創建的集中管理組件，使用useAtom指定並取出，其使用方式與React Hook的useState一致
                </Typography>
                <CodeHighlight title="component.tsx" code={useCode} />

            </Paper>
        </Grid>

    )
}

export default Jotai