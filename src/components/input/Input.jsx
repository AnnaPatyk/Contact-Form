import React from 'react'
import "./input.css"
import { ErrorMessage, Field } from 'formik'

export default function Input({id, label, name, placeholder, type}) {
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <Field type={type}  name={name} id={id} placeholder={placeholder}/>
      <ErrorMessage name={name}>{(error)=><span>{error}</span>}</ErrorMessage>
    </div>
  )
}
