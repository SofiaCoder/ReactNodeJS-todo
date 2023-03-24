const joi = require('joi');
const pool = require('../../functions/mysqlPool');


exports.postTodos = function postTodos(req, res) {
    userID = req.userID

    const schema = joi.object({
        task: joi.string().required(),
        text: joi.string().allow(null, '')
    })

    const { value, error } = schema.validate(req.body)

    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }

    let { task, text } = value

    if(!text){
        text = null
    }

    const query = 'INSERT INTO todos (task, text, userID) VALUE (?, ?, ?)'
    pool.execute(query, [task, text, userID], (error, result) => {
        if (error) {
            res.status(500).send(error.sqlMessage)
        } else {
            res.status(201).send('Task added')
        }
    })
}