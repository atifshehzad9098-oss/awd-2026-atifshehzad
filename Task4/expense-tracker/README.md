# Personal Expense Tracker

## Task Information

**Internship Task:** Task 4

This project was completed as **Task 4** during my internship to strengthen my understanding of React fundamentals. The objective was to build a practical application using only core React concepts without a backend or database.

## Project Overview

The Personal Expense Tracker is a simple React application that helps users manage their daily expenses. Users can add expenses by entering a name, amount, and category. The application displays all expenses in a list, allows users to delete expenses, filter them by category, and automatically calculates the total expense.

The project stores all data in the browser using Local Storage, allowing expenses to remain available even after refreshing the page.

## Features

* Add a new expense
* Delete an existing expense
* Filter expenses by category
* Live total expense calculation
* Responsive user interface
* Data persistence using Local Storage

## Technologies Used

* React (Vite)
* JavaScript (ES6+)
* Tailwind CSS
* HTML5
* Local Storage API

## React Concepts Practiced

During this task, I practiced the following React concepts:

* Functional Components
* Props
* useState Hook
* useEffect Hook
* Controlled Forms
* Event Handling
* Conditional Rendering
* List Rendering using `map()`
* Array methods (`filter()` and `reduce()`)
* State Management
* Local Storage

## Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── ExpenseForm.jsx
│   ├── Filter.jsx
│   ├── ExpenseItem.jsx
│   ├── ExpenseList.jsx
│   └── Total.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

### Start the development server

```bash
npm run dev
```

## How the Application Works

1. The user enters an expense name, amount, and category.
2. The expense is added to the expense list.
3. Users can delete any expense from the list.
4. Users can filter expenses by category.
5. The total expense updates automatically whenever the list changes.
6. All expenses are saved in Local Storage for persistence.

## Learning Outcomes

By completing this internship task, I improved my understanding of:

* Building reusable React components
* Managing application state
* Passing data between components using props
* Handling forms with controlled components
* Rendering dynamic lists
* Using React Hooks effectively
* Persisting data with Local Storage
* Creating responsive user interfaces using Tailwind CSS

## Future Improvements

* Edit existing expenses
* Search expenses by name
* Add expense date
* Sort expenses by different fields
* Monthly expense reports
* Charts and analytics
* Dark mode
* Export data to CSV or PDF

## Author

**Atif Shehzad**

BS Computer Science Student
University of Haripur

---

**Internship Task 4:** This project was developed as part of my internship to strengthen my practical React development skills by building a complete expense tracking application using React and Tailwind CSS.
