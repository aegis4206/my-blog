import type { Metadata } from 'next'
import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'
export const metadata: Metadata = {
    title: "learn daily note - lodash&ramda",
    description: 'lodash&ramda',
}
import CodeHighlight from '@/app/@component/prism/CodeHighlight';

const FnTools = () => {
    const installCode = `npm i lodash ramda 或 yarn add lodash ramda;`
    const curryCode = `import _ from 'lodash'
import * as R from 'ramda'

// Ramda可以柯里化拆解應用
const double = R.map(n=> n * 2)
const result = double(Array)
// 若要在Lodash上實現需進行柯里化
// currying正向curryRight反向
const currying = _.curryRight(_.map)
// 或是使用JS原生作法
const currying = doubleFN => lists => _.map(lists, doubleFN)
const double = currying(n => n * 2)
const result = double(Array)

// 其餘常用的像map、filter、reduce、forEach
// 用法與原生JS一樣

// sort 預設為昇序
// Lodash額外有orderBy可追加第三個參數
// _.orderBy(Array, [ ...Columns ], [ asc, desc, ... ] )
const sortRes = _.sortBy(Array, 'Column');
const sortRes = R.sortBy(R.prop('Column'), Array, 'desc');

// array或obj比較 
// 比較key value(嚴格比較)
// 非比較記憶體位址
const isEqual = _.isEqual(obj1, obj2);
const isEqual = R.equals(obj1, obj2);`
    const goodAPICode = `// 組合Key Value
lodash.zipObject(['a', 'b'], [1, 2]); 
R.zipObj(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }

// Lodash
// 指定次數調用函數API
// after 調用後第n次執行
// before 調用執行n次就不執行
// 若搭配useState需注意會重新渲染問題
_.after(n, Fn)
// debounce
_.debounce( Fn , 秒數ms, { 'maxWait': 最多秒數ms })
// defer 推遲調用函數 等待當前同步函數處理完畢後執行
_.defer(Fn);
// throttle 指定時間內不重複觸發
_.throttle( Fn, 秒數ms)
// maxBy 找obj中特定Column最大值
_.maxBy(Obj, 'Column')
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
                    lodash&ramda
                </Typography>
                <Typography>
                    FP工具
                </Typography>
                <Typography>
                    套件安裝
                </Typography>
                <CodeHighlight language="bash" code={installCode} />
                <Typography>
                    Lodash雖為FP但未Currying，Ramda是函數式在前、對象在後，而Lodash則相反
                </Typography>
                <CodeHighlight code={curryCode} />
                <Typography>
                    一些好用的API
                </Typography>
                <CodeHighlight code={goodAPICode} />

            </Paper>
        </Grid>

    )
}

export default FnTools