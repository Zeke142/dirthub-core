'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const pluginMap: Record<string, any> = {
  example: dynamic(() => import('./plugins/example/index'), { ssr: false }),
  map: dynamic(() => import('./plugins/map/index'), { ssr: false }),
  profile: dynamic(() => import('./plugins/profile/index'), { ssr: false }),
}

export default function HomePage() {
  const router = useRouter()

  const loadPlugin = (name: string) => {
    router.push(`/plugins/${name}`)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">DirtHub Core</h1>
      <div className="flex flex-col gap-2">
        {Object.keys(pluginMap).map((key) => (
          <button
            key={key}
            onClick={() => loadPlugin(key)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Open {key} plugin
          </button>
        ))}
      </div>
    </div>
  )
}
