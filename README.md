Based on the codebase analysis, I'll create a comprehensive README.md for your project. The application appears to be a React + TypeScript employee management system using Vite as the build tool.

```markdown
# Employee Management System

A React application for managing employee information with responsive design and search functionality.

## 🚀 Technologies

- React 19.x
- TypeScript
- Vite
- Material-UI
- JSON Server
- date-fns

## 📋 Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

## 🚀 Running the Application

The application requires two terminal windows/tabs to run:

1. Start the JSON Server (Mock API):
```bash
npm run json-server
# or
yarn json-server
```
This will start the mock API server on port 3030.

2. In a new terminal, start the development server:
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 🌟 Features

- Display employee list with details
- Search employees by name
- Responsive design with mobile support
- Employee information includes:
  - Profile picture
  - Name
  - Job position
  - Admission date
  - Phone number

## 📱 Responsive Design

The application includes two different layouts:
- Desktop view (> 900px): Table layout
- Mobile view (≤ 900px): Card layout with expandable details

## 🔧 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run preview` - Previews the production build
- `npm run json-server` - Starts the mock API server
- `npm run lint` - Runs ESLint for code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/       # Basic components
│   ├── molecules/   # Composite components
│   └── organisms/   # Complex components
├── services/        # API services
├── utils/          # Utility functions
├── interfaces/     # TypeScript interfaces
├── constants/      # Application constants
└── pages/         # Page components
```

## 🔍 Environment Variables

The application uses the following environment variables:
- `VITE_API_URL` - API base URL (defaults to http://localhost:3030)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.
```

This README.md is based on the following key files from your codebase:


```1:37:package.json
{
  "name": "be_talent_challange",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "json-server": "json-server --watch src/database/db.json --port 3030"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mui/icons-material": "^6.4.5",
    "@mui/material": "^6.4.5",
    "date-fns": "^4.1.0",
    "json-server": "^1.0.0-beta.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.2.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.19.0",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.19.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.18",
    "globals": "^15.14.0",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.22.0",
    "vite": "^6.1.0"
  }
}
```



```1:5:src/constants/environment.ts
export const environment = {
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3030',
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
};
```



```1:20:src/services/api/api.ts
import { EmployeeInterface } from "../../interfaces/employee.interface";

export const api = {

    getEmployees: async (): Promise<EmployeeInterface[]> => {
        try {
            const response = await fetch('http://localhost:3030/employees');
            if (!response.ok) {
                console.error('Erro ao buscar funcionários:', response.statusText);
                throw new Error('Erro ao buscar funcionários');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar funcionários:', error);
            throw error;
        }
    }

}
```
