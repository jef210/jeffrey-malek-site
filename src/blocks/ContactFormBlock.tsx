import { Block } from "payload";    

export const ContactFormBlock: Block = {
  slug: "contact-form",
  fields: [
    {
      name: "heading",
      type: "text",
      required: false,
    },
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      required: true,
    },
  ],
};