const stripe = require('stripe')('sk_test_51N0vSrJWQBOyVk90gaSzB9cNMcmzQjNrZZTKy7LvsbrqwJxnFutwxGYRZ45CgDqyqyHnqJUTdftru9fC4bauHZ6500oPcByz7l')

const addPayment = async(req, res) =>{
    const {total} = req.body
    console.log('payment ', total)
    const payment = await stripe.paymentIntents.create({
        amount : total , 
        currency : 'usd'
    })
    //res.status(201).send({clientSecret : payment.client_secret})
    res.status(201).send(payment)

}

module.exports = {addPayment}