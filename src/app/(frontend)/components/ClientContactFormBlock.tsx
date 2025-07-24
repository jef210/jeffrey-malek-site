'use client'
import { Page } from "@/payload-types"
import { useState } from 'react'

type ContactFormProps = Extract<Page['layout'][0], { blockType: 'contact-form' }>

export default function ClientContactFormBlock({ block }: { block: ContactFormProps }) {
  const [formData, setFormData] = useState({})
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!block.form || typeof block.form !== 'object') return

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    console.log(data)
  }

  if (!block || !block.form || typeof block.form !== 'object') {
    return null
  }

  // Check if form has title and if it's the contact form
  const isContactForm = block.form.title && typeof block.form.title === 'string' && 
                       block.form.title.toLowerCase() === 'contact'

  if (!isContactForm) {
    return null
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="flex flex-col items-center px-4 md:px-8 max-w-2xl mx-auto">
        {block.heading && (
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
            {block.heading}
          </h2>
        )}
        <form className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 space-y-6" onSubmit={handleSubmit}>
          {block.form.fields && Array.isArray(block.form.fields) && block.form.fields.map((field: any, index: number) => (
            <div key={field.name || index} className="space-y-2">
              <label 
                htmlFor={field.name}
                className="block text-sm font-semibold text-gray-700"
              >
                {field.label || field.name}
              </label>
              <input
                type={field.blockType || 'text'}
                name={field.name}
                required={field.required}
                placeholder={field.label || field.name}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all duration-200"
              />
            </div>
          ))}
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {block.form.submitButtonLabel || 'CONTACT'}
          </button>
        </form>
      </div>
    </div>
  )
}
