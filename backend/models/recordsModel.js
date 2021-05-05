import mongoose from 'mongoose'

const recordsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    catigories: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'catigories'
    },
    account_currensy: {
        type: String,
        required: true
    },
    current_balance: {
        type: Number,
        required: true,
        default: 0
    },
    financial_goal: {
        type: Number,
        required: true,
        default: 0
    }

}, {
    timestamps: true
})


const account = mongoose.model('account', accountSchema);

export default account;