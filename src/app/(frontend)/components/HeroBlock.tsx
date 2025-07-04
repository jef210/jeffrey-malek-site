import {Page} from "@/payload-types";
import {RichText} from "@payloadcms/richtext-lexical/react"
import Image from "next/image"
import Link from "next/link";

type HeroProps = Extract<Page['layout'][0], { blockType: 'hero' }>;


export default function HeroBlock({block}: {block: HeroProps}) {
    return (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        margin: '20px 0',
        border: '3px solid #ddd',
    }}>
        <h1>{block.heading}</h1>
        <RichText data={block.subheading} />
       {typeof block?.image === 'object' && block.image.url && (
        <Image src={block.image?.url!} alt={block.image?.alt!} width={800} height={600} priority/>
        )}
        <Link
         href={block.cta_button.url}
         style={{
            textDecoration: 'none',
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '10px 20px',   
            borderRadius: '5px',
            display: 'inline-block',
            marginTop: '20px',
         }}
         >
            {block.cta_button.label}
         </Link>

        
        </div>   
    )
    
}