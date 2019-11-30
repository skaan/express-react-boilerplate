const express = require('express');

const loginPostController = require('./login.post');
const logoutPostController = require('./logout.post');
const registerPostController = require('./register.post');
const indexGetController = require('./index.get');

const { Router } = express;
const authRouter = Router()

authRouter.post('/login', loginPostController);
authRouter.post('/register', registerPostController);
authRouter.post('/logout', logoutPostController);
authRouter.get('/', indexGetController);

module.exports = authRouter;
