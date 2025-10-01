import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import font from fontsource
import '@fontsource-variable/outfit';
import './index.css'
import App from './App.jsx'
import * as bootstrap from 'bootstrap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
