const AuthController = require('./controllers/AuthController');
const AreasController = require('./controllers/AreasController');
const RecursosTiposController = require('./controllers/RecursosTiposController');
const TrilhasAreasController = require('./controllers/TrilhasAreasController');
const TrilhasCategoriasController = require('./controllers/TrilhasCategoriasController');
const TrilhasController = require('./controllers/TrilhasController');
const TrilhasRecursosController = require('./controllers/TrilhasRecursosController');
const TrilhasRecursosUsuariosController = require('./controllers/TrilhasRecursosUsuariosController');
const UsuariosController = require('./controllers/UsuariosController');
const authMiddleware = require('./middlewares/auth');

module.exports = async function getRoutes(routes){

    routes.get('/', (req, res) => {
        return res.json({status: true}).send();
    });

    routes.post('/auth', AuthController.store);

    routes.use(authMiddleware);

    routes.get('/areas', AreasController.index);
    routes.post('/areas', AreasController.store);
    routes.delete('/areas/:area_id', AreasController.delete);

    routes.get('/recursos_tipos', RecursosTiposController.index);
    routes.post('/recursos_tipos', RecursosTiposController.store);
    routes.delete('/recursos_tipos/:recurso_tipo_id', RecursosTiposController.delete);

    routes.get('/trilhas_areas', TrilhasAreasController.index);
    routes.post('/trilhas_areas', TrilhasAreasController.store);
    routes.delete('/trilhas_areas/:trilha_area_id', TrilhasAreasController.delete);

    routes.get('/trilhas_categorias', TrilhasCategoriasController.index);
    routes.post('/trilhas_categorias', TrilhasCategoriasController.store);
    routes.delete('/trilhas_categorias/:trilha_categoria_id', TrilhasCategoriasController.delete);

    routes.get('/trilhas', TrilhasController.index);
    routes.post('/trilhas', TrilhasController.store);
    routes.delete('/trilhas/:trilha_id', TrilhasController.delete);

    routes.get('/trilhas_recursos', TrilhasRecursosController.index);
    routes.post('/trilhas_recursos', TrilhasRecursosController.store);
    routes.delete('/trilhas_recursos/:trilha_recurso_id', TrilhasRecursosController.delete);

    routes.get('/trilhas_recursos_usuarios', TrilhasRecursosUsuariosController.index);
    routes.post('/trilhas_recursos_usuarios', TrilhasRecursosUsuariosController.store);
    routes.delete('/trilhas_recursos_usuarios/:trilha_recurso_usuario_id', TrilhasRecursosUsuariosController.delete);

    routes.get('/usuarios', UsuariosController.index);
    routes.put('/usuarios', UsuariosController.update);
    routes.post('/usuarios', UsuariosController.store);
    routes.delete('/usuarios/:usuario_id', UsuariosController.delete);
    
    return routes;
}
