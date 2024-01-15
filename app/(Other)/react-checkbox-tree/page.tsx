import type { Metadata } from 'next'
import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'
export const metadata: Metadata = {
    title: "learn daily note - react-checkbox-tree",
    description: 'react-checkbox-tree',
}
import CodeHighlight from '@/app/@component/prism/CodeHighlight';

const React_Checkbox_Tree = () => {
    const installCode = `npm i react-checkbox-tree 或 yarn add react-checkbox-tree`
    const code = `import CheckboxTree from 'react-checkbox-tree';

// List格式
interface treeType {
value: string,
label: string,
children?: treeType[]

// 初始化已選擇、已展開
const [checked, setChecked] = useState<string[]>([])
const [expanded, setExpanded] = useState<string[]>([])

// 組件套用
<CheckboxTree
    nodes={List} // List資料
    checked={checked}
    expanded={expanded}
    onCheck={checked => setChecked(checked)}
    onExpand={expanded => setExpanded(expanded)}
    showExpandAll={true} // 開啟全部展開關閉

    // 自訂各功能的icon
    icons={{
        expandOpen: <ExpandLess style={{ width: 16 }} />,
        expandAll: <ExpandMore style={{ width: 16 }} />,
        expandClose: <ExpandMore style={{ width: 18 }} />,
        collapseAll: <ExpandLess style={{ width: 18 }} />,
    }}
    // 自訂各Button提示文字
    lang={{
        toggle:'',
        collapseAll:'全部摺疊', 
        expandAll:'全部展開'
    }}
/>`


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
                    react-checkbox-tree
                </Typography>
                <Typography>
                    樹狀checkbox生成工具，可客製化參數較多。
                </Typography>
                <Typography>
                    套件安裝
                </Typography>
                <CodeHighlight language="bash" code={installCode} />
                <Typography>
                    與其他UI庫內的Tree差不多，一樣為value、label、children
                </Typography>
                <CodeHighlight code={code} />
                

            </Paper>
        </Grid>

    )
}

export default React_Checkbox_Tree