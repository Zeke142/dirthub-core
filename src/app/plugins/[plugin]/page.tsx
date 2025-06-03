'use client'

import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'

const pluginMap = {
  example: dynamic(() => import('../../../../plugins/example/index'), { ssr: false }),
}

export default function PluginPage() {
  const { plugin } = useParams()
  const PluginComponent = pluginMap[plugin]

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
