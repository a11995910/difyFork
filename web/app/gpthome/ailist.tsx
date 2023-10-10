'use client'
import React from 'react'
import AppCardList from './AppCardList'

const AiList = () => {
  const appList = [{
    apps: [
      {
        id: '6904e7a0-493e-41af-92fd-0c6ecadffa9f',
        icon: '🤖',
        icon_background: '#FFEAD5',
        mode: 'chat',
        name: 'chatGPT-3.5',
        link: 'qjLUCoZuUm8WRcZt',
      },
      {
        id: '6904e7a0-493e-41af-92fd-0c6ecadffa9f',
        icon: '🤖',
        icon_background: '#FFEAD5',
        mode: 'chat',
        name: 'SAGA-GPT',
        link: 'BSZ9lta5mgVIdo5J',
      },
      {
        id: '6904e7a0-493e-41af-92fd-0c6ecadffa9f',
        icon: '🤖',
        icon_background: '#FFEAD5',
        mode: 'chat',
        name: '文心一言',
        link: 'h1R6ClasNPNie53v',
      },
      {
        id: '6904e7a0-493e-41af-92fd-0c6ecadffa9f',
        icon: '🤖',
        icon_background: '#FFEAD5',
        mode: 'chat',
        name: '讯飞星火',
        link: 'hrNnwrMQkQxbzKjz',
      },
    ],
    name: '文本类型AI',
  }, {
    apps: [
      {
        id: '6904e7a0-493e-41af-92fd-0c6ecadffa9f',
        icon: '🤖',
        icon_background: '#FFEAD5',
        mode: 'image',
        name: 'StabelDfusion',
        link: 'http://sd.fc-stable-diffusion.1008816883085255.cn-beijing.fc.devsapp.net/',
      }],
    name: '图像类型AI',
  }]
  return (
    <nav className='grid content-start grid-cols-1 gap-4 px-12 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grow shrink-0'>
      {appList.map(itme => (
        <div>
          <h2>{itme.name}</h2>
          <AppCardList appList={itme.apps} />
        </div>
      ))}
    </nav>
  )
}

export default AiList
