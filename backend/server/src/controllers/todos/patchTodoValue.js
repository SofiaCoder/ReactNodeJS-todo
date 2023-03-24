const joi = require('joi')
const pool = require('../../functions/mysqlPool')

exports.patchTodoValue = function patchTodoValue(req,res) {
    const schema = joi.object({
        todoID: joi.number().required(),
        checkValue: joi.number().min(0).max(1).required()
    })

    const { error, value } = schema.validate(req.body)

    if(error) {
        res.status(400).send(error.details[0].message)
        return;
    }

    const { todoID, checkValue } = value;

    const query = 'UPDATE todos SET value=? WHERE id=?'

    pool.execute(query, [checkValue, todoID], (error, result) => {
        if(error) {
            res.status(500).send(error.sqlMessage)
        } else if(result.affectedRows === 0) {
            res.status(500).send('There was no todo to change the value of')
        } else {
            res.status(200).send('Value changed')
        }
    })
}