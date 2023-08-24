import React from 'react'
import cn from 'classnames'
import style from './page.module.css'
import Header from './_header'
import AiList from './ailist'

const GptHome = () => {
  return (
    <>
      <div className={cn(
        style.background,
        'flex w-full min-h-screen',
        'sm:p-4 lg:p-8',
        'gap-x-20',
        'justify-center lg:justify-start',

      )}>
        <div className={
          cn(
            'flex w-full flex-col bg-white\/5 shadow rounded-2xl shrink-0',
            'space-between',
          )
        }>
          <Header />
          {/* 显示所有的AI模型 分为三大类 国产与国外与自研 */}
          <AiList />
          <div className={cn(style.footer, 'px-8 py-6 text-sm font-normal text-gray-500')}>
              © {new Date().getFullYear()} SAGA.AI, Inc. 服务提供.
          </div>
        </div>
      </div>
    </>
  )
}

export default GptHome
