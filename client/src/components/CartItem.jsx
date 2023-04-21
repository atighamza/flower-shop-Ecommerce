import React from 'react'
import flower from '../assets/flower.jpg'
import './cartItem.css'
import { FaTimes } from 'react-icons/fa'
const CartItem = () => {
  return (
    <div className='flex flex-col items-center md:flex-row  md:items-center w-[80%]  md:w-[60%] lg:w-full   border border-[#E0B1B8] bg-white text-black relative  mb-5'>
      <div className='img md:border-r-[1px]   md:border-slate-100'>
        <img src={flower} alt="" className='w-full h-[15rem]' />
      </div>
      <div className='content flex flex-col gap-4 items-center text-[#39524C] mt-8 md:pr-[3rem]'>
        <h3 className='text-3xl'>Flower Bouquet</h3>
        <p className='text-xl font-semibold	'>$420.00</p>
        <div>
            <input type="button" value="-"  className='w-[30px] border-2 border-[#E0B1B8] bg-[#E0B1B8] '/>
            <input type="number" name="" id="quantity"  className='w-12 border-y-2 border-[#E0B1B8] text-center' /> 
            <input type="button" value="+" className='w-[30px] border-2 border-[#E0B1B8] bg-[#E0B1B8]'/>
        </div>
        <p className='font-semibold pb-5'>Total : $420.00</p>
        <div className='w-[20px] h-[20px] bg-[#E0B1B8] flex justify-center items-center text-white absolute top-0 left-0 cursor-pointer'>
            <FaTimes  />
        </div>
      </div>
    </div>
  )
}

export default CartItem
