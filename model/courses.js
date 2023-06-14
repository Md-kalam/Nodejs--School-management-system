const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new mongoose.Schema({
    create_student_id: {
        type: String,
        required: true
    },
    course_name: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    admission: {
        type: String,
      
    },
    duration: {
        type: Number,
        required: true
    },
    examination_type: {
        type: String,
        required: true
    },
    Eligibility: { 
        type: String,
        
    },
    average_course_fee: {
        type: Number,
        required: true
    },
    average_starting_salary: {
        type: Number,
        required: true
    },


});
module.exports = mongoose.model('Course', courseSchema);
