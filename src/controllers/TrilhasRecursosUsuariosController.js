const knex = require('../database/knex');

module.exports = {
    async index(request, response){
        const trilhas_recursos_usuarios = await knex.select().table('trilhas_recursos_usuarios')
        
        return response.json(trilhas_recursos_usuarios);
    },
    async store(request, response){
        const { trilha_recurso_id, usuario_id } = request.body;

        try {
            let trilha_recurso_usuario = await knex('trilhas_recursos_usuarios').insert({
                trilha_recurso_id: trilha_recurso_id,
                usuario_id: usuario_id
            }).returning('*');

            trilha_recurso_usuario = trilha_recurso_usuario[0];

            return response.status(201).json(trilha_recurso_usuario);
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível cadastrar a trilha recurso do usuário'});
        }
    },
    async delete(request, response){
        const {trilha_recurso_usuario_id} = request.params;

        try {
            await knex('trilhas_recursos_usuarios').where('id', trilha_recurso_usuario_id).delete();
            return response.status(200).json({ message: 'Trilha recurso do usuário deletada com sucesso' });
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: 'Não foi possível excluir a trilha recurso do usuário'});
        }
    },
}