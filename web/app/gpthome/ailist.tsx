'use client'
import React from 'react'
import AppCard from './AppCard'

const AiList = () => {
  const appList = [
    {
      id: '6904e7a0-493e-41af-92fd-0c6ecadffa9f',
      icon: '🤖',
      icon_background: '#FFEAD5',
      mode: 'chat',
      name: 'chatGPT-3.5',
      link: 'bExiuiVEyNZWh9JL',
    },
  ]
  return (
    <nav className='grid content-start grid-cols-1 gap-4 px-12 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grow shrink-0'>
      {appList.map(app => (
        <AppCard key={app.id} app={app} />
      ))}
    </nav>
  )
}

export default AiList
