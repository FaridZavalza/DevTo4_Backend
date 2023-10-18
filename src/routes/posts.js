const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')
const auth = require('../')
//GET
router.get('/', postController.get);
router.get('/:id', postController.getById);
//POST
router.post('/',[auth.authToken, auth.isAdmin], postController.post);
router.post('/login', postController.login);
//PUT
router.put('/:id', postController.put);
//DELETE
router.delete('/:id', postController.delete);

module.exports = router