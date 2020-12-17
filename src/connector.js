
//const mongodb = require('mongodb');

const mongoURI = "mongodb+srv://dbUser:12345@cluster0.rnxiv.mongodb.net/<SearchCollege>?retryWrites=true" + "/collegeDetails"

let mongoose = require('mongoose');
const { collegeSchema } = require('./schema')


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
let collegeModel = mongoose.model('collegerecords', collegeSchema)

exports.collegeModel = collegeModel;
