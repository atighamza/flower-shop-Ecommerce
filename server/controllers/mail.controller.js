const transporter = require('../email_service/transporter')
const sendEmail = async (req , res) => {
    const {text , from } = req.body
    const mailData = {
        from: from,  // sender address
          to: 'hamzaatig2000@gmail.com',   // list of receivers
          subject: 'customer review',
          text: text , 
        };
    
    transporter.sendMail(mailData , (err , info) =>{
        if (err){
            return res.status(500).json({message : err.message})
        }
        res.status(200).json(info)
    })
}


module.exports = sendEmail