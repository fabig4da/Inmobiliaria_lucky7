const { Response } = require('../utils/response');
const createError = require('http-errors');

module.exports = {
    requiredToCreate: async(req, res, next) => {
        let fields = [];
        const { name, lastname, email, password } = req.body;
        !name && fields.push('name');
        !lastname && fields.push('lastname');
        !email && fields.push('email');
        !password && fields.push('password');

        if (fields.length > 0)
            return Response.error(res, {
                statusCode: 402,
                message: `Missed required data (${fields.join(',')})`
            })
        next();
    }
}