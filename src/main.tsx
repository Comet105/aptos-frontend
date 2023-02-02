import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


declare global {
  interface Window { aptos: any; }
}

window.addEventListener('load', () => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );  
});
