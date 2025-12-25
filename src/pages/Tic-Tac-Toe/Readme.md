This project covers the **Tic-Tac-Toe** game from the official React documentation tutorial.
[Tutorial: Tic-Tac-Toe – React](https://react.dev/learn/tutorial-tic-tac-toe)

# Topics

## Core Concepts Involved
- Components and Props
- Managing State (useState)
- Lifting State Up
- Controlled Components

## Key Takeaways
- How to structure a game board using nested components.
- The importance of lifting state to a parent component to coordinate child components.
- Implementation of "Time Travel" features by storing state history.

## Notes

### Why Immutability is Important

There are two primary ways to change data: you can either mutate the original variable directly or create a copy of it and apply the changes to the new version. While often discussed in the context of Arrays, this approach is essential for all complex data structures (including Objects) in React.

**Advantages of using immutability (creating copies):**

1. **Maintaining Version History:** By keeping the original data intact, you can track every modification. For instance, if you delete an item from a list by mutating it directly, the original state is lost. However, if you create a copy and store it in a new array, you can preserve the history of changes (enabling features like "Time Travel").
2. **Preventing Unnecessary Re-renders:** Immutability allows React to perform "cheap" reference checks. If the reference to an object or array hasn't changed, React knows it doesn't need to re-render that component, significantly improving performance.