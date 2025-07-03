// 전체 라우트 구성 (src/config/routes.js)
import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import DashboardPage from '../pages/dashboard/DashboardPage';
import HealthMonitoring from '../pages/dashboard/HealthMonitoring';
import VoiceMessages from '../pages/dashboard/VoiceMessages';
import CareServicesPage from '../pages/care-services/CareServicesPage';
import ServiceDetail from '../pages/care-services/ServiceDetail';
import PhoneServiceInfo from '../pages/phone-service/PhoneServiceInfo';
import CallHistory from '../pages/phone-service/CallHistory';
import Settings from '../pages/phone-service/Settings';
import ProfilePage from '../pages/profile/ProfilePage';
import FamilyMembers from '../pages/profile/FamilyMembers';
import NotificationSettings from '../pages/profile/NotificationSettings';
import ContactPage from '../pages/support/ContactPage';
import FAQPage from '../pages/support/FAQPage';
import HelpPage from '../pages/support/HelpPage';
import useAuth from '../hooks/useAuth';

// 인증 보호 라우트
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/auth/login" replace />;
  return children;
}

/**
 * 전체 라우트 배열 (React Router v6용)
 */
export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'auth/login', element: <LoginPage /> },
      { path: 'auth/register', element: <RegisterPage /> },
      { path: 'auth/forgot', element: <ForgotPasswordPage /> },
      {
        path: 'dashboard',
        element: <ProtectedRoute><DashboardPage /></ProtectedRoute>,
      },
      {
        path: 'dashboard/health',
        element: <ProtectedRoute><HealthMonitoring /></ProtectedRoute>,
      },
      {
        path: 'dashboard/voice',
        element: <ProtectedRoute><VoiceMessages /></ProtectedRoute>,
      },
      {
        path: 'care-services',
        element: <ProtectedRoute><CareServicesPage /></ProtectedRoute>,
      },
      {
        path: 'care-services/:id',
        element: <ProtectedRoute><ServiceDetail /></ProtectedRoute>,
      },
      {
        path: 'phone-service',
        element: <ProtectedRoute><PhoneServiceInfo /></ProtectedRoute>,
      },
      {
        path: 'phone-service/history',
        element: <ProtectedRoute><CallHistory /></ProtectedRoute>,
      },
      {
        path: 'phone-service/settings',
        element: <ProtectedRoute><Settings /></ProtectedRoute>,
      },
      {
        path: 'profile',
        element: <ProtectedRoute><ProfilePage /></ProtectedRoute>,
      },
      {
        path: 'profile/family',
        element: <ProtectedRoute><FamilyMembers /></ProtectedRoute>,
      },
      {
        path: 'profile/notification',
        element: <ProtectedRoute><NotificationSettings /></ProtectedRoute>,
      },
      {
        path: 'support/contact',
        element: <ContactPage />,
      },
      {
        path: 'support/faq',
        element: <FAQPage />,
      },
      {
        path: 'support/help',
        element: <HelpPage />,
      },
      { path: '*', element: <Navigate to="/dashboard" replace /> },
    ],
  },
];
