import express from 'express'
import  getProfilePic  from '../controllers/homeController.js'

const router = express.Router()

router.route('/').get(getProfilePic)

export default router