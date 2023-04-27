import React from 'react'
import { FaTimes } from 'react-icons/fa'
import flower from '../assets/flower.jpg'
import instance from '../axios/axios'
import { removeProducts } from '../redux/slices/wishListSlice'
import { useSelector , useDispatch } from 'react-redux'
const wishListItem = ({name , image , price , id}) => {
  const wishList = useSelector(state =>state.wishList)
  const dispatch = useDispatch() 

  const removeProduct = () => {
    dispatch(removeProducts({id , name}))
  }

  return (
    <div className='flex flex-col items-center   md:flex-row  md:items-center w-[80%]  md:w-[80%] lg:w-full   border border-[#E0B1B8] bg-white text-black relative  mb-5'>
        <div className='img md:border-r-[1px]   md:border-slate-100 overflow-hidden	'>
            <img src={image} alt="" className='w-full lg:w-[15rem] h-[13rem] hover:scale-110 ' />
        </div>
        <div className=' flex gap-[4rem] w-full items-center text-[#39524C] mt-8 md:pr-[3rem] md:pl-[7rem]'>
            <h3 className='text-3xl'>{name}</h3>
            <p className='text-xl font-semibold	'>{`${price} DT`}</p>
            <button  className=' block w-[30%] h-[50px] bg-[#E74593] text-white font-medium '>View Details</button>
            <div onClick={removeProduct} className='w-[20px] h-[20px] bg-[#E0B1B8] flex justify-center items-center text-white absolute top-0 left-0 cursor-pointer'>
                <FaTimes  />
            </div>
        </div>
    </div>
  )
}

export default wishListItem
