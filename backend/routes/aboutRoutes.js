import express from 'express'
import  { getProfilePic, getCV }  from '../controllers/aboutController.js'

const router = express.Router()

router.route('/image').get(getProfilePic)
router.route('/pdf').get(getCV);

export default router