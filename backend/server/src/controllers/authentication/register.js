const pool = require("../../functions/mysqlPool");
const joi = require('joi');
const bcrypt = require('bcrypt')

exports.register = function register(req, res) {
    const schema = joi.object({
        username: joi.string().required(),
        password: joi.string().required()
    })

    const { value, error } = schema.validate(req.body)

    if(error) {
        res.status(400).send(error.details[0].message)
        return;
    }

    const { username, password} = value;

    const hashedPassword = bcrypt.hashSync(password, 10)

    pool.execute('INSERT INTO users (username, password) VALUE (?, ?)', [username, hashedPassword], (error, result) => {
        if (error) {
            res.status(500).send(error.sqlMessage)
        } else if (result.affectedRows === 0) {
            res.status(500).send('Something went wrong in the database')
        } else {
            res.status(200).json(result)
        }
   })
}