import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Body from './Body.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Body/>
  </StrictMode>,
)
