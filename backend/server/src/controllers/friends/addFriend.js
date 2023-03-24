const joi = require('joi')
const pool = require('../../functions/mysqlPool')

exports.addFriend = function addFriend(req,res) {
    const userID = req.userID;
    const schema = joi.object({
        friendID: joi.number().required()
    })

    const { error, value } = schema.validate(req.body)

    if(error) {
        res.status(400).send(error.details[0].message)
        return;
    }

    const { friendID } = value;

    if (userID === friendID) {
        res.status(400).send('Sorry, cant add yourself')
        return;
    }

    const query = 'INSERT INTO relations (userID, friendID) VALUE (?, ?)'

    pool.execute(query, [userID, friendID], (error, result) => {
        if(error) {
            res.status(500).send(error.sqlMessage)
        } else {
            res.status(200).send("You got a new friend")
        }
    })
}