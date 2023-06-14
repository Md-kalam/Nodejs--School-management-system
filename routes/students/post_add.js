const express = require('express');
const {Validator} = require('node-input-validator');
const router = express.Router();
const students = require('../../model/students');

// Define routes for students
router.post('/add', async function (req, res) {

    try { 
        const val = new Validator(req.body, {
            first_Name: "required|string",
            last_Name: "required|string",
            email: "required|string",
            password: "required",
            age: "required|string"
        });
        const matched = await val.check();

        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors})

        } else { 
   
            students.create({
                create_student_id: req.student._id,
                first_Name: req.body.student,
                last_Name: req.body.course,
                email: req.body.grade,
                password: req.body.password,
                age: req.body.age,
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
