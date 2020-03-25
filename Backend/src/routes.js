const express = require('express')
const crypto = require('crypto')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const db = require('./database/connection')
const routes = express.Router()


routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.post('/incidents',IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

routes.post('/sessions',SessionController.create)

module.exports = routes