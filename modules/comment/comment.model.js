const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    user: {type: Schema.Types.ObjectId, required: true,ref: 'User'},
    idea: {type: Schema.Types.ObjectId, required: true,ref: 'Idea'},
    description: String,
    created: {type: Date, deault: Date.now},
    deleted: {type: Date},
    updated: {type: Date},
    meta: {
        like: {type: Number,default: 0},
        status: {type: Number, default: 0}// 0: 활성화, 1: 삭제, 2: reject
    }
});

module.exports = mongoose.model('Comment',commentSchema);
