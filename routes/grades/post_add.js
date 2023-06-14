const express = require('express');
const {Validator} = require('node-input-validator');
const router = express.Router();
const grades = require('../../model/grades');

// Define routes for grades
router.post('/add', async function (req, res) {

    try { 
        const val = new Validator(req.body, {
            student: "required|string",
            course: "required|string",
            grade: "required|string"
        });
        const matched = await val.check();

        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors})

        } else { 
   
            grades.create({
                create_student_id: req.student._id,
                student: req.body.student,
                course: req.body.course,
                grade: req.body.grade,
                date: Date.now(),
                status: 1
            });
            return res.status(200).json({"status": 200, "message": "ok"})
        }

    } catch (error) {
        return res.status(500).json({status: 500, message: 'internal server error', error: error.message})

    }
});

module.exports = router;
