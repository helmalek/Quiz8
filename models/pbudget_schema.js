const mongoose = require("mongoose")


const pbudgetSchema = new mongoose.Schema({
    
    title:{
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    }
}, 
{ collection: 'pbudget_collection'});

module.exports = mongoose.model('pbudget_collection', pbudgetSchema)