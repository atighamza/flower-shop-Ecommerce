import React from 'react'
import PaymentItem from './PaymentItem'
import { useSelector } from 'react-redux'
import { useState } from 'react'
const OrderSummary = () => {
    const [open , setOpen] = useState(false)
    const cart = useSelector(state => state.cart)

    const handleOpen = () =>{
        setOpen(!open)
    }
  return (
    <div>
        <div className='w-full h-[5rem] bg-[#F0F0F0] flex flex-col items-center justify-center  lg:hidden' onClick={handleOpen}>
            <div className=' flex justify-center gap-[18rem] '>
                <p className='text-[#E74593] cursor-pointer'>show order summary</p>
                <p>{`${cart.coupon > 0 ?(cart.total*(1-cart.coupon/100)):cart.total} DT`}</p>
            </div>
        </div>
        {open && 
        <div className='bg-slate-50 mb-5 block lg:hidden'>
                <div className='flex flex-col pl-[10%]'>
                {
                    cart.products.map(product =>(
                        <PaymentItem 
                            key={product.name}
                            name={product.name}
                            totalPrice={product.totalPrice}
                            productQuantity = {product.quantity}
                            img = {product.img}
                            
                        />

                    ))
                }
            </div>
                <div className='pb-5'>
                <div>
                    <div className='flex justify-center '>
                        <div className='flex w-[60%] justify-between my-4  px-3'>
                            <p className='font-semibold'>Total</p>
                            <p className='font-semibold'>{`${cart.total} DT`}</p>
                        </div>
                    </div>
                    <div className='flex justify-center '>
                        <div className='flex w-[60%] justify-between my-4 px-3'>
                            <p className='font-semibold'>Discount</p>
                            <p className='font-semibold'>{`${cart.coupon} %`}</p>
                        </div>
                    </div>
                    <div className='flex justify-center '>   
                        <div className='flex w-[60%] justify-between my-d px-3'>
                            <p className='font-semibold text-xl'>SubTotal</p>
                            <p className='font-semibold'>{`${cart.coupon > 0 ?(cart.total*(1-cart.coupon/100)):cart.total} DT`}</p>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        }

        
        
    </div>
  )
}

export default OrderSummary
