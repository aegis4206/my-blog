import type { Metadata } from 'next'
import React, { useState } from 'react'
import { Grid, Typography, Paper, Button } from '@mui/material'
export const metadata: Metadata = {
    title: "learn daily note - StoryBook",
    description: 'StoryBook',
}
import CodeHighlight from '@/app/@component/prism/CodeHighlight';


const StoryBook = async () => {
    const installCode = `# storybook需建立在專案上
npm create vite@latest projectName # 使用vite快速建立
npx sb init --builder @storybook/builder-vite`
    const argsCode = `import Box from "./Box";
export default {
    title: "Box",
    component: Box
};

export const LargeBox = {
    args: {
        // 輸入傳入的props key:初始值
        // 設定項的輸入模式
        size: {
            // 常用type 預設text
            // boolean(switch)、range、radio
            // check、select、color、date
            control: 'type', 
            options?: [...options]
        }
    },
};
`
    const componentCode = `const Box = ({ backgroundColor }) => {
    const style = {
        backgroundColor
    }
    return (
        <div style={style}> Box</div >
    )
};

export default Box;`
    const layoutCode = `import type { Preview } from "@storybook/react";
import React from 'react'; // 需引入React

const preview: Preview = {
    ...otherParameters,
    decorators: [
        (Story) => (
            <div style={{ ...style }}>
                <Story />
            </div>
        )
    ]
};

export default preview;`

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
                    StoryBook
                </Typography>
                <Typography>
                    XX工具
                </Typography>
                <Typography>
                    環境安裝
                </Typography>
                <CodeHighlight language="bash" code={installCode} />
                <CodeHighlight title="Box.stories.tsx" code={argsCode} />
                <CodeHighlight title="Box.tsx" code={componentCode} />
                <Typography variant="h6" gutterBottom>
                    Global CSS Layout
                </Typography>
                <Typography>
                    設置需修改根目錄下.storybook資料內的preview
                </Typography>
                <CodeHighlight title="preview.tsx" code={layoutCode} />

            </Paper>
        </Grid>

    )
}

export default StoryBook