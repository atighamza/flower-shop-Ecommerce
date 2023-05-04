import React , {useState} from 'react'
import { FaUserCircle } from 'react-icons/fa'
import ChangeInfos from '../components/ChangeInfos'
import UserOrders from '../components/UserOrders'
import { logout } from '../redux/slices/authSlice'
import { useDispatch , useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { Navigate } from 'react-router-dom'
const UserProfile = () => {
    const [nav , setNav]  = useState('')
    const authenticated = useSelector(state => state.auth.isAuthenticated)
    console.log(authenticated)
    const dispatch = useDispatch()
    /*if (!authenticated){
        return <Navigate to='/login'/> 
    }*/
  return (
    <>
    <Navbar />
    <div className='flex gap-x-4 m-4'>
      <div className='w-[20%] h-screen bg-[#E0B1B8]'>
        <div className='flex flex-col text-[#39524C] items-center mt-20 gap-y-4 text-2xl '>
            <FaUserCircle size={100} />
            <h1 className='cursor-pointer' onClick={()=>setNav('profile')}>Profile</h1>
            <p className='cursor-pointer' onClick={()=>setNav('infos')}>Informations</p>
            <p  className='cursor-pointer'onClick={()=>setNav('orders')}>Orders</p>
            <p className='cursor-pointer' onClick={()=>dispatch(logout())}>Logout</p>
        </div>
      </div>
      <div className='w-[80%]  h-screen bg-white'>
        {
            nav=='profile' ? <ChangeInfos /> : nav=='orders' ?<UserOrders /> : <UserOrders />
        }
      </div>
    </div>
    </>
  )
}

export default UserProfile
