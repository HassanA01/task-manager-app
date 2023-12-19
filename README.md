# TaskTorch

## Introduction

Welcome to TaskTorch, a full-stack application built using the PERN stack (PostgreSQL, Express, React, Node.js). This project aims to demonstrate a robust architecture for web application development, leveraging the strengths of each technology in the stack.

### Prerequisites

What things you need to install the software and how to install them:

- **[<u>Node.js](https://nodejs.org/en/download)** and npm
- [PostgreSQL](https://www.postgresql.org/download/)
- Git (for version control)
- A text editor such as **[VSCode](https://code.visualstudio.com/Download)**

### Installation

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repo
   ```sh
   git clone git@github.com:HassanA01/task-manager-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up your PostgreSQL database
   - Create a database and note the credentials
   - Configure your `.env` file with your database credentials

### Running the Application

Explain how to run the automated tests for this system:

1. Start the backend server:
   ```sh
   npm run start-server
   ```
2. In a new terminal, start the React client:
   ```sh
   npm start
   ```

Your application should now be running on `localhost:3000`.
Postgres server is normally run on `localhost:5432`.

## Features

- Add new tasks to your task manager!
- Update tasks as you make progress!
- Once you finish you can tick off that task and move on to the next!
- Integrate members to your task manager so you all can collaborate in real time!
