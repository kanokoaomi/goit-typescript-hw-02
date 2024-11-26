import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeContextProvider } from './components/Context/ThemeContextProvider.jsx'

// createRoot(document.getElementById('root') as HTMLElement).render(
//   <ThemeContextProvider>
//     <App />
//   </ThemeContextProvider>,
// )


createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);