const router = require('express').Router()
const CinemaController = require('../controllers/cinemaController')

router.get('/:viewerId', CinemaController.getData)
router.get('/:viewerId/:id', CinemaController.showCinema)
router.post('/:viewerId/:id', CinemaController.addBooking)

module.exports = router