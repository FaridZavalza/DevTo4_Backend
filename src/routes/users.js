const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
// const auth = require('../')
//GET
router.get('/', userController.get);
router.get('/:id', userController.getById);
//POST
router.post('/', userController.post);
router.post('/login', userController.login);
//PUT
router.put('/:id', userController.put);
//DELETE
router.delete('/:id', userController.delete);

module.exports = router
// router.post('/',[auth.authToken, auth.isAdmin], userController.post);