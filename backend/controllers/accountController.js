import express from 'express'
import asyncHandler from 'express-async-handler'

import Account from '../models/accountModel.js';


// @desc    Fetch all ad
// @rout    GET /ad
// @access  public
const getAccount = asyncHandler(async (req, res) => {
    const AccountList = await Account.find({user: req.user._id})
    res.json(AccountList);
})

// @desc    Fetch ad by id
// @rout    GET /ad/:id
// @access  public
const getAccountById = asyncHandler(async (req, res) => {
    const AccountById = await Account.findById(req.params.id);

    if (AccountById) {
        res.json(AccountById);
    } else {
        res.status(404)
        throw new Error('AccountById not Found, скорее всего эту запись удалили ранне')
    }
})

// @desc    Delete Ad
// @rout    DELETE /ad/:id
// @access  
const deleteAccountById = asyncHandler(async (req, res) => {
    const AccountById = await Account.findById(req.params.id);

    if (AccountById) {
        AccountById.remove()
        res.json({ message: "AccountById removed" });
    } else {
        res.status(404)
        throw new Error('AccountById not Found')
    }
})

// @desc    Create Ad
// @rout    POST /ad/
// @access  
const createAccount = asyncHandler(async (req, res) => {
    const {account_currency, current_balance, financial_goal} = req.body
    
    const newAccount = new Account({
        user: req.user._id,
        account_currency: account_currency,
        current_balance: current_balance,
        financial_goal: financial_goal
    })

    const createdAccount = await newAccount.save()
    res.status(201).json(createdAccount)
})

// @desc    Update Product Seed
// @rout    PUT /seeds/:id
// @access  
const updateAccountById = asyncHandler(async (req, res) => {
    const {account_currency, current_balance, financial_goal} = req.body


    const updateAccountById = await Account.findById(req.params.id)

    if (updateAccountById) {
        updateAccountById.account_currency = account_currency
        updateAccountById.current_balance = current_balance
        updateAccountById.financial_goal = financial_goal

        const updatedAccount = await updateAccountById.save()
        res.status(201).json(updatedAccount)
    } else {
        res.status(401)
        throw new Error('Account not found')
    }
})



export {
    getAccount, 
    getAccountById, 
    deleteAccountById, 
    createAccount, 
    updateAccountById
}