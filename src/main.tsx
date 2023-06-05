import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap"
import 'normalize.css'
import "./styles/global.css"
import Router from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
