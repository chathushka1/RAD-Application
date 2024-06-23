const SignModel=require('../model/signModel');
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const bcrypt = require('bcrypt');

const SignController= {

    saveUser: async function (req, res, next) {
        try {
            const userData = req.body;
            const salt = genSaltSync(10);
            userData.password = hashSync(userData.password, salt);
            userData.confirmPassword = hashSync(userData.confirmPassword, salt);
            const user = await SignModel.create(userData);
            res.status(200).json("Success Fully Data Add");
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Server Error DOWN"
            });
        }
    },
}

module.exports = SignController;