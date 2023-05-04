import React , {useEffect} from 'react'
import instance from '../axios/axios'
import { useForm } from 'react-hook-form'


const ChangeInfos = () => {
    useEffect(()=>{

    },[])
    const { register , formState : {errors}, handleSubmit } = useForm({resolver:yupResolver(schema)})
    const formSubmit = (data) =>{

    }

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)} className='flex flex-col gap-y-10 items-center mt-14'>
        <label htmlFor="name" className='text-2xl'>Change Full name</label>
        <input {...register('name')}  type="text"  className='border-[1px] border-black w-[30%] h-9 '/>
        <label htmlFor="name" className='text-2xl'>Changepassword</label>
        <input {...register('password')} type="text" className='border-[1px] border-black w-[30%] h-9 '/>
        <button className='bg-[#E74593] p-4 mt-5 text-white '>Save changes</button>
      </form>
    </div>
  )
}

export default ChangeInfos
