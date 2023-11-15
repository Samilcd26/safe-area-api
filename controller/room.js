const express = require("express")
const {joinToUser} =require("../business/RoomService")
const router = express.Router()


/// api/room/
router.post("/joinToUser",joinToUser)



module.exports=router;