'use client'

import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'

export default function PluginPage() {
  const { plugin } = useParams()
  const PluginComponent = dynamic(
    () => import(`../../../plugins/${plugin}/index`),
    {
      loading: () => <p>Loading plugin...</p>,
      ssr: false,
    }
  )

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Plugin: {plugin}</h1>
      <PluginComponent />
    </div>
  )
}
