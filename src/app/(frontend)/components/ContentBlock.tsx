'use client'
import { Page } from "@/payload-types"
import { RichText } from "@payloadcms/richtext-lexical/react"
import Image from "next/image"

type ContentProps = Extract<Page['layout'][0], { blockType: 'content' }>

export default function ContentBlock({ block }: { block: ContentProps }) {
  return (
    <div>
      <h2>{block.heading}</h2>
      <div className="content-block">
        <RichText data={block.content} />
      </div>
    </div>
  )
}