import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
createRoot(document.getElementById('root')).render(
  <>
  <Header />
  <Form />
  </>
)
