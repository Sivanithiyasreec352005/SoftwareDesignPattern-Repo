import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/login.css'
import './assets/css/style.css'
import './assets/css/home.css'
import './assets/css/footer.css'
import './assets/css/register.css'
import './assets/css/userlogin.css'


// import './assets/css/courseenroll.css'
import { ThemeProvider } from './components/theme-provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
