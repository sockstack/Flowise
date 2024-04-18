import express from 'express'
import configController from '../../controllers/config'
const router = express.Router()

// get
router.get('/getModels', configController.getModels)

export default router
