import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import BG from './assets/BG_rostro_vital_2.png'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <img src={BG} alt='bg' id='bg'/>
  </React.StrictMode>
)
