import React from 'react'
import ReactDOM from "react-dom/client";
import { render } from 'react-dom'
import './styles/style.css'
import './styles/style.scss'
import App from '../src/components/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);