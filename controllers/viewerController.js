const Viewer = require('../models').Viewer

class ViewerController {
  static addUser(req, res) {
    Viewer
      .create({
        name: req.body.name,
        email: req.body.email
      })
      .then(createdViewer => res.redirect(`/cinemas/${createdViewer.id}`))
      .catch(err => res.send(err.message))
  }
}

module.exports = ViewerController