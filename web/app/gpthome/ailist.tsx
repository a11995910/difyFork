'use client'
import React from 'react'
import useSWR from 'swr'
import AppCard from './AppCard'
import { fetchAppList } from '@/service/apps'
import Loading from '@/app/components/base/loading'

const AiList = () => {
  const { data: appList, error: appListError } = useSWR({ url: '/apps', params: { page: 1 } }, fetchAppList)
  if (!appList) {
    return <div className='flex h-full items-center justify-center'>
      <Loading type='area' />
    </div>
  }
  if (appListError)
    return <div>暂无配置相关AI产品</div>
  return (
    <nav className='grid content-start grid-cols-1 gap-4 px-12 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grow shrink-0'>
      {appList.data.map(app => (
        <AppCard key={app.id} app={app} />
      ))}
    </nav>
  )
}

export default AiList
