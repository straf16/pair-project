function generateCode(cinemaCode) {
  let randomCode = Math.round(Math.random() * 900) + 100
  let result = cinemaCode + '-' + randomCode
  return result
}

module.exports = generateCode