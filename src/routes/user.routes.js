const { Router } = require('express');
const userController = require('../controllers/user.controller');

const userRouter = Router();
/**
 * @openapi
 * tags:
 *  - name: user
 *    description: Everything about users
 */


/**
 * @openapi
 * /post:
 *   get:
 *     summary: Creates an user
 *     tags:
 *      - user
 *     requestBody: 
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *            $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User save successfuly.
 *       500:
 *         description: server error 
 */
userRouter.get('/', userController.findAllUser);
userRouter.get('/:id', userController.findOneUser);
userRouter.post('/', userController.createUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);


module.exports = userRouter;