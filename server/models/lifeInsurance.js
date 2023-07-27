const mongoose = require('mongoose');

const lifeinsuranceSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, 'Please enter your first name']
    },
    lastName:{
        type: String,
        required: [true, 'Please enter your last name']
    },
    email:{
        type: String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],unique: true,
    },
    phone:{
        type: String,
        required: [true, 'Please enter your phone number']
    },
    message:{
        type: String,
        required: [true, 'Please enter your message']
    }
  },
  {timestamps: true}
)

module.exports = mongoose.model('LifeInsurance', lifeinsuranceSchema);