const router = require('express').Router()
const ViewerController = require('../controllers/viewerController')
const TicketController = require('../controllers/ticketController')
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

// route untuk logout user
router.get('/logout', ViewerController.logoutUser)

// route untuk menampilkan form perubahan tiket
router.get('/editTicket', TicketController.formEdit)
// route untuk perubahan ticket
router.post('/editTicket', TicketController.updateTicket)

// route untuk confirm delete
router.get('/deleteTicket', TicketController.confirmDelete)
// route untuk delete post
router.post('/deleteTicket', TicketController.deleteTicket)

module.exports = router