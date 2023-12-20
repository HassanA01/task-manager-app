CREATE DATABASE IF NOT EXISTS task_torch

-- Enter top line first and then following lines --

CREATE TYPE task_state AS ENUM('in progress', 'completed');

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status task_state
);

-- Mock Data --
INSERT INTO PROJECTS (name, description, status)
VALUES ('task manager', 'simple task manager application','in progress'),
('portfolio website', 'simple portfolio website application', 'in progress'),
('Book Recommender', 'Random Book Recommender App','completed');


CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status task_state,
    project_id INTEGER REFERENCES projects(id)
);

-- Mock Data for task manager project --
INSERT INTO tasks (name, description, status, project_id)
VALUES ('Create dashboard page', 'use react and tailwind to develope a clean ui', 'in progress', 1),
('Design database schema', 'Create the database schema for the application', 'completed', 1),
('Set up backend', 'Implement the backend logic and endpoints', 'in progress', 1),
('Write API documentation', 'Document all the API endpoints using Swagger', 'completed', 1);

-- Insert mock tasks for "portfolio website" project
INSERT INTO tasks (name, description, status, project_id)
VALUES 
('Create homepage', 'Develop the homepage with introductory content', 'completed', 2),
('Add portfolio items', 'Showcase previous work in a grid format', 'completed', 2),
('Implement contact form', 'Create a contact form with email functionality', 'in progress', 2);

-- Insert mock tasks for "Book Recommender" project
INSERT INTO tasks (name, description, status, project_id)
VALUES 
('Gather book data', 'Collect and organize data about books to recommend', 'completed', 3),
('Develop recommendation algorithm', 'Write the logic to recommend books based on user preferences', 'completed', 3),
('User testing', 'Perform user testing to ensure recommendations are relevant', 'completed', 3);


-- Getting all tasks for each project --
SELECT * FROM projects
JOIN tasks
ON tasks.project_id = projects.id