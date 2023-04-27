
import React from 'react'
import Navbar from '../components/Navbar'
import Carts from '../components/Carts'

import PageIndicator from '../components/PageIndicator'
import { Link , Navigate  } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { getProductsList } from '../redux/slices/wishListSlice'
import WishListItem from '../components/wishListItem'
import instance from '../axios/axios'
import { useEffect , useState} from 'react'
import jwt from 'jwt-decode'
const WishList = () => {
    const auth = useSelector(state =>state.auth)
    const wishList = useSelector(state =>state.wishList)
    const dispatch = useDispatch()
    const [wishListProducts , setwishListProducts] = useState([])
    const user = jwt(localStorage.getItem('token'))

    useEffect(()=>{
      dispatch(getProductsList(user.id))
    },[wishList.data])

    if (!auth.isAuthenticated){
        return <Navigate to='/login' />
      }     
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
  return (
    <div className='mb-[5rem]'>
      <Navbar />
      <PageIndicator text='WishList'/>
      <h1 className='text-3xl text-[#E74593] flex justify-center mt-10'>YOUR WISHLIST</h1>
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
    </div>
  )
}

export default WishList
