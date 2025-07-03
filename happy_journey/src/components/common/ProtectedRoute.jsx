// 보호된 라우트 컴포넌트 (src/components/common/ProtectedRoute.jsx)
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSimpleAuth } from '../../hooks/useSimpleAuth';
import Loading from './Loading';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useSimpleAuth();
  const location = useLocation();

  if (loading) {
    return <Loading message="인증 확인 중..." />;
  }

  if (!user) {
    // 로그인 페이지로 리다이렉트하면서 원래 가려던 페이지 정보 저장
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;