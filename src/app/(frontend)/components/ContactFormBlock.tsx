import { Page } from "@/payload-types"
import ClientContactFormBlock from './ClientContactFormBlock'

type ContactFormProps = Extract<Page['layout'][0], { blockType: 'contact-form' }>

export default function ContactFormBlock({ block }: { block: ContactFormProps }) {
  return <ClientContactFormBlock block={block} />
}

