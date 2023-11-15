const express = require("express")
const room = require("./room")

//localhost/api
const router =express.Router()


router.use("/room",room)


module.exports=router;