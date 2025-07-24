import { Page } from "@/payload-types"
import SafeRichText from "./SafeRichText"

type ContentProps = Extract<Page['layout'][0], { blockType: 'content' }>

export default function ContentBlock({ block }: { block: ContentProps }) {
  if (!block) return null
  
  return (
    <div className="py-12 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">{block.heading}</h2>
      <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
        {block.content && <SafeRichText data={block.content} className="content-block" />}
      </div>
    </div>
  )
}