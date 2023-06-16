const express = require('express');
const {Validator} = require('node-input-validator');
const router = express.Router();
const teachers = require('../../model/teachers');


// Define routes for teachers
router.patch('/update', async function (req, res) {

    try {
        const val = new Validator(req.body, {
            id: "required|string",
            first_Name: "required|string",
            last_Name: "required|string",
            email: "required|string",
            select_District: "required|string",
            select_School: "required|string"
        });
        const matched = await val.check();

        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors})

        } else {

            teachers.where({id: req.student.id}).updateOne({
                create_students_id: req.stduents._id,
                first_Name: req.body.student,
                last_Name: req.body.course,
                email: req.body.grade,
                select_District: req.body.select_District,
                select_School: req.body.select_School,
            }, function(err) {
                if (! err) {
                 return res.status(200).json({"status": 200, "message": "Updated"})    
                } else {
            return res.status(404).json({"status": 404, "message": "not update"})
        }
            });
        }

    } catch (error) {
        return res.status(500).json({status: 500, message: 'internal server error', error: error.message})

    }
});

module.exports = router;
