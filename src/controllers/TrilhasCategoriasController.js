const knex = require('../database/knex');

module.exports = {
    async index(request, response){
        const trilhas_categorias = await knex.select().table('trilhas_categorias')
        
        return response.json(trilhas_categorias);
    },
    async store(request, response){
        const { nome } = request.body;

        try {
            let trilha_categoria = await knex('trilhas_categorias').insert({
                nome: nome,
            }).returning('*');

            trilha_categoria = trilha_categoria[0];

            return response.status(201).json(trilha_categoria);
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível cadastrar a trilha categoria'});
        }
    },
    async delete(request, response){
        const {trilha_categoria_id} = request.params;

        try {
            await knex('trilhas_categorias').where('id', trilha_categoria_id).delete();
            return response.status(200).json({ message: 'Trilha categoria deletada com sucesso' });
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível excluir a trilha categoria'});
        }
    },
}