const { create, updateUsers, deleteUser } = require("./student.controller");
var router = require('express').Router();
const multer  = require('multer')
const upload = multer()
router.post("/",upload.none(),create);
router.patch("/", updateUsers);
router.delete("", deleteUser);
module.exports = router;