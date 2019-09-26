const Cinema = require('../models').Cinema
const Viewer = require('../models').Viewer
const CinemaViewer = require('../models').CinemaViewer

class CinemaController {
  static getData(req, res) {
    Cinema
      .findAll()
      .then(cinemas => {
        if (cinemas) {
          res.render('cinema/show_cinema', { cinemas, msg: req.query.err, login: req.session.user })
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
        res.render('cinema/cinema_detail', { cinema, msg: req.query.err, login: req.session.user })
      })
      .catch(err => res.send(err.message))
  }

  static addBooking(req, res) {
    let objCreatedTicket = null
    CinemaViewer
      .create({
        CinemaId: req.params.id,
        ViewerId: req.session.user.id,
        totalSeat: req.body.totalSeat
      })
      .then(createdTicket => {
        objCreatedTicket = createdTicket
        return Cinema.findOne({ where: {id: createdTicket.CinemaId} })
      })
      .then(cinema => {
        res.render('cinema/checkout', { objCreatedTicket, cinema })
      })
      .catch(err => res.send(err.message))
  }
}

module.exports = CinemaController