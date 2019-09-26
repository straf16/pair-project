const router = require('express').Router()
const ViewerController = require('../controllers/viewerController')

const cinemaRoutes = require('./cinemaRoutes')

// route untuk menghubungkan router cinema
router.use('/cinemas', cinemaRoutes)

// home page melakukan redirect ke page list studio/film
router.get('/', (req, res) => {
  res.redirect('/cinemas')
})

// route untuk register user
router.get('/register', (req, res) => {
  res.render('register')
})
router.post('/register', ViewerController.addUser)

// route untuk login user
router.get('/login', (req, res) => {
  res.render('login')
})
router.post('/login', ViewerController.loginUser)

// route untuk logout user[]
router.get('/logout', ViewerController.logoutUser)

module.exports = router