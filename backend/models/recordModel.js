import mongoose from 'mongoose'

const recordSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'catigories'
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    timestamps: true
})


const record = mongoose.model('record', recordSchema);

export default record;