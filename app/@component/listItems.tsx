'use client'
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import Collapse from '@mui/material/Collapse';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import redux from '@/app/@img/redux.svg'
import postgresql from '@/app/@img/postgresql.png'
import vercel from '@/app/@img/vercel.png'
import nextjs from '@/app/@img/nextjs.svg'
import jotai from '@/app/@img/jotai.png'
import storybook from '@/app/@img/storybook.png'
import typescript from '@/app/@img/typescript.png'
import rxjs from '@/app/@img/rxjs.png'
import zustand from '@/app/@img/zustand.png'
import { Node } from 'postcss';


interface ListObj {
  title: string,
  path: string,
  icon?: React.ReactNode,
  children?: ListObj[]
}

const List = ({ listArr, nested }: { listArr: ListObj[], nested?: boolean }) => {
  const pathname = usePathname();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return listArr.map((item) => {
    const listItem = (<>
      <ListItemIcon>
        {item.icon}
      </ListItemIcon>
      <ListItemText primary={item.title} />
    </>
    )
    return item.children && item.children.length > 0 ?
      (<>
        <ListItemButton key={item.title} onClick={handleClick} selected={item.children.some(children => pathname == children.path)}>
          {listItem}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List listArr={item.children} nested />
        </Collapse>
      </>)
      : (<Link href={item.path} key={item.title} style={{ textDecorationLine: 'none', color: 'inherit' }}>
        <ListItemButton sx={{ pl: nested ? 4 : null }} selected={pathname == item.path}>
          {listItem}
        </ListItemButton>
      </Link>)
  }
    // item.children ?
    //   (<>
    //     <ListItemButton key={item.title} onClick={handleClick} selected={item.children.some(children => pathname == children.path)}>
    //       <ListItemIcon>
    //         {item?.icon}
    //       </ListItemIcon>
    //       <ListItemText primary={item.title} />
    //       {open ? <ExpandLess /> : <ExpandMore />}
    //     </ListItemButton>
    //     <Collapse in={open} timeout="auto" unmountOnExit>
    //       <List listArr={item.children} nested />
    //     </Collapse>
    //   </>)
    //   : (<Link href={item.path} key={item.title} style={{ textDecorationLine: 'none', color: 'inherit' }}>
    //     <ListItemButton sx={{ pl: nested ? 4 : null }} selected={pathname == item.path}>
    //       <ListItemIcon>
    //         {item.path === '/' ? <HomeIcon /> : item?.icon}
    //       </ListItemIcon>
    //       <ListItemText primary={item.title} />
    //     </ListItemButton>
    //   </Link>)
  )

}

export const MainListItems = () => {
  const list = [
    {
      title: 'About Me',
      path: '/',
      icon: <HomeIcon />
    }
  ]
  return (
    <List listArr={list} />
  )
}
  ;

export const SecondaryListItems = () => {
  const iconsFormat = (src: any) => {
    return <Image src={src} alt={src} width={28} height={28} />
  }

  const list = [
    {
      title: '其他套件',
      path: '/Other',
      icon: <EditNoteIcon></EditNoteIcon>,
      children: [
        {
          title: 'react-checkbox-tree',
          path: '/react-checkbox-tree',
          icon: <CheckBoxOutlinedIcon></CheckBoxOutlinedIcon>,
        },
        {
          title: 'react-query',
          path: '/react-query',
          icon: <QueryBuilderIcon></QueryBuilderIcon>,
        }
      ]
    },
    {
      title: 'NextJS',
      path: '/NextJS',
      icon: iconsFormat(nextjs)
    },
    {
      title: 'TypeScript',
      path: '/TypeScript',
      icon: iconsFormat(typescript)
    },
    {
      title: 'Jotai',
      path: '/Jotai',
      icon: iconsFormat(jotai)
    },
    {
      title: 'ZuStand',
      path: '/ZuStand',
      icon: iconsFormat(zustand)
    },
    {
      title: 'RxJS',
      path: '/RxJS',
      icon: iconsFormat(rxjs)
    },
    {
      title: 'Redux',
      path: '/Redux',
      icon: iconsFormat(redux)
    },
    {
      title: 'StoryBook',
      path: '/StoryBook',
      icon: iconsFormat(storybook)
    },
    {
      title: 'PostgreSql',
      path: '/PostgreSql',
      icon: iconsFormat(postgresql)
    },
    {
      title: 'Vercel',
      path: '/Vercel',
      icon: iconsFormat(vercel)
    },
  ]


  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Learn Note
      </ListSubheader>
      <List listArr={list} />
    </React.Fragment >
  )
};
