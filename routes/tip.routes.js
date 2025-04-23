import express from 'express'
import tipController from '../controllers/tip.controller.js'

const router = express.Router()

router.get('/by-user/:idUser', tipController.getTipsByUser)

export default router

