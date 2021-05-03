import mongoose from 'mongoose'

const catigoriesSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    limit: {
        type: Number,
        required: true,
        default: 1
    }

}, {
    timestamps: true
})


const catigories = mongoose.model('catigories', catigoriesSchema);

export default catigories;