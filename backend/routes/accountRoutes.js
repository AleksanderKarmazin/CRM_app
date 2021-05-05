import express from 'express'
const router = express.Router()

import {
    getAccount, 
    getAccountById, 
    deleteAccountById, 
    createAccount, 
    updateAccountById
} from '../controllers/accountController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router
    .route('/account')
    .get(protect, getAccount)
    .post(protect, createAccount)


router
    .route('/account/:id')
    .get(protect, getAccountById)
    .delete(protect, deleteAccountById)
    .put(protect, updateAccountById)
    
export default router
