'use client'

import dynamic from 'next/dynamic'

const pluginMap: Record<string, unknown> = {
  example: dynamic(() => import('@/app/plugins/example/index'), { ssr: false }),
  map: dynamic(() => import('@/app/plugins/map/index'), { ssr: false }),
  profile: dynamic(() => import('@/app/plugins/profile/index'), { ssr: false }),
}

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">DirtHub Plugin Demo</h1>
      <div className="grid gap-4">
        {Object.keys(pluginMap).map((key) => {
          const PluginComponent = pluginMap[key] as React.ElementType
          return (
            <div key={key} className="border p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-2">{key}</h2>
              <PluginComponent />
            </div>
          )
        })}
      </div>
    </main>
  )
}
