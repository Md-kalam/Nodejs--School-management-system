const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
     create_student_id : {
       type: String,
       required: true
     },
     student: {
        type: String,
        required: true
     },
     course: {
        type: String,
        required: true
     },
     grade: { 
        type: String,
        required: true
     },
     
});

module.exports = mongoose.model('Grade', gradeSchema);
