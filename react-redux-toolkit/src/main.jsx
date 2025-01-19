import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {store} from './Redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store ={store}>
      <App /> 
     {/* we want to accesible store over the entire application ,-->ar fole app component and baki component ra store ke access korte parbe */}
    </Provider> ,
  </StrictMode>,  
)


