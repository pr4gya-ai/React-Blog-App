
export const initialPosts = [
  {
    id: 1,
    title: "Understanding React Router v6",
    content: "React Router v6 introduced significant changes, including the 'Routes' and 'Route' elements, and the 'useNavigate' hook. This makes routing cleaner and more functional. Dynamic routing is managed with ':param' syntax within the 'path' attribute.",
    category: "React",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS for Modern UIs",
    content: "Tailwind CSS is a utility-first framework that allows for rapid styling without writing custom CSS. Its responsive utility classes (like 'md:', 'lg:') make it ideal for modern, mobile-first designs. The key is to think in terms of small, composable utility classes.",
    category: "Tech",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: "JavaScript ES2023 Features",
    content: "The latest updates to JavaScript bring powerful new array methods like 'toSorted()' and 'toReversed()', which return new arrays instead of mutating the original. This aligns with functional programming principles and makes state management safer.",
    category: "JavaScript",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox",
    content: "Both CSS Grid and Flexbox are powerful layout systems. Flexbox is ideal for one-dimensional layouts, while Grid is designed for two-dimensional layouts. Many modern UIs use both together.",
    category: "CSS",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 5,
    title: "Building Accessible Web Apps",
    content: "Accessibility (a11y) ensures your app can be used by everyone. Use semantic HTML, ARIA roles, keyboard navigation, and color contrast testing for best practices.",
    category: "UI/UX",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 6,
    title: "Why TypeScript for Frontend?",
    content: "TypeScript adds static typing to JavaScript, reducing runtime errors. It integrates well with React, improving code maintainability and developer experience.",
    category: "TypeScript",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 7,
    title: "Optimizing React Performance",
    content: "Use React.memo, lazy loading, code splitting, and the useCallback/useMemo hooks to reduce unnecessary re-renders and improve performance in large apps.",
    category: "React",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 8,
    title: "Git and GitHub Essentials",
    content: "Version control is critical for frontend developers. Learn Git basics like commit, branch, merge, and how to use GitHub for pull requests and collaboration.",
    category: "Tools",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 9,
    title: "State Management in React",
    content: "For simple apps, useState and useContext are enough. For larger apps, Redux Toolkit, Zustand, or Recoil help manage complex state efficiently.",
    category: "React",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 10,
    title: "Responsive Design Best Practices",
    content: "A responsive design ensures your app looks great on all devices. Use relative units (%, em, rem), CSS media queries, and mobile-first development.",
    category: "CSS",
    date: new Date().toLocaleDateString(),
  }
];


const STORAGE_KEY = 'blogPosts';

export const getStoredPosts = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Error parsing stored posts:", e);
      return initialPosts;
    }
  }
  return initialPosts;
};

export const savePosts = (posts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

export const getUniqueCategories = (posts) => {
  const categories = posts.map(post => post.category);
  return Array.from(new Set(categories));
};