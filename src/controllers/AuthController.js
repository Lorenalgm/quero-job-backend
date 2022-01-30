const knex = require('../database/knex');

module.exports = {
    async store(request, response){
        const { email, senha } = request.body;

        try {
            // TODO: adicionar lógica de login
            const user;

            return response.status(200).json(user);
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível logar'});
        }
    },
}