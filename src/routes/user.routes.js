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
 * /user:
 *   get:
 *     summary: get products
 *     tags: 
 *      - user
 *     responses:
 *       200:
 *         description: Users found.
 *         content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: server error 
 */
userRouter.get('/', userController.findAllUser);



/**
 * @openapi
 * /user/{id}:
 *   get:
 *     summary: get products
 *     tags: 
 *      - user
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Users found.
 *         content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: server error 
 */
userRouter.get('/:id', userController.findOneUser);



/**
 * @openapi
 * /user:
 *   post:
 *     summary: Create an user
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
userRouter.post('/', userController.createUser);


/**
 * @openapi
 * /user/{id}:
 *   put:
 *     summary: update user
 *     tags:
 *      - user
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     requestBody: 
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *            $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User updated successfuly.
 *       500:
 *         description: server error 
 */
userRouter.put('/:id', userController.updateUser);

/**
 * @openapi
 * /user/{id}:
 *   delete:
 *     summary: Create an user
 *     tags:
 *      - user
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       201:
 *         description: User save successfuly.
 *       500:
 *         description: server error 
 */
userRouter.delete('/:id', userController.deleteUser);


module.exports = userRouter;