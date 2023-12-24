const express = require('express');
const router = express.Router();
const {getAllProjects, createProject, deleteProject, updateProject} = require('../controllers/projectsController');

// GET all projects
router.get('/', async (req, res) => {
    try {
        const projects = await getAllProjects();
        res.json(projects); // Send JSON response with retrieved projects
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

// POST a new project
router.post('/', async (req, res) => {
    const { name, description, status } = req.body;
    try {
        const newProject = await createProject(name, description, status);
        res.status(201).json(newProject);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});


//delete a project
router.delete('/:id', async (req, res) => {
    const projectId = req.params.id;
    try {
        const deletedProject = await deleteProject(projectId);
        res.status(200).json(deletedProject);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

// Route to update a project
router.put('/:id', async (req, res) => {
    const projectId = req.params.id;
    const { name, description, status } = req.body;

    try {
        const updatedProject = await updateProject(projectId, name, description, status);
        res.status(200).json(updatedProject);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;
