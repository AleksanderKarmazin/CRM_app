import express from 'express'
const router = express.Router()

import {
    getAccount, 
    getAccountById, 
    deleteAccountById, 
    createAccount, 
    updateAccountById,
    updateBalanceAccountById
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

router
    .route('/account/balance/:id')
    .put(protect, updateBalanceAccountById)
 
export default router
