import {HeroBlock} from '@/blocks/HeroBlock'
import {CollectionConfig} from 'payload'

const Pages: CollectionConfig = {
    slug: 'pages',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
        },
        {
            name:'layout',
            type: 'blocks',
            required: true,
            blocks:[HeroBlock],
        },

    ],
}

export default Pages