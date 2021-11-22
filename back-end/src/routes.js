const { Router } = require('express');

const MovieController = require('./app/controllers/MovieController');

const router = Router();

router.get('/movies', MovieController.index);
router.get('/movies/:id', MovieController.show);
router.delete('/movies/:id', MovieController.delete);

module.exports = router;
