const joi = require('joi');
const pool = require('../../functions/mysqlPool');

exports.deleteTodos = function deleteTodos(req, res) {
    const schema = joi.object({
        todoID: joi.number().required()
    })

    const { value, error } = schema.validate(req.body)

    if(error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    const { todoID } = value;

    const query = 'DELETE FROM todos WHERE id=?'

    pool.execute(query, [todoID], (error, result) => {
        if(error) {
            res.status(500).send(error.sqlMessage)
        } else if (result.affectedRows === 0) {
            res.status(500).send('There was no todo to delete')
        } else {
            res.status(200).send('Todo deleted')
        }
    })
}