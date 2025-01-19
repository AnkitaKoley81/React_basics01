import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store.js'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import toast, { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<StrictMode>
   <App />
   <Toaster/>
    {/*  ab app ke andar koi bhi components store ko use kr sakta hai */}
  </StrictMode>,
  </Provider>,
  
)
