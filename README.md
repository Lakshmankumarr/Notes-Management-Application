# Notes Application

A client-side Notes Management Application developed using HTML, CSS, and JavaScript. The application enables users to create, view, and delete notes while persisting data locally using the browser's Local Storage API.

## Overview

The Notes Application is a lightweight note-taking solution that allows users to manage personal notes directly in the browser. The application demonstrates CRUD operations, state management, dynamic UI rendering, and persistent data storage.

## Features

- Create notes
- View saved notes
- Delete notes
- Persistent storage using Local Storage
- Dynamic note rendering
- Responsive user interface
- Real-time UI updates

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)

### Browser APIs
- Local Storage API

### Development Tools
- VS Code
- Live Server
- Git
- GitHub
- GitHub Pages

## Project Structure

```text
notes-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Application Workflow

```text
User Input
      ↓
Create Note Object
      ↓
Store in Notes Array
      ↓
Save to Local Storage
      ↓
Render Notes
      ↓
Display Updated UI
```

## Data Model

Each note is represented as an object.

```javascript
{
    title: "JavaScript Concepts",
    content: "Learn async/await and fetch API."
}
```

Example:

```javascript
[
    {
        title: "JavaScript Concepts",
        content: "Learn async/await and fetch API."
    },
    {
        title: "Project Ideas",
        content: "Build a Movie Search Application."
    }
]
```

## Core Functionalities

### Create Note

Users can create and save new notes.

### Read Notes

Saved notes are displayed dynamically in the interface.

### Delete Note

Users can remove notes from the application.

### Persist Data

Notes remain available even after:

- Browser Refresh
- Browser Restart
- System Restart

## Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/notes-app.git
```

### Navigate to the Project Directory

```bash
cd notes-app
```

### Run the Application

Open:

```text
index.html
```

in a web browser

or

Use VS Code Live Server.

## Learning Outcomes

This project demonstrates:

- CRUD Operations
- Arrays of Objects
- Local Storage
- State Management
- DOM Manipulation
- Event Handling
- Dynamic Rendering
- JSON Serialization
- JSON Deserialization

## Future Enhancements

- Edit Existing Notes
- Search Notes
- Note Categories
- Note Creation Date
- Note Priority Levels
- Rich Text Formatting
- Dark Mode
- Note Export Functionality
- Cloud Synchronization

## Portfolio Description

Developed a Notes Management Application using JavaScript and Local Storage, implementing CRUD operations, client-side state management, and persistent data storage through dynamic user interface rendering.

## Interview Topics Covered

- CRUD Operations
- Local Storage API
- Arrays and Objects
- DOM Manipulation
- Event Handling
- State Management
- Dynamic Rendering
- JSON Methods

## Live Demo

Add your GitHub Pages deployment URL here:

```text
https://YOUR_USERNAME.github.io/notes-app/
```

## Author

Lakshman

## License

This project is developed for educational, portfolio, and learning purposes.
