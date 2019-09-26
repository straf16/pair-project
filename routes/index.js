const router = require('express').Router()
const ViewerController = require('../controllers/viewerController')

const cinemaRoutes = require('./cinemaRoutes')

router.use('/cinemas', cinemaRoutes)

router.get('/', (req, res) => {
    res.render('home')
})
router.post('/', ViewerController.addUser)


module.exports = router