# To-Do List API

This To-do List is a basic web application built using Node.js and Express. It allows users to manage tasks by performing CRUD operations (Create, Read, Update, Delete). The tasks are stored in a SQLite database using Sequelize as the ORM (Object-Relational Mapper).

## API Endpoints

- **Create Task:**
  - `POST /task`
  - Body: JSON object with `author`, `description`, and `date`.

- **Get All Tasks:**
  - `GET /tasks`

- **Get Task by ID:**
  - `GET /task-id/:taskId`

- **Get Tasks by Author:**
  - `GET /task-author/:taskAuthor`

- **Update Task by ID:**
  - `PATCH /task/:taskId`
  - Body: JSON object with updated `author`, `description`, or `date`.

- **Delete Task by ID:**
  - `DELETE /task/:taskId`


## Notes

No front-end has been implemented here. Feel free to create your own and use this as the back-end.

The database used is a simple in-memory SQLite database.

To test the API, you can run the server or try running ```test.py```.

---
Happy coding!