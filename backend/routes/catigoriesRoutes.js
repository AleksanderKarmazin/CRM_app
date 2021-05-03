import express from 'express'
const router = express.Router()

import {
    getCatigories, 
    getCatigoriesById, 
    deleteCatigoriesById, 
    createCatigory, 
    updateCatigoryById
} from '../controllers/catigoriesController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router
    .route('/catigories')
    .get(protect, getCatigories)
    .post(protect, createCatigory)


router
    .route('/catigories/:id')
    .get(protect, getCatigoriesById)
    .delete(protect, deleteCatigoriesById)
    .put(protect, updateCatigoryById)
    
export default router
