React Mini Blog App 📝

A mini blog application built with React to practice state management, routing, and dynamic content rendering. This project demonstrates core frontend concepts including useState, useEffect, React Router v6, and local storage integration.

Features ✨

Display all blog posts with title, content, category, and date.

Filter posts by category.

Dynamic routing for individual posts using useParams.

Persistent posts using localStorage.

Responsive and simple UI (built with basic CSS/Tailwind CSS).

Concepts Learned 💡

React State & Hooks: Managing posts with useState and side effects with useEffect.

React Router v6: Handling dynamic routes and navigation.

Dynamic Rendering: Using .map() to render lists of posts.

Installation ⚙️

Clone the repository:

git clone https://github.com/pr4gya-ai/React-Blog-App


Navigate to the project folder:

cd react-mini-blog


Install dependencies:

npm install


Start the development server:

npm start


Open the app in your browser at http://localhost:3000.

File Structure 📂
react-mini-blog/
├─ public/
├─ src/
│  ├─ components/        # Blog components (PostList, PostItem, Filters)
│  ├─ data/              # initialPosts.js, helper functions
│  ├─ App.jsx
│  └─ index.js
├─ package.json
└─ README.md

Usage 🖱️

Browse all posts on the main page.

Filter posts by category using the category buttons.

Click on a post to view details (using React Router dynamic routing).

Future Improvements 🚀

Add search functionality for posts.

Implement comments and likes for each post.

Add user authentication and admin panel for creating/editing posts.

✅ Summary:
This mini-project is perfect for beginners looking to practice React fundamentals including state management, routing, and working with dynamic data.

<img width="1897" height="849" alt="Screenshot 2025-10-04 141052" src="https://github.com/user-attachments/assets/a2bb5143-1ea9-4445-8bbf-a96290c00231" />


Local Storage: Save and retrieve posts for persistence.

Category Filtering: Extracting unique categories and filtering posts dynamically.
