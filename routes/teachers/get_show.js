const express = require('express');
const router = express.Router();
const teachers = require('../../model/teachers');

// Define routes for teachers
router.get('/show', function (req, res) {
    try {
        const data = teachers.find({status: 1});
        return res.status(200).json({"status": 200, "result_teachers": data})
    } catch (error) {
        return res.status(500).json({status: 500, message: "internal server error", error: error.message});
    }
});

module.exports = router;
