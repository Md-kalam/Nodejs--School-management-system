const express = require('express');
const {Validator} = require('node-input-validator');
const router = express.Router();
const grades = require('../../model/grades');

// Define routes for grades
router.patch('/update', async function (req, res) {

    try { 
        const val = new Validator(req.body, {
            id: "required|string",
            student: "required|string",
            course: "required|string",
            grade: "required|string"
        });
        const matched = await val.check();

        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors})

        } else { 
   
            grades.where({id: req.body.id}).updateOne({
                create_student_id: req.student._id,
                student: req.body.student,
                course: req.body.course,
                grade: req.body.grade,
                
            }, function (error) {
                if (! error) {
                    return res.status(200).json({"status": 200, "message": "Updated"})
                } else {
                    return res.status(500).json({"status": 500, "message": "not update"})
                    
                }
            });
            return res.status(200).json({"status": 200, "message": "ok"})
        }

    } catch (error) {
        return res.status(500).json({status: 500, message: 'internal server error', error: error.message})

    }
});

module.exports = router;
