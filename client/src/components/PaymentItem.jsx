import React from 'react'

const PaymentItem = ({name   , totalPrice , productQuantity , img }) => {
  return (
    <div className='flex md:w-[80%] lg:w-[70%] justify-between items-center my-4 px-3 lg:px-0'>
        <div className='flex items-center '>
            <div className='relative'>
                <img src={img} className='h-[80px] w-[80px] border-[2px] rounded-md' alt="" />
                <div className='absolute top-[-15px] h-6 w-6 right-0 bg-[#737373] rounded-full text-white text-center'>{productQuantity}</div>
            </div>
            <p className='ml-4 font-semibold'>{name}</p>
        </div>
        <div>
            <p className='font-semibold'>{`${totalPrice} DT`}</p>
        </div>
        
    </div>
  )
}

export default PaymentItem
