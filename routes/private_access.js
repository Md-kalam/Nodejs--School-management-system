const express = require('express');
const router = express.Router();

//   *  Define courses routes
const courseAddController = require('./courses/post_add');
router.use('/courses', courseAddController);

const courseUpdateController = require('./courses/patch_update');
router.use('/courses', courseUpdateController);

const courseDeleteController = require('./courses/delete');
router.use('/courses', courseDeleteController);

/// courses will add his profile
router.get('/profile', function(req, res) {

    return res.status(200).json({
         status: 200,
         student: req.students
     })
 })
 

// *   Define grades routes
const gradeAddController = require('./grades/post_add');
router.use('/grades', gradeAddController);

const gradeUpdateController = require('./grades/patch_update');
router.use('/grades', gradeUpdateController);

const gradeDeleteController = require('./grades/delete');
router.use('/grades', gradeDeleteController);

/// grades will add his profile
router.get('/profile', function(req, res) {

    return res.status(200).json({
         status: 200,
         student: req.students
     })
 })



// *   Define students routes
const studentAddController = require('./students/post_add');
router.use('/students', studentAddController);

const studentUpdateController = require('./students/patch_update');
router.use('/students', studentUpdateController);

const studentDeleteController = require('./students/delete');
router.use('/students', studentDeleteController);

/// students will add his profile
router.get('/profile', function(req, res) {

    return res.status(200).json({
         status: 200,
         student: req.students
     })
 })



//  *  Define teachers routes
const teacherAddController = require('./teachers/post_add');
router.use('/teachers', teacherAddController);

const teacherUpdateController = require('./teachers/patch_update');
router.use('/teachers', teacherUpdateController);

const teacherDeleteController = require('./teachers/delete');
router.use('/teachers', teacherDeleteController);

/// teachers will add his profile
router.get('/profile', function(req, res) {

    return res.status(200).json({
         status: 200,
         student: req.students
     })
 })

module.exports = router;