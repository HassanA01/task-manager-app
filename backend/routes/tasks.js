const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

// Route to get tasks for a given project
router.get('/:project_id', async (req, res) => {
    
    const projectId = req.params.project_id;

    try {
        const result = await tasksController.getProjectTasks(projectId);
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message})
    }
});

// Route to add a task for a given project
router.post('/:project_id', async (req, res) => {
    const projectId = req.params.project_id;
    const {taskName, taskDesc } = req.body;

    try {
        const result = await tasksController.addTask(projectId, taskName, taskDesc);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({message: err.message });
    }
});

module.exports = router;