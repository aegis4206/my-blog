import Grid from "@mui/material/Grid"
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';

import Image from "next/image";
import redux from '@/app/@img/redux.svg'
import postgresql from '@/app/@img/postgresql.png'
import firebase from '@/app/@img/firebase.png'
import vercel from '@/app/@img/vercel.png'
import nextjs from '@/app/@img/nextjs.svg'
import zustand from '@/app/@img/zustand.png'
import jotai from '@/app/@img/jotai.png'

interface svgObject {
  src: string,
  alt: string
}
const iconLists: string[] = [
  "fa-brands fa-node", "fa-brands fa-react", "fa-brands fa-vuejs", "fa-brands fa-git"
]
const svgLists: svgObject[] = [
  {
    src: redux,
    alt: 'redux'
  },
  {
    src: postgresql,
    alt: 'postgresql'
  },
  {
    src: firebase,
    alt: 'firebase'
  },
  {
    src: vercel,
    alt: 'vercel'
  },
  {
    src: nextjs,
    alt: 'nextjs'
  },
  {
    src: zustand,
    alt: 'zustand'
  },
  {
    src: jotai,
    alt: 'jotai'
  },
]

export default function index() {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <div>
          <h1>陳俊佑</h1>
          <h2>使用工具</h2>
          <div className="flex-wrap flex">
            {iconLists.map(icon => <i key={icon} className={icon} style={{ fontSize: '32px' }}></i>)}
            {svgLists.map(svg => <Image key={svg.alt} src={svg.src} alt={svg.alt} width={32} height={33.6} />)}
          </div>
          <h2>簡歷</h2>
          <div className="timeline">
            <div className="event">
              <div className="date">在職中</div>
              <div className="description">
                <h3>工作經歷-萬通國際資訊工程師</h3>
                <p>正航ERP系統維護，員工打卡考勤系統後台開發，挑工系統開發與維護。</p>
              </div>
            </div>
            <div className="event">
              <div className="date">2023</div>
              <div className="description">
                <h3>工作經歷-壹立方數位前端工程師</h3>
                <p>主要產品eHair美髮pos系統，後台新功能開發與既有功能維護(Vue2+Laravel)
                  <br></br>
                  其他舊專案維護(台灣黑熊保育協會、極樂寺社團法人台南市淨宗學會)。</p>
              </div>
            </div>
            <div className="event">
              <div className="date">2022-2023</div>
              <div className="description">
                <h3>離職自學-前端技術</h3>
                <p>於2022年10月底離職開始接觸前端。</p>
              </div>
            </div>
            <div className="event">
              <div className="date">2022</div>
              <div className="description">
                <h3>工作經歷-群創光電製程設備高級工程師</h3>
                <p>Rubbing機台的製程與機台維護改造、FFU監控系統開發。</p>
              </div>
            </div>
            <div className="event">
              <div className="date">2018-2022</div>
              <div className="description">
                <h3>工作經歷-台灣大福軟體規劃工程師(系統分析)</h3>
                <p>依客戶需求系統分析後規劃成仕樣書、MCS軟體需求規劃、SECS SEMI通訊規格規劃。</p>
              </div>
            </div>
            <div className="event">
              <div className="date">2018</div>
              <div className="description">
                <h3>碩士論文-物流中心揀貨無人搬運車之派車法則最適化研究</h3>
                <p> 物流中心情境狀況進行系統模擬(Arena)，分析在不同的系統車數與不同的派車法則下，對物流中心系統績效的影響。</p>
              </div>
            </div>
            <div className="event">
              <div className="date">2017</div>
              <div className="description">
                <h3>產學專案-大永鋁門窗倉儲開發設計</h3>
                <p>使用Google APP Inventor 2開發MySQL+PHP(Middleware轉介CRUD)線上庫存管理系統APP。</p>
              </div>
            </div>
            <div className="event">
              <div className="date">2016</div>
              <div className="description">
                <h3>大學專題-餐廳網站製作</h3>
                <p>利用Wordpress結合MySQL來架設餐廳品牌形象網站。</p>
              </div>
            </div>
            <div className="event">
              <div className="date">2014</div>
              <div className="description">
                <h3>大學活動-機器人競賽</h3>
                <p>使用Google APP Inventor 2開發Mbot操作App，參加全國大專院校競賽，參加項目Mbot摸黑與搬運競速。</p>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </Grid>
  )
}