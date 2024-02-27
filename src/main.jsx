import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "tailwindcss/tailwind.css";
import Loader from "../src/components/3dLoader/Loader.jsx"
import Theme from './Theme.jsx'
import FollowMouse from './FollowMouse.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Loader/>
    <Theme/>
    {/* <FollowMouse/> */}
 
    <App />
  </React.StrictMode>,
)
