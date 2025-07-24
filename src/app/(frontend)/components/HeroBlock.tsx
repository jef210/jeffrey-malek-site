import {Page} from "@/payload-types";
import SafeRichText from "./SafeRichText"
import Image from "next/image"
import Link from "next/link";

type HeroProps = Extract<Page['layout'][0], { blockType: 'hero' }>;


export default function HeroBlock({block}: {block: HeroProps}) {
    if (!block) return null
    
    return (
    <div className="flex flex-col items-center text-center p-6 md:p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl my-8 border border-gray-200 shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">{block.heading}</h1>
        {block.subheading && (
          <div className="mb-8 text-lg md:text-xl text-gray-600 max-w-3xl">
            <SafeRichText data={block.subheading} />
          </div>
        )}
       {typeof block?.image === 'object' && block.image?.url && (
        <Image 
          src={block.image.url} 
          alt={block.image.alt || ''} 
          width={800} 
          height={600} 
          priority
          className="rounded-xl shadow-2xl mb-8 max-w-full h-auto transition-transform hover:scale-105 duration-300"
        />
        )}
        {block.cta_button?.url && block.cta_button?.label && (
        <Link
         href={block.cta_button.url}
         className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 no-underline shadow-lg hover:shadow-xl transform hover:-translate-y-1"
         >
            {block.cta_button.label}
         </Link>
        )}
        </div>   
    )
    
}