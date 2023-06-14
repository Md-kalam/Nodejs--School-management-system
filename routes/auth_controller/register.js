const express = require('express');
const router = express.Router();
const {Validator} = require('node-input-validator');
const Students = require('../../model/students');

// Register now we use here a validator
router.post('/', async function (req, res) {
    try {
        const val = new Validator(req.body, {
            email: "required|email",
            password: "required",
            age: "required|string",
            first_Name: "required|string",
            last_Name: "required|string"
        });

        const matched = await val.check();
        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors})
        } else {
            const isStudentExist = await Students.exists({email: req.body.email});
            if (isStudentExist) {
            return res.status(405).json({status: 405, message: "Students Aleady Exists"})
        } else {
    // Here we save the request
    Students.create({
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        first_Name: req.body.first_Name,
        last_Name: req.body.last_Name,
        date: Date.now(),
        status: 1
    });
    return res.status(200).json({status: 200, message: 'ok'})
    }

}

} catch (error) {
   return res.status(500).json({status: 500, message: "internal server error", error:error.message}) 
}
});

module.exports = router;
