const express = require('express');
const authRouter = require('./auth/router');

const { Router } = express;
const apiRouter = Router()

apiRouter.use('/auth', authRouter)

module.exports = apiRouter
