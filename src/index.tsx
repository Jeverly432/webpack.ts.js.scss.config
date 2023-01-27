import React from 'react'
import ReactDOM from "react-dom/client";
import './styles/style.scss'
import './styles/styleupdate.scss'
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);