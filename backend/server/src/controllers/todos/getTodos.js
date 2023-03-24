const pool = require("../../functions/mysqlPool");

exports.getTodos = function getTodos(req, res) {
    userID = req.userID;

    const query = `
    SELECT U.username, U.id, T.task, T.text, T.value FROM users U 
    INNER JOIN todos T ON U.id = T.userID
    WHERE U.id = ?`

    pool.execute(query, [userID], (error, result) => {
        if (error) {
            res.status(500).send(error.sqlMessage)
        } else if (result.length === 0){
            res.status(500).send('You have no todos')
        } else {
            res.status(200).json(result)
        }
    })
}