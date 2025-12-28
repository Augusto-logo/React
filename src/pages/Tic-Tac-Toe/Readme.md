# Tic-Tac-Toe

This project covers the **Tic-Tac-Toe** game from the official React tutorial.
[Tutorial: Tic-Tac-Toe – React](https://react.dev/learn/tutorial-tic-tac-toe)

---

## 🚀 Overview

A small Tic-Tac-Toe game implemented in React + TypeScript, demonstrating component composition, state management, and simple game logic (winner detection, move history).

---

## ✨ Core Concepts

_Concepts are ordered by importance/difficulty for this specific project._

- **Lifting State Up**: Shared state (`history`, `currentMove`) is managed by the top-level `Index` component and passed down to the `Board`, enabling synchronization.
- **Immutability**: Instead of mutating the `squares` array, a new copy is created for each move (`.slice()`). This is crucial for preserving move history and enabling features like "time travel".
- **State Management (`useState`)**: The `useState` hook is used to manage the component's state, such as the game history, the current move number, and the board status.
- **Dynamic UI Generation**: The `Board` component uses nested loops (or `.map()`) to dynamically render the squares, avoiding hardcoded JSX and making the code more maintainable.
- **Component Composition**: The UI is built by composing smaller, reusable components (`Index` -> `Board` -> `Square`).
- **Derived State**: Some state is calculated on-the-fly from other state variables (e.g., `xIsNext` is derived from `currentMove`), avoiding state duplication and ensuring consistency.
- **Conditional Rendering**: The UI changes based on the game's state, such as displaying the winner, the next player, or highlighting winning squares.
- **List Rendering & Keys**: The `history` array is mapped to a list of buttons, with a unique `key` for each move to help React efficiently update the list.

---

## 🧠 Key Takeaways

- Lifting state to the nearest common ancestor is essential for keeping components in sync.
- Immutability simplifies complex features like undo/redo and can improve performance by preventing unnecessary re-renders.
- Separating pure calculation logic from components makes the code easier to test, reason about, and reuse.
- Dynamically rendering UI from data (arrays, objects) is a core React pattern that leads to cleaner and more scalable code.

---

## 🏁 Implemented & Future Challenges

- **Done**: For the current move, show “You are at move #…” instead of a button.
- **Done**: Rewrite `Board` to use two loops to make the squares instead of hardcoding them.
- **To-Do**: Add a toggle button that lets you sort the moves in either ascending or descending order.
- **To-Do**: When someone wins, highlight the three squares that caused the win.
- **To-Do**: When no one wins, display a message about the result being a draw.

---

## 📂 File Structure

```
/pages/Tic-Tac-Toe/
├── Index.tsx        // Main component, manages history and current move.
├── Readme.md        // This file.
└── Components/
    ├── Board.tsx    // Renders the 3x3 board, handles clicks, and calculates the winner.
    └── Square.tsx   // Renders a single clickable square.
```
