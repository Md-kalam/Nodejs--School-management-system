const express = require('express');
const router = express.Router();
const grades = require('../../model/grades');

// Define routes for grades
router.get('/show', function (req, res) {
    try {
        const data = grades.find({status: 1});
        return res.status(200).json({"status": 200, "result_grades": data})
    } catch (error) {
        return res.status(500).json({status: 500, message: "internal server error", error: error.message});
    }
});

module.exports = router;
