import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { routes } from './config/routes.jsx'
import './index.css'

// 라우트 적용 컴포넌트
function AppRoutes() {
  return useRoutes(routes)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
