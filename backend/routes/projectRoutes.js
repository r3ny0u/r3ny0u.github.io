const express = require('express');
const router = express.Router();
const Project = require('../models/project'); // Importing the default export

// Create a new project
router.post('/projects', async (req, res) => {
  try {
    const { name, description, date } = req.body;
    const newProject = new Project({ name, description, date });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Error creating project' });
  }
});

// Get all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
});

module.exports = router;
