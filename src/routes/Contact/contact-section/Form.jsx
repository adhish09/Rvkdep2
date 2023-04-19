import React, {useState, useReducer} from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'
import axios from '../../../services/apiService'

import './form.css'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'

 

const formInputs = [
  { id: 'name', type: 'text', name:"name",label: 'Your name', placeholder: 'John Doe' },
  {
    id: 'tel',
    type: 'tel',
    name:"phone",
    label: 'Phone number',
    placeholder: '+01 234 567 8900',
  },
  {
    id: 'email',
    type: 'email',
    name:"email",
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    name:"message",
    label: 'Your message',
    placeholder: 'How can we help you? Or you us?',
  
  },
]


const Form = () => {
  const { register,handleSubmit,reset,   watch, formState: { errors } } = useForm();
    
 
  function onSubmit(data) {
    
     axios.post("/api/contact/",data)
     .then(res=>{
      toast.success(<h1>successfully contact</h1>)
     })
     .catch(err=>{
      toast.error(err?.message)
     })
    reset(); // Reset the form
  }

  
  return (
  <form className="form" onSubmit={handleSubmit(onSubmit)}>
    <h2 className="form-h2">Send us a message</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea"  name={input.name}  {...register(input.name, { required: true })} placeholder={input.placeholder} />
        ) : (
          <input
            className="form-input"
            name={input.name}
            type={input.type}
            {...register(input.name, { required: true })}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}

<div> {errors.email && <span> {toast.error(<h1> please fill email field</h1>)} </span>}
    {errors.name && <span> {toast.error(<h1> please fill name field </h1>)} </span>}
    {errors.message && <span> {toast.error(<h1> please fill message field</h1>)} </span>}
    {errors.phone && <span> {toast.error(<h1> please fill phone field</h1>)} </span>}</div>
    
<button
  className="form-submit"
  style={{ border: 'none', cursor: 'pointer', '&:hover': { width: '154px', color: 'red' } }}
  type="submit"
>
 
  <Icon
    className="form-submits"
    style={{ border: 'none',}}
    icon={sendCircle}
  />
</button>

    {/* <button  className="form-submit" style={{border:"none",cursor:"pointer",    ':hover': {
      width: "154px",
      color: "red"
    }
}}  type="submit">
       fdgdsfg
      <Icon className="form-submit" style={{border:"none",'&:hover':{width:"15px",color:"red"}}}     icon={sendCircle}  />
    </button> */}
  </form>
  )
  }

export default Form
