const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const students = require("./students.js");
const Student = students.model;

// Create a scheme for study groups: a number and a time.
const groupSchema = new mongoose.Schema({
  number: String,
  time: String,
  days: String,
});

// Create a model for groups
const Group = mongoose.model('Group', groupSchema);


// Create a new group: takes a number and a time.
router.post('/', async (req, res) => {
  const group = new Group({
    number: req.body.number,
    days: req.body.days,
    time: req.body.time,
  });
  try {
    await group.save();
    res.send(group);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the study goups.
router.get('/', async (req, res) => {
  try {
    let groups = await Group.find();
    res.send(groups);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Group.deleteOne({ _id: req.params.id });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  try {
    let group = await Group.findOne({ _id: req.params.id });
    group.number = req.body.number;
    group.days = req.body.days;
    group.time = req.body.time;
    await item.save();
    res.send(group);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  routes: router,
  model: Group,
};
