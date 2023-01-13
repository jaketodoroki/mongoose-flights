import { Flight } from '../models/flights.js'

function newFlight(req, res){
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res){
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newFlight as new,
  create,
  index
}