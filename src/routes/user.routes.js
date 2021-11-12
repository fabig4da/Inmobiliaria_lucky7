const { Router } = require('express');
const userController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.get('/', userController.findAllUser);
userRouter.get('/:id', userController.findOneUser);
userRouter.post('/', userController.createUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);


module.exports = userRouter;