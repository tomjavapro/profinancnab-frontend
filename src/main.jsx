import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Main é o arquivo principal do React, como se fosse o Application do Spring, ou o Main do projeto Java.
// Ele pega a página e preenche com os componentes do React.
// Como estamos usamdo uma SPA, então só temos uma única página.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
