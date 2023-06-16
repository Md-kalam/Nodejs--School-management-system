const express = require('express');
const {Validator} = require('node-input-validator');
const router = express.Router();
const courses = require('../../model/courses');

// Define routes for courses
router.patch('/update', async function (req, res) {

    try { 
        const val = new Validator(req.body, {
            id: "required|string",
            course_name: "required|string",
            instructor: "required|string",
            subject: "required|string"
        });
        const matched = await val.check();

        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors})

        } else { 
   
            courses.where({id: req.body.id}).updateOne({
                create_student_id: req.student._id,
                course_name: req.body.course_name,
                instructor: req.body.instructor,
                subject: req.body.subject,

            }, function (error) {
                if (! error) {
                    return res.status(200).json({"status": 200, "message": "Updated"})
                } else {
                    return res.status(500).json({"status": 500, "message": "not update"})
                    
                }
                
            });
        }

    } catch (error) {
        return res.status(500).json({status: 500, message: 'internal server error', error: error.message})

    }
});

module.exports = router;
