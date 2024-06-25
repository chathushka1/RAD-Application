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
            res.status(200).json("Save Succesfully");

        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Server Error DOWN"
            });
        }
    },

    getUserLogin: async function (req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await SignModel.findOne({ email });
            console.log("user: " + user);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(400).json({ error: "Password does not match" });
            }

            // Remove sensitive fields
            /*user.password = undefined;
            user.confirmPassword = undefined;*/

            user.isAdmin = user.isAdmin || false;
            res.status(200).json(user);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Server Error" });
        }
    },


}


module.exports = SignController;