# React + Vite

# Grocery Store Frontend

This is a React-based frontend for a grocery store application. It uses Vite for bundling and development, and Axios for making HTTP requests.

## Project Structure

### Root Files

- **.gitignore**: Specifies files and directories that should be ignored by Git.
- **eslint.config.js**: Configuration file for ESLint.
- **index.html**: The main HTML file that includes the root div for the React app.
- **package.json**: Contains project metadata and dependencies.
- **README.md**: This file.
- **vite.config.js**: Configuration file for Vite.

### Source Directory

- **src/**: Contains all the source code for the application.

#### CSS Files

- **App.css**: Global styles for the application.
- **index.css**: Additional global styles.

#### JavaScript/JSX Files

- **App.jsx**: The main application component. Sets up routing and includes the header and footer.
- **Footer.jsx**: The footer component.
- **Header.jsx**: The header component, which includes navigation links.
- **LoginPage.jsx**: The login page component.
- **LogoutLink.jsx**: A component that handles user logout.
- **main.jsx**: The entry point for the React application. Renders the `App` component.
- **Modal.jsx**: A reusable modal component.
- **ProductsIndex.jsx**: A component that lists all products.
- **ProductsIndexPage.jsx**: A page component that uses `ProductsIndex`.
- **ProductsNew.jsx**: A component for creating a new product.
- **ProductsNewPage.jsx**: A page component that uses `ProductsNew`.
- **ProductsPage.jsx**: A page component that handles product-related actions like create, update, delete, and show.
- **ProductsShow.jsx**: A component that shows detailed information about a product.
- **SignupPage.jsx**: The signup page component.


### Configuration Files

- **vite.config.js**: Configuration file for Vite.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>

2. Navigate to the project directory:
   ```sh
   cd grocery-store-frontend-react
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Project

To start the development server, run:
```sh
npm run dev
```

To build the project for production, run:
```sh
npm run build
```

To preview the production build, run:
```sh
npm run preview
```


 
