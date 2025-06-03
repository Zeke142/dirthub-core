'use client'

import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'

const pluginMap: Record<string, unknown> = {
  example: dynamic(() => import('@/app/plugins/example/index'), { ssr: false }),
  map: dynamic(() => import('@/app/plugins/map/index'), { ssr: false }),
  profile: dynamic(() => import('@/app/plugins/profile/index'), { ssr: false }),
}

export default function PluginPage() {
  const { plugin } = useParams()
  const PluginComponent = pluginMap[plugin as string] as React.ElementType

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
