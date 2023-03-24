const joi = require('joi');
const pool = require('../../functions/mysqlPool');

exports.patchTodos = function patchTodos(req, res) {

    const schema = joi.object({
        task: joi.string().required(),
        text: joi.string().allow(null, ''),
        todoID: joi.number().required()
    });

    const { value, error } = schema.validate(req.body);

    if(error) {
        res.status(400).send(error.details[0].message)
        return;
    };

    let { task, text, todoID } = value;

    if(!text) {
        text = null
    };

    const query = 'UPDATE todos SET task=?, text=? WHERE id=?'

    pool.execute(query, [task, text, todoID], (error, result) => {
        if (error) {
            res.status(500).send(error.sqlMessage)
        } else {
            res.status(200).send('Todo updated')
        }
    })
}