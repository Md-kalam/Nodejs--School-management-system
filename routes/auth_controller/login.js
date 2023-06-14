const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Validator} = require('node-input-validator');
const Students = require('../../model/students');

// Register now we use here a validator
router.post('/', async function (req, res) {
    try {
        const val = new Validator(req.body, {
            email: "required|email",
            password: "required"
        });

        const matched = await val.check();
        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors})
        } else {
            const student = await Students.findOne({email: req.body.email});
            if (student) {
                const validPass = await bcrypt.compare(req.body.password, student.password);
                if (validPass) {
                    var token = jwt.sign({
                        student_details: student
                    }, process.env.JWT_KEY, { expiresIn: 60 * 60})
                    return res.status(200).json({status: 200, "auth-token": token})

                } else {
                    return res.status(500).json({status: 500, message: "invalid email or password"})

                }

            } else {
                return res.status(500).json({status: 500, message: "Student invalid email or password"})

            };
        }

    } catch (error) {
        return res.status(500).json({status: 500, message: "internal server error", error: error.message})
    }
});

module.exports = router;
