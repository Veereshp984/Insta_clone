import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx';
import "./features/post/style/feed.scss";

createRoot(document.getElementById('root')).render(
   <App />
)
