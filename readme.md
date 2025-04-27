 # Node.js Tasks

**Node.js Tasks** is a Command Line Interface (CLI) application designed for managing a simple task list. Users can interact with the application to add tasks, list all tasks, retrieve a task by its ID, update a task, and delete tasks from the list.

This application is built using Node.js and uses the `fs` module to read from and write to a JSON file, which serves as a simple database for storing tasks. The app also leverages the `yargs` library for parsing command-line arguments, making it easy and intuitive to manage tasks through the terminal.

## 🔍 Features

- 📋 List all tasks
- ➕ Add a new task
- 📝 Get a task by its ID
- ✏️ Update a task's status or description
- ❌ Remove a task from the list

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [yargs](https://github.com/yargs/yargs)
- [fs (File System module)](https://nodejs.org/api/fs.html)

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MateuszKar2/nodejs-tasks.git
   cd nodejs-tasks

2. **Install dependencies:**

   npm install

3. **Run the application:**

   The application allows you to manage tasks directly from the terminal using the following commands:

   List all tasks:

   node index.js list

   Add a new task:

   node index.js add --title "Your task title" --description "Task description"

   Get a task by ID:

   node index.js get --id <task-id>

   Update a task:

   node index.js update --id <task-id> --title "Updated task title" --description "Updated description"

   Delete a task:

   node index.js delete --id <task-id>

   4.Tasks are stored in a JSON file that gets automatically updated when performing any of the actions above.

   🧑‍💻 Author
   Mateusz Karpiński
   🔗 GitHub Profile

⭐ If you like this project, consider leaving a star!
