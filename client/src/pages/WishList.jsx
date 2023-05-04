
import React from 'react'
import Navbar from '../components/Navbar'
import Carts from '../components/Carts'

import PageIndicator from '../components/PageIndicator'
import { Link , Navigate  } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { getProductsList } from '../redux/slices/wishListSlice'
import { BsFillHeartbreakFill  } from 'react-icons/bs'

import WishListItem from '../components/wishListItem'
import instance from '../axios/axios'
import { useEffect , useState} from 'react'
import jwt from 'jwt-decode'
const WishList = () => {
    const auth = useSelector(state =>state.auth)
    const wishList = useSelector(state =>state.wishList)
    const dispatch = useDispatch()
    const [wishListProducts , setwishListProducts] = useState([])
    const [wishListLength , setWishListLength ]  = useState(0)

    useEffect(()=>{
      setWishListLength(wishList.data.length)
      console.log(wishList.data.length)
      dispatch(getProductsList(user.id))
    },[wishList.data])
     
    /*useEffect(()=>{
        const user = jwt(localStorage.getItem('token'))
        console.log(user)
        instance.get('/wishlist/6446e803bb4f1c49ee38d61f')
        .then(res=>{
            console.log(res)
            setwishListProducts(res.data)
        })
        .catch(err=>console.log(err))
    },[])*/


    if (!auth.isAuthenticated){
        return <Navigate to='/login' />
    } 
    
    if(auth.isAuthenticated){
        const user = jwt(localStorage.getItem('token'))
    }
  return (
    <div className='mb-[5rem]'>
      <Navbar />
      <PageIndicator text='WishList'/>
      <h1 className='text-3xl text-[#E74593] flex justify-center mt-10'>YOUR WISHLIST</h1>
      {wishListLength > 0 ? 
            <div className='flex justify-center items-center mt-10'>
            <div className='w-[65%] flex flex-col '>
                {
                    wishList.data.map(product => (
                        <WishListItem 
                            key={product.name}
                            image={product.image}
                            price={product.price}
                            name={product.name}
                            id={user.id}
                        />
                    ))
                }
            </div>
    
          </div>
          :   
          <div className='flex justify-center items-center mt-8 text-white'>
                <div className='flex items-center flex-col'>
                    <div><BsFillHeartbreakFill size={70} className='mx-auto text-[#445752]'/></div>
                    
                    <h1 className='text-3xl text-[#445752] '>No Items in wishList</h1>
                    <p className='text-lg mt-4 text-[#445752] ' >Add items you want to shop</p>
                    <button className='bg-[#E74593] p-4 mt-5  '><Link to='/shop'>Start Shopping</Link></button>

                </div>
            </div>
        }
    </div>
  )
}

export default WishList
