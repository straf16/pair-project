const express = require('express')
const app = express()
const PORT = 3000
const countSeats = require('./helpers/countSeats')
const indexRoutes = require('./routes')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.locals.countSeats = countSeats
app.use('/', indexRoutes)

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`))