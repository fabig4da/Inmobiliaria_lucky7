const jwt = require('jsonwebtoken');
const secreteWord = process.env.TOKEN_SERCRET_WORD;

module.exports = {
    generateToken: (data) => {
        return jwt.sign({
            data
        }, secreteWord, { expiresIn: 60 * 60 });
    },
    verifyToken: (token) => {
        return jwt.verify(token, secreteWord)
    }
}