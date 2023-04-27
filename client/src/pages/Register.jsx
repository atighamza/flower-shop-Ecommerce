import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate , Navigate } from 'react-router-dom'
import homePhoto from "../assets/homePhoto.png"
import Navbar from '../components/Navbar'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import instance from '../axios/axios'
import { useSelector , useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
const Register = () => {
  const [error , setError] = useState('')
  const [status , setStatus] = useState(0)
  const [success , setSuccess] = useState('')

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const schema = yup.object({
    name:yup.string().min(3).required(),
    email: yup.string().email().required(),
    password : yup.string().min(3).required(),
    confirm_password: yup.string().required().oneOf([yup.ref('password')], 'Your passwords do not match.')
  })


  const { register ,formState: { errors }, handleSubmit  } = useForm({resolver:yupResolver(schema)})
  const onSubmit = (data) => {
    console.log(data) 
    instance.post('/user',{
      name : data.name,
      email : data.email, 
      password : data.password,
    })
    .then(res=>{
      console.log(res)
      setError('')
      setSuccess('account created successfully')
      setTimeout(()=>{
        navigate('/login') 
      },5000)
      
    })
    .catch(err=>{
      console.log(err.response.status)
      setStatus(err.response.status)
      setError(err.response.data.message)
    })
  }

  if (auth.isAuthenticated){
    return <Navigate to='/' />
  } 

  return (
<div className='overflow-hidden'>
      <Navbar />
    <section className=" flex justify-center items-center  mt-10  lg:justify-normal md:mt-32 md:ml-20" >
        <div className='w-full max-w-md mt-16 md:mt-0 sm:max-w-lg md:max-w-xl'>
          <div className=' flex flex-col justify-center items-center py-7 bg-[#E0B1B8] relative z-10 mb-8' >
            <h2 className='text-3xl text-white mb-3'>Sign up </h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center w-10/12'>
              <label htmlFor="" className='text-white self-start mb-3'>Full name</label>
              <input {...register('name')} className='w-full h-8 bg-[#F3E1EB] border-[#656565] border-b mb-4' />
              {errors.name && <span className='text-red-600'>{errors.name?.message}</span>}

              <label htmlFor="" className='text-white self-start mb-3'>E-mail</label>
              <input {...register('email')} className='w-full h-8 bg-[#F3E1EB] border-[#656565] border-b mb-4' />
              {errors.email && <span className='text-red-600'>{errors.email?.message}</span>}

              <label htmlFor="" className='text-white self-start mb-3'>Password</label>
              <input {...register('password')} className='w-full h-8 bg-[#F3E1EB] border-[#656565] border-b mb-4' />
              {errors.password && <span className='text-red-600'>{errors.password?.message}</span>}

              <label htmlFor="" className='text-white self-start mb-3'>confirm password</label>
              <input {...register('confirm_password')} className='w-full h-8 bg-[#F3E1EB] border-[#656565] border-b mb-2' />
              {errors.confirm_password && <span className='text-red-600'>{errors.confirm_password?.message}</span>}

              {error &&  ((status>0)&&(status<500)) && <span className='text-red-600'>{error}</span> }
              {success &&<span className='text-green-600'>{`${success} please wait to redirect to login`}</span> }
              <div className='mt-4'>
                <p className='text-white text-lg'>already have an account ? <span className='text-[#E74593] font-semibold cursor-pointer'><Link to='/login'>Sign in</Link></span></p>
              </div>

              
              <div className='flex justify-center mt-3 relative z-0'>
                  <button className='text-white rounded-3xl px-12 h-12 text-xl bg-[#39524C] z-20 mt-4'>Sign up </button>
              </div>
            </form>
           
          </div>

            <div className='z-0'>
              <img src={homePhoto} alt=""  className='hidden lg:block md:fixed md:bottom-0  md:right-[-10rem] md:w-10/12 md:h-4/5'/>
            </div>
        </div>
    </section>
</div>
  )
}

export default Register
