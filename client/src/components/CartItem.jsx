import React from 'react'
import flower from '../assets/flower.jpg'
import './cartItem.css'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeItem , updateQuantity } from '../redux/slices/cartSlice'
const CartItem = ({name , price , totalPrice , productQuantity , img}) => {
  const [quantity , setQuantity] = useState(productQuantity)
  const dispatch = useDispatch()

const decreaseQunatity = ()=>{
  if (quantity>0){
    setQuantity(quantity-1)
    dispatch(updateQuantity({operation : 'decrease' , quantityUpdated : 1 , name}))
  }
}

const increaseQunatity = ()=>{
  setQuantity(quantity+1)
  dispatch(updateQuantity({operation : 'increase' , quantityUpdated : 1 , name}))
}

  return (
    <div className='flex flex-col items-center md:flex-row  md:items-center w-[80%]  md:w-[60%] lg:w-full   border border-[#E0B1B8] bg-white text-black relative  mb-5'>
      <div className='img md:border-r-[1px]   md:border-slate-100 overflow-hidden	'>
        <img src={img} alt="" className='w-[15rem] h-[15rem] hover:scale-110 ' />
      </div>
      <div className='content flex flex-col gap-4 items-center text-[#39524C] mt-8 md:pr-[3rem] md:pl-[7rem]'>
        <h3 className='text-3xl'>{name}</h3>
        <p className='text-xl font-semibold	'>{`${price} DT`}</p>
        <div>
            <input type="button" value="-" onClick={decreaseQunatity} className='w-[30px] border-2 border-[#E0B1B8] bg-[#E0B1B8] cursor-pointer'/>
            <input type="number" name="" value={quantity} onChange={(e)=>setQunatity(e.target.value)} id="quantity"  className='w-12 border-y-2 border-[#E0B1B8] text-center' /> 
            <input type="button" value="+" onClick={increaseQunatity} className='w-[30px] border-2 border-[#E0B1B8] bg-[#E0B1B8] cursor-pointer'/>
        </div>
        <p className='font-semibold pb-5'>{`Total : ${totalPrice} DT`}</p>
        <div className='w-[20px] h-[20px] bg-[#E0B1B8] flex justify-center items-center text-white absolute top-0 left-0 cursor-pointer'
          onClick={()=>{dispatch(removeItem({name}))}}
          >
            <FaTimes  />
        </div>
      </div>
    </div>
  )
}

export default CartItem
