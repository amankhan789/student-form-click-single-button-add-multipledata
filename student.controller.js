
const {create,updateUser,deleteUser} = require("./student.service");
module.exports = {
    create: (req, res) => {
        const body = req.body;
        // console.log(body);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                sucess: 1,
                data: results
            });
        });
    },

    updateUsers: (req, res) => {
        const body = req.body;
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "failed to update user"
                })
            }
            return res.json({
                success: 1,
                message: "update successfuly"
            });
        });
    },
    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "record not found "

                });
            }
            return res.json({
                success: 1,
                message: "user delete successfuly"

            });
        });
    }

};