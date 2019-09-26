const Viewer = require('../models').Viewer
const bcrypt = require('bcrypt')

class ViewerController {
  static addUser(req, res) {
    console.log(req.body);
    Viewer
      .create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      })
      .then(createdViewer => {
        req.session.user = {
          name: req.body.name,
          email: req.body.email
        }
        
        res.redirect(`/cinemas`)
      })
      .catch(err => res.send(err.message))
  }

  static loginUser(req, res) {
    Viewer
      .findOne({where: {email: req.body.email}})
      .then(viewer => {
        let passwordCheck = bcrypt.compareSync(req.body.password, viewer.password)
        if (passwordCheck) {
          req.session.user = {
            id: viewer.id,
            name: viewer.name,
            email: viewer.email
          }
          res.redirect('/cinemas')
        } else {
          throw new Error('Invalid Username/Password')
        }
      })
      .catch(err => res.redirect('/cinemas/?err='+err.message))
  }

  static logoutUser(req, res) {
    req.session.destroy(err => {
      res.redirect('/cinemas')
    })
  }
}

module.exports = ViewerController