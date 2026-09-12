Dev Stack Builder

A responsive Dev Stack Builder website where users can explore
different development technologies and build their own technology stack.
Users can view technology details, add technologies to their stack,
remove individual technologies, or clear the entire stack.

🚀 Technologies Used

React

TypeScript

Tailwind CSS

DaisyUI

React Icons

React Toastify

JSON

Vite

✨ Features

1. Explore Technologies

Users can browse different frontend, backend, database, and other
development technologies with their icon, category, difficulty level,
rating, and description.

2. Build Your Own Stack

Users can add technologies to their stack. A technology cannot be added
twice, and added technologies are clearly shown as selected.

3. Manage Your Stack

Users can remove individual technologies or remove all selected
technologies at once. Toast notifications provide feedback for add and
remove actions.

⚛️ React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or
TypeScript. React uses JSX because it makes the UI easier to write and
understand.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
They are read-only.

State is data managed inside a component. When state changes, React
updates the UI.

3. What does the useState hook do, and where did you use it in this project?

useState is used to create and update state in a React component.

I used useState in the Technology component to store the selected
technologies:

const [selectedTech, setSelectedTech] = useState<TechTypes[]>([]);

When a technology is added or removed, selectedTech is updated and the
UI changes automatically.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to run side effects such as fetching data after a
component renders. It is commonly used to load JSON data.

In this project, I used React’s use() with a Promise to load the JSON
data instead of useEffect:

const technologies = use(TechFetchPromise);

So, useEffect was not required in my current implementation.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. A unique key helps
React understand which items were added, removed, or changed and update
the UI efficiently.

For example:

technologies.map((technology) => (
    <TechCard
        key={technology.id}
        technology={technology}
    />
))

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a
condition.

I used it in the stack section to show an empty-stack message when no
technology is selected. When technologies are selected, the selected
items are displayed instead.

Example:

{selectedTech.length === 0 ? (
    <p>Your stack is empty.</p>
) : (
    selectedTech.map((technology) => (
        // selected technology
    ))
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props.

For example, Technology passes technology, selectedTech, and
handleAddToStack to TechCard:

<TechCard
    technology={technology}
    handleAddToStack={handleAddToStack}
    selectedTech={selectedTech}
/>

A child can send something back to the parent by calling a function that
the parent passed through props.

In this project, TechCard calls:

handleAddToStack(technology);

This sends the selected technology back to the parent component, where
the stack state is updated.



📱 Responsive Design

The website is designed to work across mobile devices, tablets, laptops,
and desktop screens. Technology cards use a responsive grid, and the
stack section changes position based on screen size.

🛠️ Run Locally

npm install
npm run dev

Then open the local URL shown by Vite in your browser.

Built with React, TypeScript, and Tailwind CSS.
