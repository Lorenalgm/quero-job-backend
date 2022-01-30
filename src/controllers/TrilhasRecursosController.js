const knex = require('../database/knex');

module.exports = {
    async index(request, response){
        const trilhas_recursos = await knex.select().table('trilhas_recursos')
        
        return response.json(trilhas_recursos);
    },
    async store(request, response){
        const { nome, link, descricao, recurso_tipo_id, area_id, trilha_id } = request.body;

        try {
            let trilha_recurso = await knex('trilhas_recursos').insert({
                nome: nome,
                link: link,
                descricao: descricao,
                recurso_tipo_id: recurso_tipo_id,
                area_id: area_id,
                trilha_id: trilha_id
            }).returning('*');

            trilha_recurso = trilha_recurso[0];

            return response.status(201).json(trilha_recurso);
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível cadastrar a trilha recurso'});
        }
    },
    async delete(request, response){
        const {trilha_recurso_id} = request.params;

        try {
            await knex('trilhas_recursos').where('id', trilha_recurso_id).delete();
            return response.status(200).json({ message: 'Trilha recurso deletada com sucesso' });
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível excluir a trilha recurso'});
        }
    },
}