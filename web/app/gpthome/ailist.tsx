'use client'
import React from 'react'
import AppCardList from './AppCardList'
import style from './style.module.css'

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
        intro: 'ChatGPT普通版，通用型AI，可生成、处理任何文本内容。包括处理行业问题、提供建议等。',
      },
      {
        id: '6904e7a0-493e-41af-92fd-0c6ecadffa9f',
        icon: '🤖',
        icon_background: '#FFEAD5',
        mode: 'chat',
        name: 'SAGA-GPT',
        link: 'BSZ9lta5mgVIdo5J',
        intro: '基于ChatGPT进行微训练，纳入赛格国际购物中心相关基本信息知识与资料。',
      },
      {
        id: '6904e7a0-493e-41af-92fd-0c6ecadffa9f',
        icon: '🤖',
        icon_background: '#FFEAD5',
        mode: 'chat',
        name: 'minimax',
        link: 'TAIdXJpePGYa7YHf',
        intro: '商汤科技背景的初创公司AI产品',
      },
      {
        id: '6904e7a0-493e-41af-92fd-0c6ecadffa9f',
        icon: '🤖',
        icon_background: '#FFEAD5',
        mode: 'chat',
        name: 'llama-2-70b-chat',
        link: 'TAIdXJpePGYa7YHf',
        intro: 'META（原Facebook）出品的通用型AI 训练数据量700亿 智能化超过ChatGPT普通版',
      },
      {
        id: '6904e7a0-493e-41af-92fd-0c6ecadffa9f',
        icon: '🤖',
        icon_background: '#FFEAD5',
        mode: 'chat',
        name: '文心一言',
        link: 'h1R6ClasNPNie53v',
        intro: '百度文心一言产品。国内通用型AI。',
      },
      {
        id: '6904e7a0-493e-41af-92fd-0c6ecadffa9f',
        icon: '🤖',
        icon_background: '#FFEAD5',
        mode: 'chat',
        name: '讯飞星火',
        link: 'hrNnwrMQkQxbzKjz',
        intro: '讯飞星火认知大模型。国内通用型AI。',
      },
      {
        id: '6904e7a0-493e-41af-92fd-0c6ecadffa9f',
        icon: '🤖',
        icon_background: '#FFEAD5',
        mode: 'chat',
        name: '通义千问',
        link: 'tVFD1Kc3gQzdvjhI',
        intro: '阿里AI大模型。国内通用型AI。',
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
        intro: '文本生成图像，需要调整各种参数进行图像创作。能力接近Midjourney。',
      }],
    name: '图像类型AI',
  }]
  return (
    <>
      {appList.map((itme, index) => (
        <div className={style.pad10} key={index}>
          <h2>{itme.name}</h2>
          <AppCardList appList={itme.apps} />
          <div className={style.padding10}></div>
        </div>
      ))}
    </>
  )
}

export default AiList
