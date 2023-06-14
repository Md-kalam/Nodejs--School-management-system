const express = require('express');
const router = express.Router();
const students = require('../../model/students');

// Define routes for students
router.get('/show', function (req, res) {
    try {
        const data = students.find({status: 1});
        return res.status(200).json({"status": 200, "result_students": data})
    } catch (error) {
        return res.status(500).json({status: 500, message: "internal server error", error: error.message});
    }
});

module.exports = router;
