import React from 'react'
import UserOrderItem from './UserOrderItem'
const UserOrders = () => {
  return (
    <div className='flex flex-col gap-y-4 mt-10'>
        <div className='flex justify-around text-2xl mb-10'>
            <p>Order ID</p>
            <p>Date</p>
            <p>Total Price</p>
            <p>See products</p>
        </div>
        <UserOrderItem />
        <UserOrderItem />
    </div>
  )
}

export default UserOrders
