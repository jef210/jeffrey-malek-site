'use client'
import HeroBlock from './HeroBlock'
import ContentBlock from './ContentBlock'
import ContactFormBlock from './ContactFormBlock'
import { Page } from '@/payload-types'

type LayoutBlock = Page['layout'][number]

export default function BlocksRenderer({ layout }: { layout: LayoutBlock[] }) {
  const renderBlock = (block: LayoutBlock) => {
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock block={block} key={block.id} />
      case 'content':
        return <ContentBlock block={block} key={block.id} />
      case 'contact-form':
        return <ContactFormBlock block={block} key={block.id} />
      default:
        return null
    }
  }

  return <>{layout?.map(renderBlock)}</>
}