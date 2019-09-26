const Router = require('express').Router()
const CinemaController = require('../controllers/cinemaController')

Router.get('/', (req,res) => {
    res.render('home')
})

Router.get('/cinema', CinemaController.getData)
Router.get('/studio/:id', CinemaController.showCinema)



module.exports = Router