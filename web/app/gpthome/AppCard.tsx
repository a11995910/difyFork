'use client'

import { useContext, useContextSelector } from 'use-context-selector'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import style from '../(commonLayout)/list.module.css'
import AppModeLabel from '../(commonLayout)/apps/AppModeLabel'
import type { App } from '@/types/appcard'
import { ToastContext } from '@/app/components/base/toast'
import { deleteApp } from '@/service/apps'
import AppIcon from '@/app/components/base/app-icon'
import AppsContext from '@/context/app-context'

export type AppCardProps = {
  app: App
  onRefresh?: () => void
}

const AppCard = ({ app, onRefresh }: AppCardProps) => {
  const { t } = useTranslation()
  const { notify } = useContext(ToastContext)

  const mutateApps = useContextSelector(
    AppsContext,
    state => state.mutateApps,
  )

  const [showConfirmDelete, setShowConfirmDelete] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [detailState, setDetailState] = useState<{
    loading: boolean
    detail?: App
  }>({ loading: false })

  const onConfirmDelete = useCallback(async () => {
    try {
      await deleteApp(app.id)
      notify({ type: 'success', message: t('app.appDeleted') })
      if (onRefresh)
        onRefresh()
      mutateApps()
    }
    catch (e: any) {
      notify({
        type: 'error',
        message: `${t('app.appDeleteFailed')}${
          'message' in e ? `: ${e.message}` : ''
        }`,
      })
    }
    setShowConfirmDelete(false)
  }, [app.id])

  return (
    <>
      <Link
        href={`/chat/${app.link}`}
        className={style.listItem}
      >
        <div className={style.listItemTitle}>
          <AppIcon
            size="small"
            icon={app.icon}
            background={app.icon_background}
          />
          <div className={style.listItemHeading}>
            <div className={style.listItemHeadingContent}>{app.name}</div>
          </div>
        </div>
        <div className={style.listItemDescription}>
          {app.model_config?.pre_prompt}
        </div>
        <div className={style.listItemFooter}>
          <AppModeLabel mode={app.mode} />
        </div>
      </Link>
    </>
  )
}

export default AppCard
