const User = require('../models/user.model');
const { comparaPassword } = require('../utils/encript');
const { generateToken } = require('../utils/jwt');
const { Response } = require('../utils/response');

module.exports = {
    signIn: async(req, res) => {
        const { email, password } = req.body;
        try {
            const userFound = await User.findOne({ email });
            if (userFound) {
                if (comparaPassword(password, userFound.password)) {
                    const token = generateToken(email);
                    return Response.success(res, { user: userFound, token });
                }
            }
            Response.error(res, {
                statusCode: 400,
                message: 'User or password incorrect'
            })
        } catch (error) {
            console.log(error);
            Response.error(res)
        }
    },
    validateAccount: async(req, res) => {
        const { id } = req.params;
        try {
            const userFound = await User.findOne({ _id: id });
            if (userFound) {
                userFound.activo = true;
                await userFound.save()
                return Response.success(res, { user: 'validated' });
            }
        } catch (error) {
            console.log(error);
            Response.error(res)
        }
    }
}