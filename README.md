# Image Gallery Web App

An interactive, responsive image gallery web application built using **React**, **Axios**, **Framer Motion**, and the **Unsplash API**. This app allows users to browse a collection of images, search for specific images, and view details in a modal popup.

---

## Features

- **Dynamic Image Gallery:** Automatically fetches and displays a grid of images.
- **Search Functionality:** Search for specific images using keywords.
- **Responsive Design:** Optimized for various screen sizes with a grid layout.
- **Modal View:** Click on any image to view it in a larger modal with details.
- **Smooth Animations:** Includes hover and modal animations powered by Framer Motion.

---

## Getting Started

Follow these steps to get the app running locally:

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/image-gallery.git
   cd image-gallery
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Unsplash API:**
   - Create an account on [Unsplash Developers](https://unsplash.com/developers) and generate an API access key.
   - Create a `.env` file in the root directory and add your API key:
     ```env
     REACT_APP_UNSPLASH_ACCESS_KEY=your_access_key_here
     ```

4. **Start the development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Available Scripts

### `npm start`
Runs the app in the development mode. The browser will reload if you make edits.

### `npm run build`
Builds the app for production in the `build` folder. The build is minified and optimized for the best performance.

### `npm test`
Launches the test runner in interactive watch mode.

---

## Deployment

This project is optimized for deployment using platforms like **Vercel**, **Netlify**, or any other static hosting service. To deploy with Vercel:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```
2. **Deploy:**
   ```bash
   vercel
   ```
   Follow the prompts to deploy your project.

---

## File Structure

```
image-gallery/
├── public/
├── src/
│   ├── components/
│   ├── App.css
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

---

## Technologies Used

- **React** for building the user interface.
- **Axios** for fetching data from the Unsplash API.
- **Framer Motion** for animations.
- **Unsplash API** for retrieving high-quality images.
- **CSS Grid** for a responsive layout.

---

## Screenshots

1. **Home Page:**
   Displays a grid of images with hover effects.

2. **Search Feature:**
   Allows searching for specific image collections.

3. **Modal View:**
   Shows larger image previews with detailed information.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgements

- [Unsplash API](https://unsplash.com/developers)
- [Framer Motion](https://www.framer.com/motion/)

---

### Author

Created by [Your Name](https://github.com/your-username). Feel free to reach out for any questions or contributions!

