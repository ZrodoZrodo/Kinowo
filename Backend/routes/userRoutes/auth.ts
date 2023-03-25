import {UserService} from "../../services/userService";

import express from 'express'
const router = express.Router()




router.get('/login',async (req, res) => {

    const Result=await UserService.userLogin(req.body)

    await res.json({data:Result})
})

router.post('/register', (req, res) => {

})

export default router