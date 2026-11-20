# 🧱 DevStack — Ideal Development Stack Builder

A modern, responsive web application built with **React**, **TypeScript**, **Tailwind CSS**, and **DaisyUI** that allows developers to explore and compare modern frontend, backend, database, and devops technologies side-by-side, and curate their custom development stack.

---

## 🚀 Live Demo & Links
- **Live Site:** [https://devstack-builder.web.app](https://devstack-builder.web.app) *(Replace with your deployment link)*
- **GitHub Repository:** [https://github.com/shihab242-15-400-hash/B14-A05-DevStack](https://github.com/shihab242-15-400-hash/B14-A05-DevStack)

---

## 🛠️ Technologies Used
- **React 19** — Frontend UI library for component-based architecture
- **TypeScript** — Static type safety and structured interfaces
- **Tailwind CSS v4 & DaisyUI v5** — Utility-first styling with modern components
- **Vite** — Next-generation fast frontend tooling and dev server
- **React-Toastify** — Interactive notifications for stack actions
- **React Icons** — Clean, scalable vector icons
- **JSON Data** — Structured technology catalog loaded dynamically

---

## ✨ Key Features

1. **Interactive Stack Builder (Sidebar & Live Sync)**
   - Browse curated technologies and add them to your personalized "Your Stack" sidebar with a single click.
   - Dynamic counter updates instantly (e.g., *"2 Technology Selected"*).
   - Once a technology is selected, its card button disables and displays *"✓ Added to Stack"*.
   - Duplicate prevention stops the same technology from being added twice and provides a warning alert.

2. **One-Click Item Removal & Reset**
   - Remove individual technologies from the stack using the intuitive remove (`✕`) button on any item card.
   - Instantly restore that technology's card button back to *"Add to Stack"*.
   - Use the *"Remove All"* button to clear the entire stack at once with instant visual and toast feedback.

3. **Fully Responsive Design with Mobile Navigation**
   - Desktop: Sticky top navbar, 3-column technology grid, and sticky right-hand sidebar.
   - Mobile: 3-part navbar featuring a hamburger menu on the left, brand logo in the center, and action buttons on the right.
   - Seamlessly toggleable mobile drawer menu with smooth transition effects.

4. **Unified Brand Gradient System**
   - Brand name, hero highlights, and primary call-to-action buttons share a single centralized CSS gradient (`orange → pink → violet`), making total theme customization possible in one place.

---

## 💻 How to Run the Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shihab242-15-400-hash/B14-A05-DevStack.git
   cd B14-A05-DevStack
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the application.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX stands for JavaScript XML. It is a syntax extension that lets developers write HTML-like markup directly inside JavaScript or TypeScript code. It makes building UI components much more intuitive and readable because the visual structure and the component logic live together in the same file. Under the hood, JSX gets transformed into standard React function calls (`React.createElement` / `jsx`).

### 2. What is the difference between props and state?
**Answer:**  
- **Props (Properties):** Data passed down from a parent component to a child component. Props are read-only (immutable by the child) and allow components to be dynamic and reusable.
- **State:** Internal data managed and controlled inside the component itself using hooks like `useState`. Unlike props, state is mutable via its updater function, and when state changes, the component re-renders to reflect the new data.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
The `useState` hook allows functional components to store, track, and update dynamic data across renders. It returns an array with two elements: the current state value and a setter function to update it.  
In this project, `useState` was used in:
- `App.tsx`: to store the list of technologies (`technologies`) and track the loading status (`loading`).
- `Technologies.tsx`: to manage the user's selected technologies (`selectedTechnologies`).
- `Nav.tsx`: to track whether the mobile hamburger navigation menu is open or closed (`mobileMenuOpen`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
`useEffect` lets components perform side effects, such as fetching data from an API, subscribing to external events, or updating document titles.  
We needed `useEffect` in `App.tsx` because fetching external or local JSON data (`/technologies.json`) is an asynchronous operation. Running the fetch inside `useEffect` with an empty dependency array (`[]`) ensures the data is fetched only once when the component mounts, preventing infinite render loops and letting us update state and disable the loading spinner once the data arrives.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
React's virtual DOM reconciliation algorithm uses the `key` prop to identify which items have been added, updated, or removed in a list. When the list changes (such as removing an item from the stack), unique keys allow React to re-render only the modified item instead of re-rendering the entire list, preserving performance and state consistency.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer:**  
Conditional rendering is the technique of rendering different UI elements or components based on specific conditions or state values, using JavaScript operators like ternary (`? :`), logical AND (`&&`), or `if` statements.  
In this project, conditional rendering was used in `YourStack.tsx`:
```tsx
{!hasSelected ? (
  <div className="border border-dashed border-sky-200/90 rounded-2xl py-8 px-4 flex items-center justify-center text-center my-2 bg-sky-50/10">
    <p className="text-slate-400 text-sm font-medium">Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-3">
    {selectedTechnologies.map((technology) => (
      <YourStackCard key={technology.id} technology={technology} onRemoveFromStack={onRemoveFromStack} />
    ))}
    <button onClick={onRemoveAll}>Remove All</button>
  </div>
)}
```
When `hasSelected` is `false`, the dashed box with *"Your stack is empty."* is shown. When items exist, the card list and the *"Remove All"* button are rendered instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child:** Data is passed down directly via **props** (e.g., `<AvailableTechnologies technologies={technologies} />`).
- **Child to Parent:** The parent passes a **callback function** as a prop to the child (e.g., `onAddToStack={handleAddToStack}`). When an event occurs in the child (like clicking the "Add to Stack" button), the child invokes that callback function with relevant data (e.g., `onAddToStack(technology)`), passing the information back up to the parent where the state is updated.
