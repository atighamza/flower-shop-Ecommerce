import React, { useEffect, useState } from 'react'
import FlowerPhoto from "../assets/flower.jpg"
import { AiFillHeart , AiOutlineHeart  } from 'react-icons/ai';

import { BsArrowReturnRight } from 'react-icons/bs'
import '../components/product.css'
import { Link , Navigate , redirect , useNavigate} from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import { addProducts , removeProducts } from '../redux/slices/wishListSlice';
import jwt from 'jwt-decode'

const Product = ({id , name , imgLink , price , description}) => {
    const [isAddedInWishList , setIsAddedInWishList] = useState(false)
    const navigate = useNavigate();

    const user = jwt(localStorage.getItem('token'))

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const auth = useSelector(state =>state.auth)
    const wishList = useSelector(state => state.wishList.data)
    useEffect(()=>{
        for (let i in wishList){ 

            if (wishList[i].name == name){
            console.log(wishList[i].name)
                setIsAddedInWishList(true)
            }
        }
    },[wishList])

    const handleAddToWishList = () =>{
        if (!auth.isAuthenticated){
            navigate('/login'); 
          }
        if(!isAddedInWishList){
            dispatch(addProducts({id : user.id ,_id:id ,  name ,imgLink , price , description}))
            setIsAddedInWishList(true)
        }else{
            dispatch(removeProducts({id : user.id , name }))
            setIsAddedInWishList(false)
        }
        
    }
  return (
        
        <div className='w-[60%] sm:w-[90%]  rounded-lg border-[3px] border-[#0000001a] box '>
            <div className=' shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.1)] bg-white  relative rounded-lg  '>
                <span className='absolute top-4 left-4 py-[0.7rem] px-4 text-xl text-[#E84393] bg-[#ff339917] rounded-lg z-20'>-10%</span>
                <div className='relative'>
                    <img src={imgLink} alt="" className='w-full rounded-lg h-[20rem] md:h-[18rem] relative z-10' />
                    <div className=' flex invisible absolute bottom-[-3rem] left-0 right-0 items-center text-white icons ease-in-out duration-200 z-30 '>
                        <button onClick={handleAddToWishList} className='bg-[#E84393] w-1/2 h-10 flex justify-center items-center hover:bg-[#756d6d]'>
                            {isAddedInWishList ? <AiFillHeart size={25} />: <AiOutlineHeart size={25} /> }

                        </button>
                        <button onClick={()=>{dispatch(addItem({name , price , quantity : 1 , totalPrice : price , img : imgLink}))}} className='bg-[#E84393] w-1/2 h-10 flex justify-center items-center border-x-2 border-[#fff7] hover:bg-[#756d6d] '>Add to cart</button>
                        <a href="" className='bg-[#E84393] w-1/2 h-10 flex justify-center items-center hover:bg-[#756d6d]'><BsArrowReturnRight size={30} /></a>
                        
                    </div>
                </div>
                <div className='content flex flex-col items-center font-bold text-2xl py-4  '>
                    <h3 className='text-[#333] '>{name}</h3>
                    <div className='text-[#E84393] '>{`$${price}`}</div>
                </div>
            </div>
        </div>
     

  )
}

export default Product
