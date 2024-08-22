import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useAuth } from './hooks/useAuth';

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login?sign-up=true" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;