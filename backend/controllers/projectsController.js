const { db } = require('../database');

// Get all projects
const getAllProjects = async () => {
    try {
        const result = await db.query('SELECT * FROM projects');
        const projects = result.rows;
        return projects;
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
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

const updateProject = async (projectId, projectName, projectDescription, projectStatus) => {
    try {
        const query = `
            UPDATE projects
            SET name = $1, description = $2, status = $3
            WHERE id = $4
            RETURNING *;`;

        const result = await db.query(query, [projectName, projectDescription, projectStatus, projectId]);

        if (result.rows.length === 0) {
            throw new Error('Project not found');
        }

        return result.rows[0]; // Return the updated project details

    } catch (error) {
        console.error('Error updating project:', error);
        throw error;
    }
};

module.exports = { getAllProjects, createProject, deleteProject, updateProject };
