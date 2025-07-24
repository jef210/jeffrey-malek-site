import { getPayload } from 'payload'
import config from '@/payload.config'

const seed = async () => {
  const payload = await getPayload({ config })

  console.log('Seeding database...')

  // Create sample pages with proper Lexical format
  const pages = [
    {
      title: 'Home Page',
      slug: 'home',
      layout: [
        {
          blockType: 'hero' as const,
          heading: 'Welcome to My Amazing Site',
          subheading: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'This is a beautiful hero section with Tailwind CSS styling and responsive design.',
                      type: 'text',
                      version: 1
                    }
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  type: 'paragraph',
                  version: 1
                }
              ],
              direction: 'ltr'
            }
          },
          image: null,
          cta_button: {
            label: 'Get Started',
            url: '/about'
          }
        },
        {
          blockType: 'content' as const,
          content: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 1,
                      mode: 'normal',
                      style: '',
                      text: 'About Our Services',
                      type: 'text',
                      version: 1
                    }
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  type: 'paragraph',
                  version: 1
                },
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'We provide exceptional web development services using modern technologies like Next.js, Payload CMS, and Tailwind CSS.',
                      type: 'text',
                      version: 1
                    }
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  type: 'paragraph',
                  version: 1
                }
              ],
              direction: 'ltr'
            }
          }
        }
      ]
    },
    {
      title: 'About Page',
      slug: 'about',
      layout: [
        {
          blockType: 'hero' as const,
          heading: 'About Our Company',
          subheading: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Learn more about our mission, vision, and the amazing team behind our success.',
                      type: 'text',
                      version: 1
                    }
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  type: 'paragraph',
                  version: 1
                }
              ],
              direction: 'ltr'
            }
          },
          image: null,
          cta_button: null
        }
      ]
    }
  ]

  // Insert pages
  for (const pageData of pages) {
    try {
      const existingPage = await payload.find({
        collection: 'pages',
        where: {
          slug: {
            equals: pageData.slug
          }
        }
      })

      if (existingPage.docs.length === 0) {
        await payload.create({
          collection: 'pages',
          data: pageData as any
        })
        console.log(`✅ Created page: ${pageData.title}`)
      } else {
        console.log(`⚠️  Page already exists: ${pageData.title}`)
      }
    } catch (error) {
      console.error(`❌ Error creating page ${pageData.title}:`, error)
    }
  }

  console.log('✅ Database seeding completed!')
  process.exit(0)
}

seed().catch((error) => {
  console.error('❌ Seeding failed:', error)
  process.exit(1)
})
