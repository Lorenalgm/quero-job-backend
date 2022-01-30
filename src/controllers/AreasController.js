const knex = require('../database/knex');

module.exports = {
    async index(request, response){
        const areas = await knex.select().table('areas')
        
        return response.json(areas);
    },
    async store(request, response){
        const { nome } = request.body;

        try {
            let area = await knex('areas').insert({
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
        const {area_id} = request.params;

        try {
            await knex('areas').where('id', area_id).delete();
            return response.status(200).json({ message: 'Área deletada com sucesso' });
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível excluir a área'});
        }
    },
}