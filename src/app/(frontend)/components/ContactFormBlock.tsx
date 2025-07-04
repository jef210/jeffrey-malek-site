'use client'
import { Page } from "@/payload-types"
import { useState } from 'react'

type ContactFormProps = Extract<Page['layout'][0], { blockType: 'contact-form' }>
type FormState = {
    loading: boolean
    error: string | null
    success: boolean
}


export default function ContactFormBlock({ block }: { block: ContactFormProps }) {
    const [formData, setFormData] = useState({})
  //console.log('ContactFormBlock block:', block)
  // Placeholder submit handler
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Add your form logic here
    if (!block.form || typeof block.form !== 'object') return

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
console.log(data)
  }
//console.log('FIELDS:', block.form.fields)
  return (
    <div>
      {typeof block?.form === 'object' && block?.form?.title.toLowerCase() === 'contact' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',}}>
          <h2>{block.heading}</h2>
          <form className="form" onSubmit={handleSubmit} style={{width:'100%', maxWidth:'400px'}}>
            {block.form.fields?.map((field: any) => (
              <div key={field.name}
              style={{ marginBottom: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                maxWidth: '600px',
              }}
              >
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  type={field.blockType}
                  name={field.name}
                  required={field.required}
                  placeholder={field.label}
                  style={{ padding: '10px', borderRadius: '5px', border: '3px solid #ccc' }}
                />
              </div>
            ))}
            <button type="submit">{block.form.submitButtonLabel || 'CONTACT'}</button>
          </form>
        </div>
      )}
    </div>
  )
}

