import React from 'react'
import slider from '../assets/slider.png'
const PageIndicator = ({text}) => {
    const Text = text=='contact' ? text : `Your ${text}`
  return (
    <div>
        <div style={{background:`url(${slider})center top no-repeat fixed`}} className='w-full h-fit py-[90px] mt-[5rem]'>
            <div className='text-white  text-center tracking-[5px] '>
                <h1 className='text-5xl'>{Text} </h1>
                <p className='mt-[15px]'>
                <a href="">Home </a>
                / {Text}
                </p>
            </div>
      </div>
    </div>
  )
}

export default PageIndicator
