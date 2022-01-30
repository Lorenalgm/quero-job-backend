const knex = require('../database/knex');

module.exports = {
    async index(request, response){
        const trilhas = await knex.select().table('trilhas')
        
        return response.json(trilhas);
    },
    async store(request, response){
        const { nome, trilha_categoria_id } = request.body;

        try {
            let trilha = await knex('trilhas').insert({
                nome: nome,
                trilha_categoria_id: trilha_categoria_id,
            }).returning('*');

            trilha = trilha[0];

            return response.status(201).json(trilha);
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível cadastrar a trilha'});
        }
    },
    async delete(request, response){
        const {trilha_id} = request.params;

        try {
            await knex('trilhas').where('id', trilha_id).delete();
            return response.status(200).json({ message: 'Trilha deletada com sucesso' });
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível excluir a trilha'});
        }
    },
}