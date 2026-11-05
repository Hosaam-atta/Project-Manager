# Course Manager — Vanilla JavaScript

A simple, responsive course management application built using **HTML, CSS, and Vanilla JavaScript**.

The project allows users to manage courses through CRUD operations, search for courses by title, and save their data locally in the browser.

## Features

- **Create Course:** Add a new course with a title and description.
- **View Courses:** Display courses dynamically as cards.
- **Update Course:** Edit existing course information without changing its unique ID.
- **Delete Course:** Remove courses from the list.
- **Live Search:** Filter courses by title while typing, with case-insensitive matching.
- **Local Storage:** Save and retrieve courses so data persists after page refresh.
- **Form Validation:** Validate course titles and descriptions before saving.
- **Duplicate Prevention:** Prevent courses from having duplicate titles, ignoring letter case.
- **Error Messages:** Display validation errors near the relevant input fields.
- **Responsive Design:** Adapt the layout to different screen sizes.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- DOM Manipulation
- Browser LocalStorage
- Git & GitHub

## Project Structure

```text
Work-Flow/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
└── README.md
```

## How to Run

1. Clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` using a local development server, such as VS Code Live Server.
4. Start adding, updating, deleting, and searching for courses.

No backend or database setup is required.

## Validation Rules

- Course titles must contain between 3 and 50 characters.
- Course descriptions must contain at least 10 characters.
- Duplicate course titles are not allowed.
- Course title comparisons are case-insensitive.
- When editing an existing course, its current title is allowed.

## How It Works

The application uses a JavaScript array of course objects as its in-memory data source.

Each course contains:

```javascript
{
  id: 1,
  title: "JavaScript",
  description: "Introduction to JavaScript"
}
```

The application separates its main responsibilities into functions for rendering, creating, updating, deleting, searching, and validating courses.

When course data changes, the application updates the interface and saves the latest data to LocalStorage.

On page load, previously saved courses are restored from LocalStorage.

## What I Learned

Through this project, I practiced:

- Building an interactive web application from scratch.
- Implementing CRUD operations with Vanilla JavaScript.
- Working with arrays, objects, and array methods.
- Handling DOM events and dynamically rendering elements.
- Managing Create and Edit modes.
- Persisting data with JSON and LocalStorage.
- Implementing validation and user-friendly error messages.
- Refactoring code into functions with clear responsibilities.
- Debugging and solving problems incrementally.

## Future Improvements

- Add sorting and advanced filtering.
- Add a Cancel Edit option.
- Improve edge-case handling and testing.
- Refactor the application using JavaScript modules.
- Add course categories and status management.

## Author

Developed as a hands-on JavaScript project to strengthen frontend development and problem-solving skills.
