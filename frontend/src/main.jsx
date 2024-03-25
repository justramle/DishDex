import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'   // for routing package
import StoreContextProvider from './context/StoreContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* add router support in app components */}
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
      
    
  </BrowserRouter>
    
  
)
