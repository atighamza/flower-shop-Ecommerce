import React, { useEffect } from 'react'
import { AiOutlineClose , AiOutlineMenu , AiFillHeart } from 'react-icons/ai'
import { FaUserAlt , FaShoppingCart }from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useState } from 'react'
import { Link , useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = ({route}) => {
    const [nav , setNav] = useState(true)
    const cart = useSelector(state => state.cart)
    const auth = useSelector(state => state.auth)
    const location = useLocation()
    const path=location.pathname
    useEffect(()=>{
      console.log(location.pathname)
    },[])

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-around md:justify-around text-[#445752]  items-center py-3 z-50 relative bg-[#F3E1EB]'>
      
      <div className='mr-7 mt-3 cursor-pointer md:hidden'onClick={handleNav} >
        {
            !nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />
        }
      </div>
      <Link to='/'><h1 className='text-4xl sm:ml-6 md:mr-0'>Petal<span className='font-bold'>Paradise</span></h1></Link>
      
      <ul className={`w-1/2 h-full md:w-auto md:flex pl-5 fixed  top-16 md:static bg-white md:bg-inherit ease-in-out duration-200   ${!nav ? 'left-0' : 'left-[-100%]' } `}>
        <li className={`py-3 md:text-xl lg:text-2xl  text-[#445752] cursor-pointer md:ml-8 ${path=='/' && 'font-semibold'}`}><Link to='/'>Home</Link></li>
        <li className={`py-3 md:text-xl lg:text-2xl  text-[#445752] cursor-pointer md:ml-8 ${path=='/shop' && 'font-semibold'}`}><Link to='/shop'>Shop</Link></li>
        <li className={`py-3 md:text-xl lg:text-2xl  text-[#445752] cursor-pointer md:ml-8 ${path=='/contact' && 'font-semibold'}`}><Link to='/contact'>Contact</Link></li>
      </ul>
      
      <div className='flex items-center mt-3 ml-3 mr-6'>
        <Link to='/cart'>
        <div className='cursor-pointer mr-2 relative'> 
              <MdOutlineShoppingCart size={30} />
              {cart.products.length >0 &&
                <span className='bg-red-500	 text-white rounded-full w-[17px] h-[17px] mt-[-5px] absolute top-0 right-0  text-center flex justify-center items-center '>{cart.products.length}</span>
              }
        </div>
      </Link>

        <Link to='/wishlist'>
        <div className='cursor-pointer mr-2'> 
          <AiFillHeart size={30} />
        </div>
        </Link>

        <Link to='/login'>
          <div className='cursor-pointer '>
            {
              auth.isAuthenticated==true ? <FaUserAlt size={25} /> : <FiLogIn size={25} />
            }
              
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Navbar
