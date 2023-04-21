import React from 'react'
import Navbar from '../components/Navbar'
import Carts from '../components/Carts'
import slider from '../assets/slider.png'
import { Link } from 'react-router-dom'
const CartPage = () => {
  return (
    <div className='mb-[5rem]'>
      <Navbar />
      <div style={{background:`url(${slider})center top no-repeat fixed`}} className='w-full h-fit py-[90px] mt-[5rem]'>
        <div className='text-white  text-center tracking-[5px] '>
            <h1 className='text-5xl'>YOUR SHOPPING CART</h1>
            <p className='mt-[15px]'>
              <a href="">Home </a>
              / Your Shopping Cart
            </p>
        </div>
      </div>
      <h1 className='text-3xl text-[#E74593] flex justify-center mt-10'>YOUR SHOPPING CART</h1>
      <Carts />
    </div>
  )
}

export default CartPage
