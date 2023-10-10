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
        {appList.map((app: { id: Key | null | undefined }) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </>
  )
}

export default AppCardList
