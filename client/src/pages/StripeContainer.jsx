import React, { useEffect , useState } from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import FormTest from './FormTest'
import instance from '../axios/axios'

const PUBLIC_KEY='pk_test_51N0vSrJWQBOyVk90pXSLMw1ka7jJCOXOOuF7f5rDEnAyNHdUtYouSRiS61PNuvPMudFGJh37fgmLNG2Y7kts6Br900L0TyD0Eq'
const clientSecret = 'sk_test_51N0vSrJWQBOyVk90gaSzB9cNMcmzQjNrZZTKy7LvsbrqwJxnFutwxGYRZ45CgDqyqyHnqJUTdftru9fC4bauHZ6500oPcByz7l'
const stripeTestPromise = loadStripe(PUBLIC_KEY)


const options ={
  clientSecret : 'pi_3N1EtqJWQBOyVk900bQlPBae_secret_seilZR0AeEXImRwWyODD1ISkZ'
}
const StripeContainer = ({total}) => {
  const [clientSecret, setClientSecret] = useState("");
  useEffect(()=>{
    console.log(total)
    instance.post('/payment',{
      total
    })
    .then(res=>{
      console.log(res.data.client_secret)
      setClientSecret(res.data.client_secret)
    })
    .catch(err=>{
      console.log(err)
    })
    console.log(stripeTestPromise)
  },[])
  return (
    <>
    {
      stripeTestPromise && clientSecret && (
        <div className='my-10'>
        <Elements stripe={stripeTestPromise} options={{clientSecret : clientSecret}} >
          <FormTest />
        </Elements> 
      </div>
      )
    }
    </>

  )
}

export default StripeContainer
