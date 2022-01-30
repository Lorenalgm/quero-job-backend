const knex = require('../database/knex');

module.exports = {
    async index(request, response){
        const trilhas_areas = await knex.select().table('trilhas_areas')
        
        return response.json(trilhas_areas);
    },
    async store(request, response){
        const { trilha_id, area_id } = request.body;

        try {
            let trilha_area = await knex('trilhas_areas').insert({
                trilha_id: trilha_id,
                area_id: area_id
            }).returning('*');

            trilha_area = trilha_area[0];

            return response.status(201).json(trilha_area);
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível cadastrar a trilha área'});
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