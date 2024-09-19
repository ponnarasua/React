import { StrictMode } from 'react';
import App from './App'
import './assets/style.css'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
<StrictMode>
  <App />

</StrictMode>
);