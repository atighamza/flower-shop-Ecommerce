import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { MdAddShoppingCart } from 'react-icons/md'
import { useState, useEffect } from 'react'
import CartItem from './CartItem'
import { useDispatch , useSelector } from 'react-redux'
import { emptyCart , addCoupon } from '../redux/slices/cartSlice'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import instance from '../axios/axios'

const Cart = () => {
    const [length , setLength] = useState(1)
    const [productsAdded , setproductsAdded ] = useState([])
    const [discount , setDiscount] = useState(0)

    const [error , setError] = useState('')
    const [status , setStatus] = useState(0)
    const [success , setSuccess] = useState('')
    const navigate = useNavigate()

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    
    const schema = yup.object({
        coupon : yup.string().min(3).required(),
      })

    const { register , formState : {errors}, handleSubmit } = useForm({resolver:yupResolver(schema)})

    

    const onSubmit = (data) =>{
        //check coupon
        console.log(data.coupon)
        instance.get(`/coupon/${data.coupon}`)
        .then(res => {
            console.log(res)
            setError('')
            setSuccess('coupon is valid')
            setDiscount(res.data.discount)
            dispatch(addCoupon(res.data.discount))
        })
        .catch(err => {
            console.log(err)
            setStatus(err.response.status)
            setError(err.response.data.message)
            setSuccess('')
        })

    }
    
    useEffect(()=>{
        setproductsAdded(cart.products)
        setLength(cart.products.length)
    },[cart])


    const checkCoupon = () =>{

    }

  return (
    <div className='  mt-[3rem]'>
        <div>
            {length === 0 ?
            <div className='flex justify-center items-center mt-8 text-white'>
                <div className='flex items-center flex-col'>
                    <div><MdAddShoppingCart size={70} className='mx-auto text-[#445752]'/></div>
                    
                    <h1 className='text-3xl text-[#445752] '>No Items in cart</h1>
                    <p className='text-lg mt-4 text-[#445752] ' >Add items you want to shop</p>
                    <button className='bg-[#E74593] p-4 mt-5  '><Link to='/shop'>Start Shopping</Link></button>

                </div>
            </div>
            :
            <div className='flex flex-col  justify-around lg:flex-row  lg:mx-[10rem] md:gap-x-[1rem] lg:gap-x-[3rem]'>
                <div className='flex flex-col items-center lg:grow-[3]'>
                {
                    productsAdded.map(product => (
                        <CartItem 
                            key={product.name}
                            name = {product.name}
                            price = {product.price}
                            totalPrice= {product.totalPrice}
                            productQuantity = {product.quantity}
                            img = {product.img}
                        />
                    ))
                }

                </div>
                <div className='lg:grow-[2]'>
                    <div>
                        <div className='bg-white border-2 border-slate-300 mx-6 px-5 py-10 mb-5 lg:mx-0 '>
                            <form onSubmit={handleSubmit(onSubmit)} className=''>
                                <h1 className='text-3xl mb-10 font-semibold'>Add promo code</h1>
                                <input {...register('coupon', {required:true , minLength : 3 })} type="text" className='w-full h-[40px] bg-[#fcfcfc] border-[2px] mb-5 ' placeholder='coupon' />
                                <div>
                                    {errors.coupon && <p className='text-red-600 '>{errors.coupon?.message}</p>}
                                    {error &&  ((status>0)&&(status<500)) && <p className='text-red-600'>{error}</p> }
                                    {success && !errors.coupn && <p className='text-green-600'>{success}</p> }
                                </div>
                                <button className=' mx-auto block w-[100%] h-[50px] bg-[#E74593] text-white font-medium mt-7'>Apply code</button>
                            </form>

                        </div>
                    </div>
                    <div className='bg-white border-2 border-slate-300 mx-6 px-5 py-10 lg:mx-0'>
                        <h1 className='text-3xl mb-10 font-semibold'>Cart Total</h1>
                        <div>
                            <div className='flex justify-between mb-5'>
                                <p>Total products</p>
                                <p className='font-bold'>{`${cart.total} DT`}</p>
                            </div>
                            <div className='flex justify-between mb-5'>
                                <p>discount</p>
                                <p className='font-bold'>{`%${cart.coupon}`}</p>
                            </div>
                            <div className='flex justify-between mb-5 text-[#E74593] font-bold text-2xl'>
                                <p>Subtotal</p>
                                <p>{cart.coupon ?(cart.total*(1-cart.coupon/100)):cart.total} DT</p>
                            </div>
                            <button onClick={()=>{cart.total>0 && navigate('/checkout')}} className=' mx-auto block w-[100%] h-[50px] bg-[#E74593] text-white font-medium '>Proceed to checkout</button>
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
