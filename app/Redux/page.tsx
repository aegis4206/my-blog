import type { Metadata } from 'next'
import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'
export const metadata: Metadata = {
    title: "learn daily note - Redux",
    description: 'Redux',
}
import CodeHighlight from '@/app/@component/prism/CodeHighlight';

const Redux = () => {
    const installCode = `npm i react-redux 或 yarn add react-redux
// toolkit
npm i @reduxjs/toolkit 或 yarn add @reduxjs/toolkit`


    const providerCode = `import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// 使用toolkit combineReducers合併全部的Ruducers
// 引用名稱將決定取用名稱
import useSlice from '@/app/store/useSlice';
import { combineReducers } from "@reduxjs/toolkit";
    
const store = configureStore(
    { reducer: allReducers }
)
    
export default function RootLayout({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}`

    const storeCode = `import { createSlice } from "@reduxjs/toolkit";
// 設定初始值
const initialState = {
    state: 1
}
    
const useSlice = createSlice({
    // store名稱
    name: 'state',
    // 初始值
    initialState,
    reducers: {
        setState: (allState, action) => {
            // 傳入參數action.playload
            allState.state = action.playload
        }
    }
})
    
export const { setState } = useSlice.actions;
export default useSlice.reducer;   `

    const useCode = `import { useSelector, useDispatch } from 'react-redux';
// 引入store方法
import { setState } from '../store/useSlice';

// 引用名稱useSlice
const state = useSelector((state) => state.useSlice.state);
const dispatch = useDispatch();

// 變更變數方法 傳入playload
dispatch(setState(newValue));`

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
                    Redux toolkit
                </Typography>
                <Typography>
                    狀態管理工具
                </Typography>
                <Typography>
                    套件安裝
                </Typography>
                <CodeHighlight language="bash" code={installCode} />
                <Typography>
                    使用Provider包覆所有需要用到狀態的組件
                </Typography>
                <CodeHighlight title="layout.tsx" code={providerCode} />
                <Typography>
                    創建store
                </Typography>
                <CodeHighlight title="useSlice.jsx" code={storeCode} />
                <Typography>
                    useSelector(取用變數)、useDispatch(變更變數)
                </Typography>
                <CodeHighlight code={useCode} />
            </Paper>
        </Grid>

    )
}

export default Redux