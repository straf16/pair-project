const Router = require('express').Router()

Router.get('/', (req,res) => {
    res.render('home')
})

Router.get('/cinema', (req, res) => {
    res.render('listCinema')
})

Router.get('/studio', (req, res) => {
    res.render('studio')
})



module.exports = Router