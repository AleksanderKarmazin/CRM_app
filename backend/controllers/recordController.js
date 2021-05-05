import express from 'express'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'


import Record from '../models/recordModel.js';


// @desc    Fetch all ad
// @rout    GET /ad
// @access  public
const getRecord = asyncHandler(async (req, res) => {
    const RecordList = await Record.find({user: req.user._id})
    res.json(RecordList);
})

// @desc    Fetch ad by id
// @rout    GET /ad/:id
// @access  public
const getRecordById = asyncHandler(async (req, res) => {
    const RecordById = await Record.findById(req.params.id).populate('user category', 'name email title limit');

    if (RecordById) {
        res.json(RecordById);
    } else {
        res.status(404)
        throw new Error('RecordById not Found, скорее всего эту запись удалили ранне')
    }
})

// @desc    Delete Ad
// @rout    DELETE /ad/:id
// @access  
const deleteRecordById = asyncHandler(async (req, res) => {
    const RecordById = await Record.findById(req.params.id);

    if (RecordById) {
        RecordById.remove()
        res.json({ message: "RecordById removed" });
    } else {
        res.status(404)
        throw new Error('RecordById not Found')
    }
})

// @desc    Create Ad
// @rout    POST /ad/
// @access  
const createRecord = asyncHandler(async (req, res) => {
    const {category_id, amount, description, type } = req.body
    
    const newRecord = new Record({
        user: req.user._id,
        category: category_id,
        amount: amount,
        description: description,
        type: type,
        date: new Date().toJSON()
    })

    const createdRecord = await newRecord.save()
    res.status(201).json(createdRecord)
})

// @desc    Update Product Seed
// @rout    PUT /seeds/:id
// @access  
const updateRecordById = asyncHandler(async (req, res) => {
    const {category_id, amount, description, type, date} = req.body


    const updateRecordById = await Record.findById(req.params.id)

    if (updateRecordById) {
        updateRecordById.category = new mongoose.Types.ObjectId(category_id);
        updateRecordById.amount = amount
        updateRecordById.description = description
        updateRecordById.type = type
        updateRecordById.date = new Date().toJSON()

        const updatedRecord = await updateRecordById.save()
        res.status(201).json(updatedRecord)
    } else {
        res.status(401)
        throw new Error('Record not found')
    }
})



export {
    getRecord, 
    getRecordById, 
    deleteRecordById, 
    createRecord, 
    updateRecordById
}