const express = require('express');
const {Validator} = require('node-input-validator');
const router = express.Router();
const students = require('../../model/students');

// Define routes for students
router.delete('/delete', async function (req, res) {

    try { 
        const val = new Validator(req.body, {
            id: "required|string",
        });
        const matched = await val.check();

        if (! matched) {
            return res.status(422).json({status: 422, error: val.errors})

        } else { 
   
            students.findOneAndRemove({
                id: req.body.id,
                
            }, function (error) {
                if (! error) {
                    return res.status(200).json({"status": 200, "message": "Deleted"})
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
