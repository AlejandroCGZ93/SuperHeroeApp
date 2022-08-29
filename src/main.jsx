import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { SuperHeroApp } from './SuperHeroApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
       <SuperHeroApp />
    </Router>
  </React.StrictMode>
)
