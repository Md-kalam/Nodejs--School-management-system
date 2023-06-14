const express = require('express');
const router = express.Router();

const registerController = require('./auth_controller/register');
router.use('/register', registerController);

const loginController = require('./auth_controller/login');
router.use('/login', loginController);

// courses
const courseShowController = require('./courses/get_show');
router.use('/courses', courseShowController);

// grades
const gradeShowController = require('./grades/get_show')
router.use('/grades', gradeShowController);

// students
const studentShowController = require('./students/get_show')
router.use('/students', studentShowController);

// teachers
const teacherShowController = require('./teachers/get_show')
router.use('/teachers', teacherShowController);

module.exports = router;




