const pool = require("../../functions/mysqlPool")

exports.getFriends = function getFriends(req, res) {
    const userID = req.userID;

    const query = 'SELECT U.id, U.username FROM users U INNER JOIN relations R ON U.id = R.friendID WHERE R.userID = ?'
    pool.execute(query, [userID], (error, result) => {
        if(error) {
            res.status(500).send(error.sqlMessage)
        } else {
            res.status(200).json(result)
        }
    })
}