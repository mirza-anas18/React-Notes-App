# THOUGHT.EXE 💭
### An external hard drive for your mind.

THOUGHT.EXE is a simple Notes App I built as my first small project while learning React.

This project was about more than just building a notes app. I wanted to move beyond watching tutorials and start understanding how React actually works by writing code, experimenting, and connecting the concepts together.

It was my first step toward turning what I was learning into something functional.

## ✨ Features

- Create notes with a title and content
- Display saved notes dynamically
- Automatically update the UI when notes are added
- Persist notes using browser `localStorage`
- Restore notes after refreshing the page
- Basic form validation to prevent empty submissions

## 🛠️ Tech Stack

- **React** — Building the user interface
- **JavaScript** — Application logic and event handling
- **HTML & JSX** — Structuring the UI
- **CSS** — Styling the application
- **localStorage** — Persisting notes in the browser

## 🧠 What I Learned

Building THOUGHT.EXE helped me understand the fundamentals of React through practical implementation.

- **Components and JSX:** Structuring a React application and rendering UI elements.
- **Props:** Understanding how components can receive data.
- **State with `useState`:** Managing input values and application data.
- **Event handling:** Handling user input and form submissions.
- **Controlled components:** Connecting form inputs to React state.
- **Rendering lists with `.map()`:** Displaying notes dynamically from an array.
- **React keys:** Providing unique identifiers when rendering lists.
- **`useEffect`:** Running side effects when state changes.
- **Browser storage:** Using `JSON.stringify()` and `JSON.parse()` with `localStorage` to save and restore notes.
- **UI updates:** Understanding how state changes trigger React to update the rendered interface.

## ⚙️ How It Works

1. The user enters a note title and its content.
2. React state tracks the input values.
3. Submitting the form creates a new note object.
4. The new note is added to the notes array.
5. React renders the updated list of notes.
6. `useEffect` saves the updated notes to `localStorage`.
7. When the app is opened again, previously saved notes are restored from browser storage.

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/mirza-anas18/React-Notes-App.git
```

Navigate into the project directory:

```bash
cd React-Notes-App
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 📌 Limitations

This is an early learning project, so it has a deliberately simple feature set.

- Notes are stored locally in the browser.
- Notes do not sync across devices.
- There is no backend, authentication, or cloud database.
- Editing and deleting notes are not currently implemented.

## 🌱 What's Next?

This project marks the beginning of my hands-on journey with React. My next goal is to apply these fundamentals to larger, more realistic projects, improve my UI/UX skills, and learn additional concepts as new requirements arise.

## 💭 A Note to My Future Self

Remember where you started.

This was the small project you built while learning React fundamentals. The goal wasn't to create the most advanced application or the most impressive UI. It was to understand the concepts, connect the pieces, and write code that actually works.

You learned about state, events, rendering, effects, and browser storage by building something yourself instead of just watching someone else do it.

Keep building. Keep experimenting. Keep asking why the code works.

**This is just the beginning.**

---

*THOUGHT.EXE — An external hard drive for your mind.*
