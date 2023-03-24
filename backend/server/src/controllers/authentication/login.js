const pool = require("../../functions/mysqlPool");
const joi = require('joi');
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.login = function login(req, res) {
    const schema = joi.object({
        username: joi.string().required(),
        password: joi.string().required()
    })

    const { value, error } = schema.validate(req.body);

    if(error) {
        res.status(400).send(error.details[0].message)
        return;
    }

    const {username, password} = value;

    pool.execute('SELECT password, id FROM USERS where username=?', [username], (error, result) => {
        if (error) {
            res.status(500).send(error.sqlMessage)
        } else if (result.length === 0) {
            res.status(500).send('Wrong username')
        } else {
            const dbPassword = result[0].password;
            const valid = bcrypt.compareSync(password, dbPassword)

            if (!valid) {
                res.status(401).send('Wrong password')
            } else {
                const authToken = jwt.sign(
                    {userID: result[0].id},
                    process.env.secret,
                    {expiresIn: '1h'}
                )

                res.cookie('authKey', authToken, {
                    maxAge: 60 * 60 * 1000,
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true
                })
                
                res.status(200).send('Success loggin in')
            }
        }
    })
}