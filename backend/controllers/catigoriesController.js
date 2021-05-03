import express from 'express'
import asyncHandler from 'express-async-handler'

import Catigories from '../models/catigoriesModel.js';


// @desc    Fetch all ad
// @rout    GET /ad
// @access  public
const getCatigories = asyncHandler(async (req, res) => {
    const catigoriesList = await Catigories.find({})
    res.json(catigoriesList);
})

// @desc    Fetch ad by id
// @rout    GET /ad/:id
// @access  public
const getCatigoriesById = asyncHandler(async (req, res) => {
    const catigoryById = await Catigories.findById(req.params.id);

    if (catigoryById) {
        res.json(catigoryById);
    } else {
        res.status(404)
        throw new Error('CatigoryById not Found, скорее всего эту запись удалили ранне')
    }
})

// @desc    Delete Ad
// @rout    DELETE /ad/:id
// @access  
const deleteCatigoriesById = asyncHandler(async (req, res) => {
    const catigoryById = await Catigories.findById(req.params.id);

    if (catigoryById) {
        catigoryById.remove()
        res.json({ message: "CatigoryById removed" });
    } else {
        res.status(404)
        throw new Error('CatigoryById not Found')
    }
})

// @desc    Create Ad
// @rout    POST /ad/
// @access  
const createCatigory = asyncHandler(async (req, res) => {
    const {title, limit} = req.body
    
    const newCatigory = new Catigories({
        user: req.user._id,
        title: title,
        limit: limit,
    })


    const createdCatigory = await newCatigory.save()
    res.status(201).json(createdCatigory)
})

// @desc    Update Product Seed
// @rout    PUT /seeds/:id
// @access  
const updateCatigoryById = asyncHandler(async (req, res) => {
    const {title, limit} = req.body


    const updateCatigoryById = await Catigories.findById(req.params.id)

    if (updateCatigoryById) {

        updateCatigoryById.title = title
        updateCatigoryById.limit = limit


        const updatedCatigory = await updateCatigoryById.save()
        res.status(201).json(updatedCatigory)
    } else {
        res.status(401)
        throw new Error('Catigory not found')
    }
})



export {
    getCatigories, 
    getCatigoriesById, 
    deleteCatigoriesById, 
    createCatigory, 
    updateCatigoryById
}