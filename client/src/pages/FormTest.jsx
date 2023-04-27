import React, { useState } from 'react'
import { PaymentElement } from '@stripe/react-stripe-js'
import { useStripe , useElements } from '@stripe/react-stripe-js'   
import {MdKeyboardArrowLeft} from 'react-icons/md'
import { Link } from 'react-router-dom'
const FormTest = () => {
    const [isProcessing , setIsProcessing] = useState(false)
    const [message, setMessage] = useState(null);
    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(window.location.origin)
        if(!stripe || !elements){
            return ; 
        }   
        setIsProcessing(true);
        const {error} = await stripe.confirmPayment({
            elements , 
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: `${window.location.origin}/shop`,
              },

        })

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
          } else {
            setMessage("An unexpected error occured.");
          }
          setIsProcessing(false);
          console.log(window.location.origin)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <div className='md:flex flex-row-reverse items-center justify-around my-10 '>
            <button  disabled={isProcessing || !stripe || !elements} className=' w-[100%] sm:w-[50%] lg:w-[30%] h-[50px] bg-[#E74593] text-white font-medium mb-6 '>{isProcessing ? "Processing ... " : "Pay now"}</button>
            <Link to='/cart'>
                <div className='flex items-center text-[#E74593]'>
                    <MdKeyboardArrowLeft className='h-[20px] w-[20px]' />
                    Return to cart
                </div>
            </Link>
        </div>
        {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  )
}

export default FormTest
