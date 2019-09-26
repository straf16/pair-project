const router = require('express').Router()
const CinemaController = require('../controllers/cinemaController')
const logMW = function (req, res, next) {
  if (!(req.session.user)) {
    res.redirect('/cinemas/?err=Please Login')
  } else {
    next()
  }
}

// menampilkan list studio/film
router.get('/', CinemaController.getData)

// menampilkan studio/film pilihan user
router.get('/:id', CinemaController.showCinema)
// melakukan checkout
router.post('/:id', logMW, CinemaController.addBooking)

module.exports = router