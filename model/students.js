const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const StudentsModel = new mongoose.Schema({
     
     first_Name: {
        type: String,
        required: true
     },
     middle_Name: {
       type: String
     },
     last_Name: {
        type: String,
        required: true
     },
     email: {
       type: String,
       required: true,
       unique: true
     },
     password: {
        type: String,
        required: true
     },
     age: {
        type: Number,
        required: true,
        unique: true
     },
     address: {
        type: String,
      
     },
     phone_no: {
        type: Number,
       
     },
     gender: {
        type: String,
        
     },
});

// bcrypt uses
StudentsModel.pre("save", async function name(next) {
    const student = this;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(student.password, salt);
    this.password = hash;
    next();
})

module.exports = mongoose.model('Students', StudentsModel);
