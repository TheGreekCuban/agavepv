const nodemailer = require("nodemailer")


const Send = (request) => {

    console.log("Request2: ", request)

    const output = `
        <p>Name: ${request.Name}</p>
        <p>Phone: ${request.Phone}</p>    
        <p>Email: ${request.Email}</p>
        <p>Message:
        <br>
        ${request.Message}</p>        
    `

    // call the main function which will take care of the nodemailer.
    main(output)
}

async function main(output) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.email, // generated ethereal user
            pass: process.env.password // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Admin" <av@agavepv.com>', // sender address
        to: "av@agavepv.com", // list of receivers
        subject: "Alex  - Someone is interested in working with you!", // Subject line
        html: output // html body
    });

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou... 

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

// Export the model
module.exports = Send; 
