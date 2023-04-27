import React from 'react'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PaymentItem from '../components/PaymentItem'
import { countryList } from '../data/countries'
import OrderSummary from '../components/OrderSummary'
import StripeContainer from './StripeContainer'
const Payment = () => {
    document.body.style.backgroundColor = 'white'
    const cart = useSelector(state => state.cart)


  return (
    <div className='bg-white lg:flex pt-6 '>
      <div className='lg:w-[50%] lg:pl-[10%]'>
        <h1 className='font-semibold text-4xl ml-4 my-4'>Petal Paradise</h1>
        <OrderSummary />
        <div className='mx-4'>
            <p className='text-xl font-medium'>Contact</p>
            <div>
                    {/*<input type="text" className='w-[90%] mt-4 h-[3.2rem] border-[1px] rounded border-[#dcd7d7] placeholder:pl-2' placeholder='Enter your Email'/>
                    <p className='text-xl font-medium mt-4'>Shipping address</p>
                    <select type="text" className='w-[90%] mt-4 h-[3.2rem] border-[1px] rounded border-[#dcd7d7] placeholder:pl-2 placeholder:text-[#707070]' placeholder='Country/region'>
                        <option value="" disabled selected hidden>Country/region</option>
                        {countryList.map(country=>(
                            <option value="">{country}</option>
                        ))}
                    </select>
                    <input type="text" className='w-[90%] mt-4 h-[3.2rem] border-[1px] rounded border-[#dcd7d7] placeholder:pl-2 placeholder:text-[#707070]' placeholder='First name (optional)'/>
                    <input type="text" className='w-[90%] mt-4 h-[3.2rem] border-[1px] rounded border-[#dcd7d7] placeholder:pl-2 placeholder:text-[#707070]' placeholder='Last name'/>
                    <input type="text" className='w-[90%] mt-4 h-[3.2rem] border-[1px] rounded border-[#dcd7d7] placeholder:pl-2 placeholder:text-[#707070]' placeholder='Address'/>
                    <input type="text" className='w-[90%] mt-4 h-[3.2rem] border-[1px] rounded border-[#dcd7d7] placeholder:pl-2 placeholder:text-[#707070]' placeholder='Apartement, suite , etc. (optional)'/>
                    <input type="text" className='w-[90%] mt-4 h-[3.2rem] border-[1px] rounded border-[#dcd7d7] placeholder:pl-2 placeholder:text-[#707070]' placeholder='Postal code'/>
                        <input type="text" className='w-[90%] mt-4 pb-4 h-[3.2rem] border-[1px] rounded border-[#dcd7d7] placeholder:pl-2' placeholder='City'/>*/}
                        <StripeContainer 
                            total = {cart.coupon > 0 ?(cart.total*(1-cart.coupon/100)):cart.total}
                        />
            </div>
        </div>
        <p className='text-[#707070] text-md mt-4 pb-4'>All right reserved petalParadise - Flower Shop</p>
      </div>
      <div className='bg-[#FAFAFA] lg:w-[50%] lg:pt-[8rem] lg:pl-16'>
        <div className=' hidden lg:block'>
            <div className='flex flex-col'>
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
            <div>
                <div className='flex md:w-[80%]  lg:w-[70%] justify-between my-4  px-3'>
                    <p className='font-semibold'>Total</p>
                    <p className='font-semibold'>{`${cart.total} DT`}</p>
                </div>
                <div className='flex md:w-[80%]  lg:w-[70%] justify-between my-4 px-3'>
                    <p className='font-semibold'>Discount</p>
                    <p className='font-semibold'>{`${cart.coupon} %`}</p>
                </div>
                <div className='flex md:w-[80%]  lg:w-[70%] justify-between my-d px-3'>
                    <p className='font-semibold text-xl'>SubTotal</p>
                    <p className='font-semibold'>{`${cart.coupon > 0 ?(cart.total*(1-cart.coupon/100)):cart.total} DT`}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
