const nodemailer = require('nodemailer')

function send_email(object) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'k1n4florenz@gmail.com',
      pass: 'k1n4ready'
    }
  })

  const mailOptions = {
    from: 'k1n4florenz@gmail.com', // sender address
    to: object.Viewers[object.Viewers.length-1].email, // list of receivers
    subject: `Hai ${object.Viewers[object.Viewers.length-1].name} | INFINITE CINEMAS`, // Subject line
    html:  `<h4>This is your booking details</h4>
            <p>Studio: ${object.name}</p>
            <p>Film: ${object.film}</p>
            <p>Booking Code: ${object.Viewers[object.Viewers.length-1].CinemaViewer.bookingCode}</p>
            <p>Total Price: ${object.Viewers[object.Viewers.length-1].CinemaViewer.totalPrice}</p>
            <p>Thanks for booking ticket</p><br>`// plain text body
  };
    
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      return err
    else
      console.log(info);
  })
}

module.exports = send_email

