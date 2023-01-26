import React from 'react'
import ReactDOM from "react-dom/client";
import { render } from 'react-dom'
import App from './App'
import './styles/style.css'
import './styles/style.scss'

const n:number = 23
console.log('ANSWER')
console.log(n)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);