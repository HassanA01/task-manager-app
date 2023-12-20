const { db } = require('../database');

// Get all projects
const getAllProjects = async () => {
    try {
        const projects = await db.query('SELECT * FROM projects');
        return projects.rows;
    } catch (err) {
        console.error(err);
    }
};

// Create a new project
const createProject = async (name, description, status) => {
    try {
        const newProject = await db.query(
            'INSERT INTO projects (name, description, status) VALUES ($1, $2, $3) RETURNING *',
            [name, description, status]
        );
        return newProject.rows[0];
    } catch (err) {
        console.error(err);
    }
};

const deleteProject = async (projectId) => {
    try {
        const deletedProject = await db.query('DELETE FROM projects WHERE id = $1 RETURNING *', [projectId]);
        if (deletedProject.rows.length === 0) {
            throw new Error('Project not found');
        }
        return deletedProject.rows[0];
    } catch (err) {
        console.error(err);
    }
};

module.exports = { getAllProjects, createProject, deleteProject };
