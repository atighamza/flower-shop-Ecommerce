import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import instance from '../axios/axios';

const ContactForm = () => {
    const [success , setSuccess] = useState(false)
    const [status , setStatus] = useState('')

    const schema = yup.object({
        email: yup.string().email().required(),
        name : yup.string().min(3).required(),
        message : yup.string().required(),
      })
    
    const { register , formState : {errors}, handleSubmit , reset} = useForm({resolver:yupResolver(schema)})
    const onSubmit = (data) => {
        console.log(data)
        instance.post('/mail',{
            text : data.message , 
            from : data.email
        })
        .then(res => {
            console.log(res)
            setSuccess(true)
            setStatus('')
            reset()
        })
        .catch(err=>{
            console.log(err)
            setStatus(err.response.status)
            setSuccess(false)
        })
    }
  return (
    <div>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl font-semibold my-4'>Contact Form</h1>
            {success && <p className='text-2xl text-green-600'>Your email has been sent successfuly</p>}
            {success && <p className='text-2xl text-green-600'>Your email has been sent successfuly</p>}
            {status && (status < 500)  && <p className='text-2xl text-red-600'>there is an error</p>}
        </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center' >
        <input {...register('name')} className='w-[80%]  md:w-[50%] mt-4 h-[3.2rem] border-[1px] rounded border-[#dcd7d7] placeholder:pl-6 placeholder:text-[#707070]' placeholder='Name'/>
        {errors.name && <span className='text-red-600'>{errors.name?.message}</span>}
        <input {...register('email')} className='w-[80%] md:w-[50%]  mt-4 h-[3.2rem] border-[1px] rounded border-[#dcd7d7] placeholder:pl-6 placeholder:text-[#707070]' placeholder='Email'/>
        {errors.email && <span className='text-red-600'>{errors.email?.message}</span>}
        <textarea  {...register('message')} cols="30" rows="10" className='w-[80%]  md:w-[50%]  mt-4  border-[1px] rounded border-[#dcd7d7] placeholder:pl-6 placeholder:text-[#707070]' placeholder='Message'>
        </textarea>
        {errors.message && <span className='text-red-600'>{errors.message?.message}</span>}
        <button className='w-[80%]  md:w-[50%]  h-[50px] bg-[#E74593] text-white font-medium my-6 '>Send</button>

      </form>
    </div>
  )
}

export default ContactForm
