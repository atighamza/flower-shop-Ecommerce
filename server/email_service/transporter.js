var nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:'gmail' , 
    port: 465,        // true for 465, false for other ports
    secure : true , 
    logger:true,
    debug:true,
    secureConnection : false , 

       auth: {
            user: 'hamzaatig2000@gmail.com',
            pass: 'pbrtezhqjkaovfse',
         },
        tls : {
            rejectUnauthorized : true
        }
    });

module.exports = transporter