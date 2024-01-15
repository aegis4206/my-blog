import type { Metadata } from 'next'
import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'

import CodeHighlight from '@/app/@component/prism/CodeHighlight';

export const metadata: Metadata = {
    title: "learn daily note - Next JS",
    description: 'Next JS',
}



const NextJS = () => {
    const installCode = `npx create-next-app@latest 或 yarn create next-app`;
    const folderCode = `App
|--post
    |--[postId]
        |--[...others]
// 使用[]代入參數

// 含有@無法透過url路由訪問
|--@component

// 可使用()作為Route Groups管理 利用()資料夾進行分類
// 其路由一樣透過 /auth /priority 訪問即可
|--(management)
    |--[auth]
    |--[priority]`

    const paramsCode = `// url:/post/1/aa/bb?type=test
params: { 
    postId: "1",
    others: [ "aa", "bb" ] 
},
searchParams: { type: "test" }`
    const csrCode = `"use client"`
    const imageCode = `module.exports = {
images: {
    remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.example.com',
                port: '',
                pathname: '/account123/**',
            },
        ],
    },
}`
    const fetchCode = `fetch('https://random.imagecdn.app/v1/image?format=json', {
    cache:"no-store"

    // 或是設定next參數項，revalidate傳入刷新秒數
    next: {
        revalidate: 5,

    },
});`

    const ssgCode = `export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())
   
    // 透過map出來的所有id當成頁面的params參數(key)
    // 例如id = 1~10 ， url:/post/1 /post/2 ...
    // 最後透過/post 代入各params.id依序做成SSR
    return posts.map((post) => ({
        id: post.id.toString(),
        })
    )
}
`
const configCode = `/** @type {import('next').NextConfig} */
const nextConfig = {
    // 增加compiler
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig`

const registryCode = `'use client'
 
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
 
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
 
  if (typeof window !== 'undefined') return <>{children}</>
 
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}`
const layoutCode = `import StyledComponentsRegistry from './lib/registry'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}`

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
                    NextJS
                </Typography>
                <Typography>
                    為解決React SEO問題的框架
                </Typography>
                <Typography>
                    環境安裝
                </Typography>
                <CodeHighlight language="bash" code={installCode} />
                <Typography variant="h6">
                    APP Router
                </Typography>
                <Typography>
                    App為根目錄，底下資料夾即為路由
                </Typography>
                <CodeHighlight code={folderCode} />
                <Typography>
                    router取出props代入參數
                </Typography>
                <CodeHighlight code={paramsCode} />
                <Typography>
                    新版next13以上預設為Server Component，不需要再去熟悉getServerSideProps、getStaticProps、getInitialProps
                    <br></br>
                    若需要切換為CSR，僅需在component上方加上以下程式碼即可
                </Typography>
                <CodeHighlight code={csrCode} />
                <Typography>
                    使用{"<Image />"}引入外部圖片，需額外在next.config.js設定
                </Typography>
                <CodeHighlight title="next.config.js" code={imageCode} />
                <Typography>
                    Cache機制，若需要每次都重新fetch Data，需在參數項設定no-store，或者可使用ISR next參數項
                </Typography>
                <CodeHighlight code={fetchCode} />
                <Typography>
                    SSG應用，使用在資料不經常更動下，使用export fuNenction generateStaticParams
                </Typography>
                <CodeHighlight code={ssgCode} />
                <Typography variant="h6">
                    Styled Components
                </Typography>
                <Typography>
                    在CSR下使用可能造成CSS異步渲染的情況，可使用官方的解決方法，其做法為將全部CSS style rules先收集塞到Head裡面
                </Typography>
                <CodeHighlight title="next.config.js" code={configCode} />
                <CodeHighlight title="lib/registry.tsx" code={registryCode} />
                <Typography>
                    使用方式類似狀態管理工具，需在外層在包覆一層
                </Typography>
                <CodeHighlight title="app/layout.tsx" code={layoutCode} />
            </Paper>
        </Grid>

    )
}

export default NextJS