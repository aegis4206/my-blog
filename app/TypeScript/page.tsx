import type { Metadata } from 'next'
import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'
export const metadata: Metadata = {
    title: "learn daily note - Other",
    description: 'TypeScript',
}
import CodeHighlight from '@/app/@component/prism/CodeHighlight';



const TypeScript = () => {
    const installCode = `npm install -g typescript 或 yarn add -g typescript`;
    const typeCode = `let num: number = 10;
let str: string = "Hello";
let flag: boolean = true;
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let sym: symbol = Symbol("key");
let bigInt: bigint = BigInt(9007199254740991);
let value: any = 5; // 任意型別
let value: string | number = 1 ; // 也可以聯合型別
`;
    const genericsCode = `interface Test<T,U> {
    ss: T[],
    xx: U[]
};

// 陣列object key:ss value:string
const aaa: Test<string,number>[] = [{ 
    ss: ['123'] ,
    xx: [123]
}];`;
    const interfaceCode = `// 可重複宣告，會自動進行合併
interface Person {
    name: string;
    age: number;
};
    
interface Person {
    gender: string;
};
const john: Person = {
    name: "John",
    age: 30,
    gender: "male",
};

// 也可以使用extends繼承
interface PersonSayHello extends Person{
    sayHello(): void;
};
const joson: PersonSayHello = {
    ...john,
    sayHello: () => {
        console.log("Hello!");
    },
}
`
const typesCode = `// 可聯合型別
type A = { a: number };
type B = { b: string };

type AB = A & B; // 包含 A 和 B 的屬性
type AorB = A | B; // 包含 A 或 B 的屬性
type AandNew = A & {
    c: boolean;
}; // 包含 A 和 新 的屬性`

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
                    TypeScript
                </Typography>
                <Typography >
                    為彌補弱型別的JS而生，基於JS的型別管理
                </Typography>
                <Typography >
                    環境安裝
                </Typography>
                <CodeHighlight language="bash" code={installCode} />
                <Typography>
                    資料型別(若無設定型別，TS會根據初始值推論該變數型別)
                </Typography>
                <CodeHighlight code={typeCode} />
                <Typography >
                    泛型，宣告類型以{"<型別>"}代入型別參數
                </Typography>
                <CodeHighlight code={genericsCode} />
                <Typography >
                    interface與type差別
                </Typography>
                <CodeHighlight title="interface" code={interfaceCode} />
                <CodeHighlight title="type" code={typesCode} />

            </Paper>
        </Grid>

    )
}

export default TypeScript