const { db } = require('../database');


// Gets the tasks associated with this project <projectId>
const getProjectTasks = async (projectId) => {
    try {
        const result = await db.query('SELECT * FROM tasks WHERE project_id = ($1)', [projectId]);
        // console.log(result.rows)
        return result.rows
    } catch (error) {
        console.error(error);
    }
}

const addTasks = async (projectId, taskName, taskDesc) => {
    try {
        await db.query('INSERT INTO tasks (project_id, name, description) VALUES ($1, $2, $3);', [projectId, taskName, taskDesc]);

        return { message: "Task added successfully"};
    } catch (error) {
        console.error("Error adding task to project:", error.stack );
    }
};


module.exports = {getProjectTasks, addTasks};