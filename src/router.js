const { Router } = require('express');

const userController = require('./controllers/UserController');

const router = Router();

router.get('/', userController.home);
router.get('/login', userController.login);
router.get('/logout', userController.logout);

export default router;