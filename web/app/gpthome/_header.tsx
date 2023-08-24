'use client'
import React from 'react'
import cn from 'classnames'
import style from './page.module.css'

const Header = () => {
  return <div className='flex items-center justify-center p-6 w-full'>
    <div className={style.logo}></div>
    <div className={cn(style.titleH2, 'text-2xl', 'font-bold', 'text-gray-700')}>SAGA.AI 中心</div>

  </div>
}

export default Header
