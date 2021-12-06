const bcrypt = require('bcrypt');

module.exports = {
    encriptPassword: (password) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    },
    comparaPassword: (password, hash) => {
        return bcrypt.compareSync(password, hash);
    }

}