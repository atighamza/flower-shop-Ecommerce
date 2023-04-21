import React from 'react'
import { AiOutlineClose , AiOutlineMenu , AiFillHeart } from 'react-icons/ai'
import { FaUserAlt , FaShoppingCart }from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
    const [nav , setNav] = useState(true)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-around md:justify-around text-[#445752]  items-center mt-3 z-50 relative'>
      
      <div className='mr-7 mt-3 cursor-pointer md:hidden'onClick={handleNav} >
        {
            !nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />
        }
      </div>
      <h1 className='text-4xl sm:ml-6 md:mr-0'>Petal<span className='font-bold'>Paradise</span></h1>
      
      <ul className={`w-1/2 h-full md:w-auto md:flex pl-5 fixed  top-16 md:static bg-white md:bg-inherit ease-in-out duration-200   ${!nav ? 'left-0' : 'left-[-100%]' } `}>
        <li className='py-3 md:text-xl lg:text-2xl text-[#445752] cursor-pointer md:ml-8'>Home</li>
        <li className='py-3 md:text-xl lg:text-2xl text-[#445752] cursor-pointer md:ml-8'>Shop</li>
        <li className='py-3 md:text-xl lg:text-2xl text-[#445752] cursor-pointer md:ml-8'>Categories</li>
        <li className='py-3 md:text-xl lg:text-2xl text-[#445752] cursor-pointer md:ml-8'>Contact</li>
      </ul>
      
      <div className='flex items-center mt-3 ml-3 mr-6'>
        <div className='cursor-pointer mr-2 relative'> 
            <MdOutlineShoppingCart size={30} />
            <span className='bg-red-500	 text-white rounded-full w-[15px] h-[15px] mt-[-5px] absolute top-0 right-0  text-center flex justify-center items-center '> 1 </span>
        </div>
        <div className='cursor-pointer mr-2'> 
          <AiFillHeart size={30} />
        </div>
        <div className='cursor-pointer '>
            <FaUserAlt size={25} />
        </div>
      </div>

    </div>
  )
}

export default Navbar
