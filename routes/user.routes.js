const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")


router.get("/",userController.findAll)
router.post("/add",userController.create)

module.exports = router