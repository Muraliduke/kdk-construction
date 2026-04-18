import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/variables.css'
import './styles/globals.css'
import App from './App.tsx'

// const urlParams = new URLSearchParams(window.location.search);
// const version = urlParams.get('q');

// const App = version === 'v2' ? AppV2 : AppV1;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
