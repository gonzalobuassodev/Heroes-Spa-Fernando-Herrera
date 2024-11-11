# 07 Heroes SPA

## Instructions

yarn add react-router-dom@6

# Configure Tailwind

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Add the paths to all of your template files in your ``tailwind.config.js`` file.

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

Add the @tailwind directives for each of Tailwind’s layers to your ``./src/index.css`` file.

@tailwind base;
@tailwind components;
@tailwind utilities;



