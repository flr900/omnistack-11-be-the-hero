const db = require('../database/connection')

module.exports = {
    async create (request, response) {
        const {id} = request.body
        const ong = await db('ongs').where('id',id).select('name').first()
    
        if(!ong) {
           return response.status(400).json({error:'Nenhuma ong cadastrada com ess ID'})
        }
       return response.json(ong)
    }
}