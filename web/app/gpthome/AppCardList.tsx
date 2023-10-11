'use client'

import type { Key } from 'react'
import AppCard from './AppCard'

export type AppCardListProps = {
  appList: any
}

const AppCardList = ({ appList }: AppCardListProps) => {
  return (
    <>
      <div>
        <nav className='grid content-start grid-cols-1 gap-4 px-12 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grow shrink-0'>
          {appList.map((app: { id: Key | null | undefined }) => (
            <AppCard key={app.id} app={app} />
          ))}
        </nav>
      </div>
    </>
  )
}

export default AppCardList
