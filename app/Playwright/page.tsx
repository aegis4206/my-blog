import type { Metadata } from 'next'
import React, { useState } from 'react'
import { Grid, Typography, Paper, Button } from '@mui/material'
export const metadata: Metadata = {
    title: "learn daily note - Playwright",
    description: 'Playwright',
}
import CodeHighlight from '@/app/@component/prism/CodeHighlight';

const Playwright = () => {
    const installCode = `npm init playwright@latest 或 yarn create playwright`
    const snapCode = `const moment = require('moment');
const { chromium } = require('playwright')
    
const start = async () => {
    const browser = await chromium.launch();

    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.screenshot({
        // 截圖儲存路徑
        path: \`\${moment().format("yyyyMMDD")\`
    }_snap.png
    });
    await browser.close();
    console.log("done")
}
start();`

    const genCode = `yarn playwright codegen url --output path`
    const pageCode = `// 等待指定的CSS選擇器匹配的元素出現
await page.waitForSelector('#exampleElement');
// timeout設定
await page.waitForTimeout(2000);
// $選擇第一個匹配的元素
const element = await page.$('#exampleElement');
// $$選擇所有匹配的元素
// 加上eval=>回調函數回傳所有元素的陣列
const texts = await page.$$eval('.exampleClass', elements => 
    elements.map(element => element.textContent));
// evaluate可執行pageFunction(也可以接受回傳送)
await page.evaluate(() => {
    // 模擬向下滑動
    window.scrollTo(0, document.getElementById('page-manager').scrollHeight);
});
// click模擬點擊
await page.click('#expand');
// 等待頁面跳轉完成
await page.click('#link');
await page.waitForNavigation();
//調整視窗大小
await page.setViewportSize({ width: 1200, height: 800 });
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
                    Playwright
                </Typography>
                <Typography>
                    爬蟲工具
                </Typography>
                <Typography>
                    環境安裝
                </Typography>
                <CodeHighlight language="bash" code={installCode} />
                <Typography>
                    聚集模式紀錄網頁操作行為
                </Typography>
                <CodeHighlight language="bash" code={genCode} />
                <Typography>
                    截圖
                </Typography>
                <CodeHighlight code={snapCode} />
                <Typography>
                    page相關指令
                </Typography>
                <CodeHighlight code={pageCode} />
            </Paper>
        </Grid>

    )
}

export default Playwright