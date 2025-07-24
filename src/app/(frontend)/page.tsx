import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import BlocksRenderer from './components/BlocksRenderer'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'landing-page',
      },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }
  
  // This is commented out cause in the tutorial code the old version of nextjs caused an issue
  //Summary
//The tutorial works due to older Next.js/React behavior.
//Modern Next.js requires interactive blocks to be rendered inside a Client Component.
//Move your block rendering into a Client Component as shown above. 



// Type for a block in the layout array
/*type LayoutBlock = Page['layout'][number]

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
  }*/


  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlocksRenderer layout={page.layout} />
      </div>
    </main>
  )
}