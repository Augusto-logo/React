# Product Preview Card — UI Challenge

Landing page implementation of the Frontend Mentor [Product Preview Card](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Built to practice Tailwind CSS in a React + Vite environment.

---

## 🚀 Overview

A presentational product preview page implemented as a stateless React component. Demonstrates utility-first styling with Tailwind, static asset imports (images/SVG), and semantic markup for a simple responsive layout.

---

## ✨ Core Concepts

(Concepts ordered from most to least important/difficult for this project.)

- **Styling with Tailwind CSS** — utility-first classes for layout, spacing, typography, colors, and responsive alignment.
- **Static asset imports & bundler integration** — importing JPEG/SVG assets as modules and using them in JSX.
- **Semantic HTML & accessibility** — use of semantic elements (`<main>`, `<section>`, headings) and `alt` attributes for images.
- **Responsive layout & image handling** — layout and image sizing with utility classes (e.g., `object-contain`, responsive containers).
- **Functional components & JSX** — presentational functional component structure.
- **Stateless / Presentational component design** — component contains static UI without local state or side effects.
- **Button composition with icon** — combining inline SVG/PNG imports with button text.
- **Utility-first CSS patterns** — small, focused utility classes instead of large custom styles.

---

## 🧠 Key Takeaways


---

## 🏁 Implemented & Future Improvements

- **Implemented**
  - Tailwind-based responsive layout and typography.
  - Asset imports for desktop product image and cart icon.
  - Accessible `alt` text for images.

- **To-Do / Improvements**
  - Add `aria-label` to the "Add to Cart" button and keyboard focus styles.
  - Add mobile-specific layout (mobile-first `Index.tsx` or CSS breakpoints).
  - Use `<picture>`/`srcset` for responsive images or lazy-load heavy assets.
  - Extract repeated UI parts to small presentational components.
  - Add unit/visual tests and storybook examples.
  - Add a simple click handler and state management for the cart (if converting to interactive demo).

---

## 📂 File Structure

```
/pages/ui-challenges/productPreview/
├── Index.tsx
├── readme.md       // this file
└── assets/
    ├── image-product-desktop.jpg
    └── icon-cart.svg
```

---

## 💡 Usage Example

Import the page component in your router or mount it directly:

```tsx
import ProductPreview from '/pages/ui-challenges/productPreview/Index';

function App() {
  return <ProductPreview />;
}
```

---

## 📝 Notes & Implementation Details

- The component imports image assets as module imports (`import productPreviewDesktopImage from './assets/...';`) — this works with Vite/webpack and ensures files are bundled and hashed in production.
- Consider improving accessibility by adding `aria-hidden` for decorative images, or `aria-label`/`aria-pressed` for interactive controls.
- For production, optimize assets (resize/compress) and consider responsive image alternatives.

---

## 💬 Comments

- Imported and used fonts from Google Fonts.
- The Tailwind docs have all the explanations on how to use.
  1. It's possible to import all the Google fonts from the same URL.
  2. The texts on **URL** are the optional configurations from the import. So, if you remove the `ital`, it will remove the italic from the **Font**. Same as the weights `wght@`.
