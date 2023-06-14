const jwt = require('jsonwebtoken');
const students = require('../model/students');
// postman res ko get kr 
 async function verify (req, res, next) {
    try {
        const token = req.header('auth-token');
        // token verify kia
        if (! token) {
            return res.status(401).json({status: 401, message: 'token not found'})

        } else { // token extract
           jwt.verify(token, process.env.JWT_KEY, async function(err, verifiedUser) {
                if (err) {
            return res.status(401).json({status: 401, message: 'token is invalid'})
                 
                }else{
                   if (verifiedStudent.student_details._id) {  
            const student_details = await students.exists({_id: verifiedStudent.student_details._id});
                
            if (student_details) {
                    req.student = verifiedStudent.student_details;
                    next();
                } else {
                    return res.status(401).json({status: 401, message: 'Unauthorized'})

                }
                   } else {
                    return res.status(401).json({status: 401, message: 'Unauthorized Token'})
                   }
                }
              });
            
        }
    } catch (err) {
        return res.status(500).json({status: 5000, message: 'internal server error', error: err.message})

    }
}
module.exports = verify;