const express = require('express')
const { createUser, getAllUsers, getSingleUser, updateSingleUser, deleteSingleUser, loginUser } = require('../controller/userController')
const router = express.Router()

router.post('/register',createUser)
router.post("/login-user",loginUser)
router.get('/all-user',getAllUsers)
router.get('/single-user/:id',getSingleUser)
router.put('/update-user/:id',updateSingleUser)
router.delete('/delete-user/:id',deleteSingleUser)

module.exports = router