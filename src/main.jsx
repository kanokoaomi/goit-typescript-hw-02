// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './components/Context/ThemeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
)
