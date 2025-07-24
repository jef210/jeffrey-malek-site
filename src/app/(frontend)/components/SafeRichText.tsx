'use client'
import { RichText as PayloadRichText } from "@payloadcms/richtext-lexical/react"
import { useEffect, useState } from 'react'

type RichTextProps = {
  data: any
  className?: string
}

export default function SafeRichText({ data, className }: RichTextProps) {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!data) return null
  
  // For server-side rendering, return a simple div
  if (!isClient) {
    return <div className={className} suppressHydrationWarning />
  }
  
  return (
    <div className={className}>
      <PayloadRichText data={data} />
    </div>
  )
}
