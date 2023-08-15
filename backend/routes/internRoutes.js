const express = require('express');
const router = express.Router();
const Intern = require('../models/Intern'); // Adjust the path as needed

// Create a new intern
router.post('/interns', async (req, res) => {
  try {
    const { name, description, date } = req.body;
    const newIntern = new Intern({ name, description, date });
    await newIntern.save();
    res.status(201).json(newIntern);
  } catch (error) {
    res.status(500).json({ error: 'Error creating intern' });
  }
});

// Get all interns
router.get('/interns', async (req, res) => {
  try {
    const interns = await Intern.find();
    res.status(200).json(interns);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching interns' });
  }
});

module.exports = router;
