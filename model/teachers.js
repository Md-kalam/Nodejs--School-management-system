const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    create_student_id: {
        type: String,
        required: true
    },
    first_Name: {
        type: String,
        required: true
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
    select_District: {
        type: String,
        required: true
    },
    select_School: {
        type: String,
    
    },

});

module.exports = mongoose.model('Teacher', teacherSchema);
