# Dev Stack

## Description

Dev Stack is an interactive web application designed to help developers explore, evaluate, and assemble their ideal development stack by browsing curated technologies across frontend, backend, database, and tooling categories.

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS & DaisyUI
- React Icons
- React Toastify

## Features

1. **Interactive Technology Catalog:** Browse and evaluate various technologies with detailed cards displaying category, difficulty level, rating, and badges.
2. **Custom Stack Selection:** Add technologies to your personal stack with one click, accompanied by real-time visual status updates and toast notifications.
3. **Stack Management & Reset:** Manage added technologies in a dedicated sidebar with options to remove individual items or clear the entire stack at once.

## Answers

### What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that lets us write HTML-like markup inside a JavaScript file.

In React, JavaScript is in charge of the HTML, which lets rendering logic and markup live together in the same place — components. JSX lets us put markup into the rendering logic.

### What is the difference between props and state?

| Props                                               | State                                         |
| --------------------------------------------------- | --------------------------------------------- |
| Communication medium from parent to child component | Component memory                              |
| Immutable within the component                      | Updated via the setter function               |
| Controlled by the parent component                  | Controlled internally by the component itself |
| Component re-renders when parent passes new props   | Component re-renders when state is updated    |

### What does the useState hook do, and where did you use it in this project?

useState hook acts as a component's memory. It stores component states as variables in an array under the hood. When a state is updated via the setter function, it re-renders the component with the new state.

I used it in TechnologyCards component.

### What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect lets us specify side effects that are caused by rendering itself, rather than by a particular event.

React does not wait for server to response with data and then render. The useEffect callback, invoked by the component mounting, performs data fetching after mounting. As soon as the data is fetched, the state setter function inside the callback re-renders the component with the fetched data.

### Why does every item in a .map() list need a unique key prop?

A unique key lets React uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

### What is conditional rendering? Show one place you used it (example: the empty stack message).

Components will often need to display different things based on different conditions. In React, we can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

```tsx
{
  /* Conditionally rendering added technology cards */
}

{
  !!addedTechnologies.length && (
    <ul className="space-y-1 mb-12">
      {addedTechnologies.map((addedTechnology) => (
        <StackCard
          key={addedTechnology.id}
          addedTechnology={addedTechnology}
          handleRemoveClick={handleRemoveClick}
        />
      ))}
    </ul>
  );
}
```

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We pass data from a parent component to a child component through props.

A child component can send data back to the parent by calling parent's callback functions with its internal data.
