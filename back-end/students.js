const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const groups = require("./groups.js");
const Group = groups.Schema;

const studentSchema = new mongoose.Schema({
});

// Create a model for contacts in the directory.
const Student = mongoose.model('Student', studentSchema);

// Create a new contact in the directory.
router.post('/', async (req, res) => {
  const student = new Student({
    groupNumber: req.body.groupNumber,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
  });
  try {
    await student.save();
    res.send(student);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
router.get('/', async (req, res) => {
  try {
    let students = await Student.find();
    res.send(students);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Student.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  routes: router,
  model: Student,
};
