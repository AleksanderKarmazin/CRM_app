import express from 'express'
const router = express.Router()

import {
    getRecord, 
    getRecordById, 
    deleteRecordById, 
    createRecord, 
    updateRecordById
} from '../controllers/recordController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router
    .route('/record')
    .get(protect, getRecord)
    .post(protect, createRecord)


router
    .route('/record/:id')
    .get(protect, getRecordById)
    .delete(protect, deleteRecordById)
    .put(protect, updateRecordById)
    
export default router
