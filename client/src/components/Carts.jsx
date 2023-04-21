import React from 'react'
import { Link } from 'react-router-dom'
import { MdAddShoppingCart } from 'react-icons/md'
import { useState } from 'react'
import CartItem from './CartItem'
const Cart = () => {
    const [length , setLength] = useState(1)
  return (
    <div className='  mt-[3rem]'>
        <div>
            {length === 0 ?
            <div className='flex justify-center items-center mt-8 text-white'>
                <div className='flex items-center flex-col'>
                    <div><MdAddShoppingCart size={70} className='mx-auto'/></div>
                    
                    <h1 className='text-3xl'>No Items in cart</h1>
                    <p className='text-lg mt-4'>Add items you want to shop</p>
                    <button className='bg-black p-4 mt-5 '>Start Shopping</button>

                </div>
            </div>
            :
            <div className='flex flex-col  justify-around lg:flex-row  lg:mx-[10rem] md:gap-x-[1rem] lg:gap-x-[3rem]'>
                <div className='flex flex-col items-center lg:grow-[3]'>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className='lg:grow-[2]'>
                    <div>
                        <div className='bg-white border-2 border-slate-300 mx-6 px-5 py-10 mb-5 lg:mx-0'>
                            <h1 className='text-3xl mb-10 font-semibold'>Add promo code</h1>
                            <input type="text" className='w-full h-[40px] bg-[#fcfcfc] border-[2px] mb-5 ' placeholder='coupon' />
                            <button className=' mx-auto block w-[100%] h-[50px] bg-[#E74593] text-white font-medium '>Apply code</button>
                        </div>
                    </div>
                    <div className='bg-white border-2 border-slate-300 mx-6 px-5 py-10 lg:mx-0'>
                        <h1 className='text-3xl mb-10 font-semibold'>Cart Total</h1>
                        <div>
                            <div className='flex justify-between mb-5'>
                                <p>Total products</p>
                                <p className='font-bold'>$260.00</p>
                            </div>
                            <div className='flex justify-between mb-5'>
                                <p>discount</p>
                                <p className='font-bold'>$0.00</p>
                            </div>
                            <div className='flex justify-between mb-5 text-[#E74593] font-bold text-2xl'>
                                <p>Subtotal </p>
                                <p>$260.00</p>
                            </div>
                            <button className=' mx-auto block w-[100%] h-[50px] bg-[#E74593] text-white font-medium '>Proceed to checkout</button>
                        </div>
                    </div>
                </div>

            </div>

            }
        </div>

    </div>
  )
}

export default Cart
