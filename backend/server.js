require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();

// Middleware configuration
app.use(cors());
app.use(express.json());

// Routes
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);


app.listen(3000, () => {
    console.log('listening on port 3000');
}) 