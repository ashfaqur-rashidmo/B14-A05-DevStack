# 🚀 Dev Stack Builder

A responsive **Dev Stack Builder** web application built with React and TypeScript. It allows users to explore different development technologies and create their own personalized technology stack.

Users can browse technologies, view their details, add technologies to their stack, remove individual technologies, or clear the entire stack.

---



---

## ✨ Features

### 1. 🔍 Explore Technologies

Users can browse different development technologies such as:

- Frontend
- Backend
- Database
- Programming Language
- Styling
- DevOps
- Tools

Each technology card displays:

- Technology icon
- Technology name
- Category
- Description
- Difficulty level
- Rating
- Badge

---

### 2. 🧩 Build Your Own Stack

Users can add technologies to their personal development stack.

The application prevents duplicate technologies from being added.

Once a technology is added, it is clearly indicated as **Selected**.

---

### 3. 🛠️ Manage Your Stack

Users can manage their selected technologies by:

- Adding technologies
- Removing individual technologies
- Clearing the entire stack
- Viewing the total number of selected technologies

---

### 4. 🔔 Toast Notifications

Toast notifications provide immediate feedback when users:

- Add a technology
- Remove a technology
- Clear their stack

---

### 5. 📱 Responsive Design

The application is fully responsive and works across:

- 📱 Mobile devices
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

Technology cards use a responsive grid layout, while the stack section adapts to different screen sizes.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Styling and responsive design |
| DaisyUI | UI components |
| React Icons | Technology and interface icons |
| React Toastify | Toast notifications |
| JSON | Technology data |
| Vite | Development and build tool |

---

## ⚛️ React Concepts Used

This project demonstrates several important React concepts:

- Components
- Props
- State
- `useState`
- `use()`
- Promises
- Conditional Rendering
- List Rendering
- `map()`
- Event Handling
- Lifting State Up
- Callback Functions
- Component Composition

---


🧠 React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

React uses JSX because it makes UI code easier to write, read, and understand.

Example:

const App = () => {
  return <h1>Hello React</h1>;
};
2. What is the difference between props and state?

Props are data passed from a parent component to a child component. Props are read-only and should not be modified by the child.

State is data managed inside a React component. When state changes, React re-renders the component and updates the UI.

Example
Props
Parent
  ↓
Child

State
Component
  ↓
UI updates when state changes

In this project, the selected technologies are stored in state.

3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and update state in a React component.

I used useState to store the technologies selected by the user:

const [selectedTech, setSelectedTech] =
  useState<TechTypes[]>([]);

When a technology is added or removed, selectedTech is updated and React automatically re-renders the UI.

For example:

setSelectedTech((prevTech) => [
  ...prevTech,
  technology
]);
4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is commonly used to perform side effects in React, such as:

Fetching data
Updating the document title
Subscribing to events
Working with external APIs

However, I did not need useEffect in this project to load the JSON data.

Instead, I used React's use() API with a Promise:

const technologies = use(TechFetchPromise);

This allowed the component to read the resolved Promise directly.

Therefore, useEffect was not required for my current implementation.

5. Why does every item in a .map() list need a unique key prop?

React uses the key prop to uniquely identify items in a list.

It helps React determine which items have:

Changed
Been added
Been removed

This allows React to update the UI efficiently.

Example:

technologies.map((technology) => (
  <TechCard
    key={technology.id}
    technology={technology}
  />
))

The id is used because it uniquely identifies each technology.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

I used conditional rendering in the stack section.

When no technology is selected, an empty-stack message is displayed:

{selectedTech.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selectedTech.map((technology) => (
    <SelectedTechCard
      key={technology.id}
      technology={technology}
    />
  ))
)}

So:

selectedTech.length === 0
        ↓
   Stack is empty

Otherwise:

selectedTech.length > 0
        ↓
Show selected technologies
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.

For example, the parent can pass:

<TechCard
  technology={technology}
  selectedTech={selectedTech}
  handleAddToStack={handleAddToStack}
/>

Here, technology, selectedTech, and handleAddToStack are passed as props.

The child component can communicate back to the parent by calling a function received through props.
