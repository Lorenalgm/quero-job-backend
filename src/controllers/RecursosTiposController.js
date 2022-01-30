const knex = require('../database/knex');

module.exports = {
    async index(request, response){
        const recursos_tipos = await knex.select().table('recursos_tipos')
        
        return response.json(recursos_tipos);
    },
    async store(request, response){
        const { nome } = request.body;

        try {
            let recurso_tipo = await knex('recursos_tipos').insert({
                nome: nome
            }).returning('*');

            recurso_tipo = recurso_tipo[0];

            return response.status(201).json(recurso_tipo);
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível cadastrar o recurso tipo'});
        }
    },
    async delete(request, response){
        const {recurso_tipo_id} = request.params;

        try {
            await knex('recursos_tipos').where('id', recurso_tipo_id).delete();
            return response.status(200).json({ message: 'Recurso tipo deletado com sucesso' });
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível excluir o recurso tipo'});
        }
    },
}