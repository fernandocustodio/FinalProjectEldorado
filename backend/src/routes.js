const { Router } = require('express');

const MovieController = require('./app/controllers/MovieController');
const UserController = require('./app/controllers/UserController');

const router = Router();

// Rotas para os FILMES
router.get('/movies', MovieController.index);
router.get('/movies/:id', MovieController.show);
router.delete('/movies/:id', MovieController.delete);
router.post('/movies', MovieController.store);
router.put('/movies/:id', MovieController.update);

// Rotas para os USUÀRIOS
router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.delete('/users/:id', UserController.delete);
router.post('/users', UserController.store);
router.put('/users/:id', UserController.update);

module.exports = router;
