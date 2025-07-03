// App.jsx - 라우팅 시스템의 진입점
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './config/routes.jsx';
import './App.css';

function App() {
  const routing = useRoutes(routes);
  return routing;
}

export default App;