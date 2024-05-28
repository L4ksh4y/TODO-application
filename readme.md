# Todo App
## Overview
This project is a simple Todo application built with React and Vite. It allows users to create and view a list of todos fetched from a local server. The application is designed to demonstrate basic React hooks, component usage, and interaction with a backend API.

## Features
Fetch Todos: Fetches a list of todos from a local server.
Create Todos: Provides a component for creating new todos.
Display Todos: Displays the list of fetched todos.
Technologies Used
React: JavaScript library for building user interfaces.
Vite: Next-generation front-end tooling for fast development.
CSS: Styling for the application (assumed to be in style.css).
 
## Tech Stack 

**Backend**-> Express 
\
**Frontend**-> React JS
\
**DataBase**->MongoDB
\
**Auth**->Zod

**File Structure**
```
src/
assets/
react.svg
vite.svg
components/
CreateTodos.jsx
Todos.jsx
App.css
App.jsx
main.jsx
```
### How to Run
Clone the Repository: Download or clone the repository to your local machine.
Install Dependencies: Navigate to the project directory and run npm install to install the required dependencies.
Start the Development Server: Run npm run dev to start the Vite development server.

View in Browser: Open your web browser and go to http://localhost:3000 to see the running application.

### Notes
API Endpoint: The app fetches  todos from http://localhost:3000/todos. Ensure that the backend server is running and accessible at this endpoint.

Styling: The application's styling is managed using App.css.
This project provides a basic example of a React application that interacts with a backend API to manage a list of todos. It demonstrates the use of React hooks for state management and component-based architecture