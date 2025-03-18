# Kanban Board

## License
MIT

## Description
The Kanban Board is a full-stack web application that enables users to manage tasks efficiently using a Kanban-style interface. The application includes user authentication with JWT, allowing users to securely log in and manage their tasks. Users can create, edit, move, and delete tasks across different columns on the board, helping them stay organized and track progress.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Features
- User authentication using JSON Web Tokens (JWT)
- Secure password hashing with bcrypt
- CRUD operations for task management (Create, Read, Update, Delete)
- Drag-and-drop functionality for moving tasks between columns
- Responsive and modern UI built with React
- RESTful API built with Express and Node.js
- PostgreSQL database integration using Sequelize ORM
- Environment variables support via dotenv
- Deployment on Render

## Technologies Used
This project is built using the PERN stack:
- **Front-end:** React, React Router, CSS
- **Back-end:** Node.js, Express.js, JWT Authentication
- **Database:** PostgreSQL with Sequelize ORM
- **Security:** bcrypt for password hashing, dotenv for environment variables

## Installation
### Prerequisites
Before installing, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) and npm (or yarn)
- [PostgreSQL](https://www.postgresql.org/)

### Steps to Set Up Locally
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/kanban-board.git
   ```
2. **Navigate into the project folder:**
   ```sh
   cd kanban-board
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Set up the database:**
   - Open PostgreSQL and create a new database
   - Run the following command to initialize the database schema:
     ```sh
     psql -U [your-postgres-username] -d [your-database-name] -f server/db/schema.sql
     ```
   - (Optional) Seed the database with test data:
     ```sh
     npm run seed
     ```
5. **Start the development server:**
   ```sh
   npm run start:dev
   ```
   This will start both the client and server locally.

6. **Build for production:**
   ```sh
   npm run build
   ```

## Usage
[Recording of Usage Link!](https://app.screencastify.com/v3/watch/0YRf1PlGVFzesb9c4bjl)

The Kanban Board is deployed via Render: [Live Demo](https://kanban-board-k5jy.onrender.com)

### Core Functionality
- **Login Page:** Allows users to log in securely using JWT authentication.
- **Kanban Board:** Users can manage tasks by creating, editing, deleting, and moving them across different status columns.
- **Task Sorting & Filtering:** Organize tasks efficiently by filtering based on status or priority.

## Contributing
Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. **Fork the repository**
2. **Create a new feature branch**
   ```sh
   git checkout -b feature/NewFeature
   ```
3. **Commit your changes**
   ```sh
   git commit -m 'Add new feature'
   ```
4. **Push to the branch**
   ```sh
   git push origin feature/NewFeature
   ```
5. **Open a Pull Request**

Your contributions are greatly appreciated!

## License
This project is licensed under the MIT License. See [MIT License](https://opensource.org/licenses/MIT) for details.

## Questions
For questions or feedback, feel free to reach out:
- **GitHub:** [cpars](https://github.com/cpars)
- **Email:** cparsons0730@yahoo.com
