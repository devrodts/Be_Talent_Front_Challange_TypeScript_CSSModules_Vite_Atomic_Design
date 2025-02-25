export const environment = {
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3030',
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
};