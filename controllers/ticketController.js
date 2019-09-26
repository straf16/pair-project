const {Cinema, Viewer, CinemaViewer} = require('../models')

class TicketController {
  static formEdit(req, res) {
    let ticket;
    CinemaViewer
      .findByPk(req.session.user.id)
      .then(objTicket => {
        ticket = objTicket
        return Cinema.findAll()
      })
      .then(cinemas => {
        res.render('ticket/edit_ticket', {ticket, cinemas})
      })
      .catch(err => res.send(err.message))
  }
  
  static updateTicket(req, res) {
    CinemaViewer
      .update({
        CinemaId: req.body.cinemaId
      }, {where: {ViewerId : req.session.user.id}})
      .then(() => {
        res.redirect('/cinemas')
      })
      .catch(err => res.send(err.message))
  }

  static confirmDelete(req, res) {
    CinemaViewer
      .findOne({where: {ViewerId: req.session.user.id}})
      .then(ticket => {
        res.render('ticket/deleteTicket', {ticket})
      })
      .catch(err => res.send(err.message))
  }

  static deleteTicket(req, res) {
    CinemaViewer
      .destroy({where: {ViewerId: req.session.user.id}})
      .then(() => {
        res.redirect('/cinemas/?success=Data berhasil dihapus!')
      })
      .catch(err => res.send(err.message))
  }
}

module.exports = TicketController