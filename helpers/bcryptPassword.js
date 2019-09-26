const bcrypt = require('bcrypt')

function convert(password) {
  const saltRounds = Math.round(Math.random() * 10)

  let salt = bcrypt.genSaltSync(saltRounds)
  let hash = bcrypt.hashSync(password, salt)

  return hash
}

module.exports = convert