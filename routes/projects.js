const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Create a new project
router.post('/projects', async (req, res) => {
  const newProject = new Project(req.body);
  const savedProject = await newProject.save();
  res.json(savedProject);
});

// Update a project
router.put('/projects/:id', async (req, res) => {
  const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProject);
});

// Delete a project
router.delete('/projects/:id', async (req, res) => {
  const deletedProject = await Project.findByIdAndDelete(req.params.id);
  res.json(deletedProject);
});

module.exports = router;
