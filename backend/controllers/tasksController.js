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
};

const addTasks = async (projectId, taskName, taskDesc) => {
    try {
        await db.query('INSERT INTO tasks (project_id, name, description) VALUES ($1, $2, $3);', [projectId, taskName, taskDesc]);

        return { message: "Task added successfully"};
    } catch (error) {
        console.error("Error adding task to project:", error.stack );
    }
};

const updateTasks = async (projectId, taskId, taskName, taskDesc) => {

    try {
        await db.query('UPDATE tasks SET name = $1, description = $2 WHERE id = $3 AND project_id = $4', [taskName, taskDesc, taskId, projectId]);

        return { message : "Task updated successfully"};
    } catch (error) {
        console.error("Error updating task", error.stack);
    }
};

const deleteTask = async (taskId, projectId) => {
    try {
        await db.query("DELETE FROM tasks WHERE id = $1 and project_id = $2", [taskId, projectId]);

        return {message: "Task deleted successfully"};
    } catch (error) {
        console.error("Error deleting task", error.stack);
    }
};



module.exports = {getProjectTasks, addTasks, updateTasks, deleteTask};