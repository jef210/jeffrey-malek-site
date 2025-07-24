import dynamic from 'next/dynamic'
import { Page } from '@/payload-types'
import HeroBlock from './HeroBlock'
import ContentBlock from './ContentBlock'

// Only use dynamic import for client components
const ContactFormBlock = dynamic(() => import('./ContactFormBlock'), { 
  loading: () => <div>Loading form...</div>
})

type LayoutBlock = Page['layout'][number]

export default function DynamicBlocksRenderer({ layout }: { layout: LayoutBlock[] }) {
  if (!layout || !Array.isArray(layout)) return null
  
  const renderBlock = (block: LayoutBlock, index: number) => {
    if (!block || !block.blockType) return null
    
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock block={block} key={block.id || index} />
      case 'content':
        return <ContentBlock block={block} key={block.id || index} />
      case 'contact-form':
        return <ContactFormBlock block={block} key={block.id || index} />
      default:
        return null
    }
  }

  return <>{layout.map((block, index) => renderBlock(block, index))}</>
}
