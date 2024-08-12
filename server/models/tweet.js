// const mongoose = require('mongoose')

// const tweetschema = new mongoose.Schema({
//     content : {type : String, required :true},
//     publisher :{ type:mongoose.Schema.Types.ObjectId,required:true,ref:'User'},
//     likes : {type:mongoose.Schema.Types.ObjectId,ref:'User'},
//     posted : {type:Date, default:Date.now},
//     comments : {type:mongoose.Schema.Types.ObjectId,ref:'User'}
// })

// module.exports = mongoose.model('Tweet',tweetschema)

const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: { type: String, required: true },
    publisher: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Change to an array of ObjectId
    posted: { type: Date, default: Date.now },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Change to an array of ObjectId
});

module.exports = mongoose.model('Tweet', tweetSchema);
