import React, { useState } from 'react'
import homePhoto from "../assets/homePhoto.png"
import Navbar from '../components/Navbar'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link , useNavigate , Navigate} from 'react-router-dom';
import instance from '../axios/axios';
import { useSelector , useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
const Login = () => {

  const [error , setError] = useState('')
  const [status , setStatus] = useState(0)
  const [redirect , setRedirect] = useState(false)

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const schema = yup.object({
    email: yup.string().email().required(),
    password : yup.string().min(3).required(),
  })

  const { register , formState : {errors}, handleSubmit } = useForm({resolver:yupResolver(schema)})


  const onSubmit = (data) => {
    console.log(data) 
    instance.post('/user/login',{
      email : data.email ,
      password : data.password
    })
  .then(res=>{
      console.log(res.data)
      dispatch(login(res.data))
      setError('')
      navigate('/') 
      
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
    <section className=" flex justify-center items-center  mt-10  lg:justify-normal md:mt-32 lg:ml-20 " >
        <div className='w-full max-w-md mt-16 md:mt-0 sm:max-w-lg md:max-w-xl'>
          <div  className='z-10 flex flex-col justify-center items-center py-7 relative bg-[#E0B1B8]' >
            <h2 className='text-3xl text-white mb-3'>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center w-10/12'>
              <label htmlFor="" className='text-white self-start mb-3'>E-mail</label>
              <input {...register('email')} className='w-full h-8 bg-[#F3E1EB] border-[#656565] border-b mb-8' />
              {errors.email && <span className='text-red-600'>{errors.email?.message}</span>}

              <label htmlFor="" className='text-white self-start mb-3'>Password</label>
              <input {...register('password')} className='w-full h-8 bg-[#F3E1EB] border-[#656565] border-b mb-8' />
              {errors.password && <span className='text-red-600'>{errors.password?.message}</span>}

              {error &&  ((status>0)&&(status<500)) && <span className='text-red-600'>{error}</span> }

              <div className='mt-4'>
                <p className='text-white text-xl'>you don't have an account ? <span className='text-[#E74593] font-semibold cursor-pointer'><Link to='/register'>Sign Up </Link></span></p>
              </div>

              <div className='flex justify-center mt-3 '>
                  <button className='text-white rounded-3xl px-12 h-12 text-xl bg-[#39524C] z-20 mt-4'>Login </button>
              </div>
            </form>
           
          </div>

            <div className=' relative z-0'>
              <img src={homePhoto} alt=""  className='hidden lg:block md:fixed md:bottom-0  md:right-[-10rem] md:w-10/12 md:h-4/5 '/>
            </div>
        </div>
    </section>
</div>
  )
}

export default Login
