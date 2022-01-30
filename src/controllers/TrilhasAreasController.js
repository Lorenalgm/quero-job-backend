const knex = require('../database/knex');

module.exports = {
    async index(request, response){
        const trilhas_areas = await knex.select().table('trilhas_areas')
        
        return response.json(trilhas_areas);
    },
    async store(request, response){
        const { nome } = request.body;

        try {
            let area = await knex('trilhas_areas').insert({
                nome: nome
            }).returning('*');

            area = area[0];

            return response.status(201).json(area);
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível cadastrar a área'});
        }
    },
    async delete(request, response){
        const {trilha_area_id} = request.params;

        try {
            await knex('trilhas_areas').where('id', trilha_area_id).delete();
            return response.status(200).json({ message: 'Trilha Área deletada com sucesso' });
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível excluir a trilha área'});
        }
    },
}