function countSeats(objCinema) {
  let result = objCinema.capacity
  if (objCinema.Viewers.length > 0) {
    for (let i = 0; i < objCinema.Viewers.length; i++) {
      result -= objCinema.Viewers[i].CinemaViewer.totalSeat
    }
  }
  return result
}

module.exports = countSeats