const { Router } = require('express');
const auth = require('../auth/user.auth');

const authRoutes = Router();
authRoutes.post('/', auth.signIn);


module.exports = authRoutes;