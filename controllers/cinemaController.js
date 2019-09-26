const Cinema = require('../models').Cinema
const Viewer = require('../models').Viewer
const CinemaViewer = require('../models').CinemaViewer

class CinemaController {
  static getData(req, res) {
    Cinema
      .findAll( {order: [['id', 'asc']]})
      .then(cinemas => {
        const ViewerId = req.params.viewerId
        
        if (cinemas) {
          res.render('listCinema', { cinemas, ViewerId })
        } else {
          throw new Error('unavailable')
        }
      })
      .catch(err => res.send(err))
  }

  static showCinema(req, res) {
    Cinema
      .findOne({
        where: {
          id:Number(req.params.id)
        },
        include: Viewer
      })
      .then(cinema => {
        const ViewerId = req.params.viewerId
        res.render('studio', { cinema, ViewerId,  msg:req.query.err  })
      })
      .catch(err => res.send(err.message))
  }

  static addBooking(req, res) {
    // res.send(req.params)
    let objCreatedTicket = null
    CinemaViewer
      .create({
        CinemaId: req.params.id,
        ViewerId: req.params.viewerId,
        totalSeat: req.body.totalSeat
      })
      .then(createdTicket => {
        objCreatedTicket = createdTicket
        return Cinema.findOne({ where: {id: createdTicket.CinemaId} })
      })
      .then(cinema => {
        res.render('checkout', { objCreatedTicket, cinema})
      })
      .catch(err => res.redirect(`/studio/${req.params.id}/?err=${err.message.split(':')[1].slice(1)}`))
  }
}

module.exports = CinemaController