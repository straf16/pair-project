const express = require('express')
const session = require('express-session')
const nodemailer = require('nodemailer')
const app = express()
const PORT = 3000
const countSeats = require('./helpers/countSeats')
const indexRoutes = require('./routes')
app.use( express.static("public"));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'infinite cinemas',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.locals.countSeats = countSeats
app.use('/', indexRoutes)

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`))