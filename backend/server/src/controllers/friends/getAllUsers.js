const pool = require("../../functions/mysqlPool")

exports.getAllUsers = function getAllUsers(req, res) {
    const query = 'SELECT username FROM users'
    pool.execute(query, (error, result) => {
        if(error) {
            res.status(500).send(error.sqlMessage)
        } else {
            res.status(200).json(result)
        }
    })
}