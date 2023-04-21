import React from 'react'
import FlowerPhoto from "../assets/flower.jpg"
import { AiFillHeart  } from 'react-icons/ai';
import { BsArrowReturnRight } from 'react-icons/bs'
import '../components/product.css'
const Product = () => {
  return (
        
        <div className='w-[60%] sm:w-[90%]  rounded-lg border-[3px] border-[#0000001a] box '>
            <div className=' shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.1)] bg-white  relative rounded-lg  '>
                <span className='absolute top-4 left-4 py-[0.7rem] px-4 text-xl text-[#E84393] bg-[#ff339917] rounded-lg'>-10%</span>
                <div className='relative'>
                    <img src={FlowerPhoto} alt="" className='w-full rounded-lg h-[20rem] sm:h-full md:h-[18rem] ' />
                    <div className=' flex invisible absolute bottom-[-3rem] left-0 right-0 items-center text-white icons ease-in-out duration-200 '>
                        <a href="" className='bg-[#E84393] w-1/2 h-10 flex justify-center items-center hover:bg-[#756d6d]'><AiFillHeart size={25}  /></a>
                        <a href="" className='bg-[#E84393] w-1/2 h-10 flex justify-center items-center border-x-2 border-[#fff7] hover:bg-[#756d6d] '>Add to cart</a>
                        <a href="" className='bg-[#E84393] w-1/2 h-10 flex justify-center items-center hover:bg-[#756d6d]'><BsArrowReturnRight size={30} /></a>
                        
                    </div>
                </div>
                <div className='content flex flex-col items-center font-bold text-2xl py-4  '>
                    <h3 className='text-[#333] '>flower pot</h3>
                    <div className='text-[#E84393] '>$12.99</div>
                </div>
            </div>
        </div>
     

  )
}

export default Product
