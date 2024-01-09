'use client'
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
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
  icon: React.ReactNode
}

const List = ({ listArr }: any) => {
  const router = useRouter();
  const pathname = usePathname();

  return listArr.map((item: ListObj) => (<Link href={item.path} key={item.title} style={{ textDecorationLine: 'none', color: 'inherit' }}>
    <ListItemButton selected={pathname == item.path}>
      <ListItemIcon>
        {item.path === '/' ? <HomeIcon /> : item?.icon}
      </ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItemButton>
  </Link>))
}

export const MainListItems = () => {
  const list = [
    {
      title: 'About Me',
      path: '/'
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
      icon: <EditNoteIcon></EditNoteIcon>
    },
    {
      title: 'Jotai',
      path: '/Jotai',
      icon: iconsFormat(jotai)
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
