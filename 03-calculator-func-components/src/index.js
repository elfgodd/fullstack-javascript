import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { default as App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className='app-container'>
      <App />
    </div>
  </React.StrictMode>
)
