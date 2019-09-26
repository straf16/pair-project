const Router = require('express').Router()
const CinemaController = require('../controllers/cinemaController')

Router.get('/', (req,res) => {
    res.render('home')
})

Router.get('/cinema', CinemaController.getData)
Router.post('/cinema/checkout/:id', CinemaController.addBooking)
Router.get('/studio/:id', CinemaController.showCinema)
Router.get('/register', (req,res) => {
    res.render('register')
})



module.exports = Router