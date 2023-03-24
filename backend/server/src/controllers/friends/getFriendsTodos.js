const joi = require('joi')
const pool = require('../../functions/mysqlPool')

exports.getFriendsTodos = function getFriendsTodos(req, res) {
    const schema = joi.object({
        friendID: joi.number().required()
    })

    const { error, value } = schema.validate(req.body)

    if(error) {
        res.status(400).send(error.details[0].message)
        return;
    }

    const { friendID } = value

    const query = 'SELECT task, text FROM todos WHERE userID=?'

    pool.execute(query, [friendID], (error, result) => {
        if(error){
            res.status(500).send(error.sqlMessage)
        } else if (result.length === 0) {
            res.status(500).send('This friend has no todos')
        } else {
            res.status(200).json(result)
        }
    })
}