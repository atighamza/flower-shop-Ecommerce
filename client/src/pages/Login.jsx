import React from 'react'
import homePhoto from "../assets/homePhoto.png"
import Navbar from '../components/Navbar'
const Login = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
    <section className=" flex justify-center items-center  mt-10  lg:justify-normal md:mt-32 md:ml-20" >
        <div className='w-full max-w-md mt-16 md:mt-0 sm:max-w-lg md:max-w-xl'>
          <div style={{backgroundColor:'rgba(231, 69, 147, 0.38)'}} className='z-10 flex flex-col justify-center items-center py-7' >
            <h2 className='text-3xl text-white mb-3'>Login</h2>
            <form action="" className='flex flex-col justify-center items-center w-10/12'>
              <label htmlFor="" className='text-white self-start mb-3'>E-mail</label>
              <input type="text" className='w-full h-8 bg-[rgb(231,69,147)]/40 border-[#656565] border-b mb-8' />

              <label htmlFor="" className='text-white self-start mb-3'>Password</label>
              <input type="text" className='w-full h-8 bg-[rgb(231,69,147)]/40 border-[#656565] border-b' />
              <div className='flex justify-center mt-3 '>
                  <button className='text-white rounded-3xl px-12 h-12 text-xl bg-[#39524C] z-20 mt-4'>Login </button>
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

export default Login
