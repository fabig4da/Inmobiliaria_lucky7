const User = require('../models/user.model');
const { Response } = require('../utils/response');


module.exports = {
    //get all users
    findAllUser: async(req, res) => {
        try {
            const usersFound = await User.find();
            Response.success(res, usersFound);

        } catch (error) {
            console.log(error);
            Response.error(res);
        }

    },
    // find one user by id 
    findOneUser: async(req, res) => {
        const { id } = req.params
        try {
            const userFound = await User.findOne({ _id: id });
            // console.log(usersFound)
            Response.success(res, userFound);

        } catch (error) {
            console.log(error);
            Response.error(res);
        }
    },
    //create a new user
    createUser: async(req, res) => {
        const { body } = req;
        const user = new User(body);
        try {
            await user.save();
            Response.success(res, user);
        } catch (error) {
            console.log(error);
            Response.error(res);
        }
    },

    //update user properties
    updateUser: async(req, res) => {
        const { id } = req.params;
        const { body } = req;
        try {
            const userUpdate = await User.findByIdAndUpdate(id, body);
            Response.success(res, `id del usuario que fue actualizado: ${userUpdate._id}`);
        } catch (error) {
            console.log(error);
            Response.error(res);
        }
    },

    //delete user using user's id
    deleteUser: async(req, res) => {
        const { id } = req.params;
        try {
            const userDeleted = await User.findByIdAndDelete(id);
            Response.success(res, `id del usuario que fue eliminado: ${userDeleted._id}`);
        } catch (error) {
            console.log(error);
            Response.error(res);
        }
    }

}