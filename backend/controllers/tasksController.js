const { db } = require('../database');

// Gets the tasks associated with this project <projectId>
const getProjectTasks = async (projectId) => {
    try {
        const result = await db.query('SELECT * FROM tasks WHERE project_id = ($1)', [projectId]);
        // console.log(result.rows)
        return result.rows
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const addTask = async (projectId, taskName, taskDesc) => {

    try {

        if (taskName === "" ) { 
            throw new Error("name field cannot be empty");
        }

        await db.query('INSERT INTO tasks (project_id, name, description, status) VALUES ($1, $2, $3, $4);', [projectId, taskName, taskDesc, 'in progress']);

        return { message: "Task added successfully"};
    } catch (error) {
        console.error("Error adding task to project:", error.stack );
        throw error;
    }
};

const updateTask = async (projectId, taskId, taskName, taskDesc, taskStatus) => {

    try {

        if (taskName === "" ) {
            throw new Error("name field cannot be empty");
        }

        await db.query('UPDATE tasks SET name = $1, description = $2, status = $5 WHERE id = $3 AND project_id = $4', [taskName, taskDesc, taskId, projectId, taskStatus]);

        return { message : "Task updated successfully"};
    } catch (error) {

        console.error("Error updating task", error.stack);

        throw error;
    }
};

const deleteTask = async (projectId, taskId) => {
    console.log(projectId, taskId)
    try {
        await db.query("DELETE FROM tasks WHERE id = $1 AND project_id = $2", [taskId, projectId]);

        return {message: "Task deleted successfully"};
    } catch (error) {
        console.error("Error deleting task", error.stack);
        throw error;
    }
};



module.exports = {getProjectTasks, addTask, updateTask, deleteTask};