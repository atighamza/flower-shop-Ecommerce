import React from 'react'
import homePhoto from '../assets/homePhoto.png'
import { Link } from 'react-router-dom'
const HomeSection = () => {
  return (
    <div className='overflow-hidden	'>
        <section className=" flex  items-center ml-2 mt-10 sm:justify-center md:justify-normal md:mt-32 md:ml-20" >
            <div>
              <div className='z-20 ml-4 relative'>
              <h1 className='text-5xl text-[#39524C]'>Fresh flowers</h1>
                <h2 className='text-3xl text-[#E74593] mb-3'>Bring beauty to your events</h2>
                <p className=' text-[#656565] break-all max-w-md'>Welcome to our flower shop! We offer a wide variety of fresh flowers, arrangements,
                  and gifts to brighten up any occasion. From weddings to birthdays, anniversaries to
                  corporate events, our skilled florists can create stunning bouquets and centerpieces
                  that are sure to impress.
                </p>
                <div className='flex justify-center mt-3 '>
                    <button className='text-white rounded-3xl w-40 h-12 bg-[#39524C] '><Link to="/shop">Shop now </Link></button>
                </div>
              </div>
   
                <div className=''>
                  <img src={homePhoto} alt=""  className='hidden md:block md:absolute md:bottom-0  right-0 md:w-10/12 md:h-4/5 z-10'/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomeSection
