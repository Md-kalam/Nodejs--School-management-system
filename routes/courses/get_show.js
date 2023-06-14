const express = require('express');
const router = express.Router();
const courses = require('../../model/courses');

// Define routes for courses

router.get('/show', function (req, res) {
    try {
        const data = courses.find({status: 1});
        return res.status(200).json({"status": 200, "result_courses": data})
    } catch (error) {
        return res.status(500).json({status: 500, message: "internal server error", error: error.message});
    }
});

module.exports = router;
