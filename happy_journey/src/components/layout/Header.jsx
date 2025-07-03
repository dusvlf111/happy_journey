// 헤더 컴포넌트 (src/components/layout/Header.jsx)
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSimpleAuth } from '../../hooks/useSimpleAuth';
import Button from '../common/Button';

/**
 * 상단 헤더 - 로고, 사용자 정보, 로그아웃
 */
export default function Header() {
  const { user, logout } = useSimpleAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/dashboard" className="header-brand">
          <div className="logo">
            <img src="/images/icons/logo500_500.png" alt="로고" width="32" height="32" style={{display:'block'}} />
          </div>
          <span className="title">행복한 여정</span>
        </Link>
        
        {user && (
          <div className="header-user">
            <div className="user-info">
              <span className="user-name">{user.name}님</span>
              <span className="user-role">
                {user.role === 'user' ? '사용자' : '보호자'}
              </span>
            </div>
            <Button 
              onClick={handleLogout}
              className="btn-logout"
            >
              로그아웃
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}