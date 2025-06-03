|||'use client'

import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'

 HEAD
const pluginMap = {
  example: dynamic(() => import('../../../../plugins/example/index'), { ssr: false }),

const pluginMap: Record<string, any> = {
  example: dynamic(() => import('../../../plugins/example/index'), { ssr: false }),
  map: dynamic(() => import('../../../plugins/map/index'), { ssr: false }),
  profile: dynamic(() => import('../../../plugins/profile/index'), { ssr: false }),
 9c8bf0ef9449307e435f3eda4c302b3decf986c3
}

export default function PluginPage() {
  const { plugin } = useParams()
 HEAD
  const PluginComponent = pluginMap[plugin]

  const PluginComponent = pluginMap[plugin as string]
 9c8bf0ef9449307e435f3eda4c302b3decf986c3

  if (!PluginComponent) {
    return <div className="p-4 text-red-600">Plugin not found: {plugin}</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Plugin: {plugin}</h1>
      <PluginComponent />
    </div>
  )
}
