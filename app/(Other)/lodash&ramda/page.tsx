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
_.zipObject(['a', 'b'], [1, 2]); 
R.zipObj(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
// 差集
_.difference([2, 1], [2, 3]); // => [1]
R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
// 交集
_.intersection([2, 1], [4, 2], [1, 2]); // => [2]
R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
// 聯集
_.union([1], [3, 1, 2], [2, 4]); // => [1, 3, 2, 4]
R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
// 深拷貝 FN 一樣是by reference 
const objects = [{ }, { }];
const deep_ = _.cloneDeep(objects);
const deepR = R.clone(objects);
console.log(deep[0] === objects[0]);
// => false

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
// chunk 拆解陣列
_.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
_.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
// 產生亂數 _.random([lower=0], [upper=1], [floating])
_.random(0, 5); // => 0 ~ 5

// Ramda
// 組合FN pipe 由左至右 第一個FN可接受多參數 
// 後續FN只能接受一個參數(上一個FN的返回值)
const first = (a) => { console.log(a); return ++a }
const second = (b) => { console.log(b); }
const pipe = R.pipe(first, second)
pipe(1) => a = 1 , b = 2
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