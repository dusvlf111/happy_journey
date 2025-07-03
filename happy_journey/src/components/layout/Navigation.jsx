// 네비게이션 컴포넌트 (src/components/layout/Navigation.jsx)
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * 주요 메뉴 네비게이션
 */
export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link 
            to="/dashboard" 
            className={isActive('/dashboard') ? 'active' : ''}
          >
            📊 대시보드
          </Link>
        </li>
        <li>
          <Link 
            to="/care-services" 
            className={isActive('/care-services') ? 'active' : ''}
          >
            🏥 케어 서비스
          </Link>
        </li>
        <li>
          <Link 
            to="/phone-service" 
            className={isActive('/phone-service') ? 'active' : ''}
          >
            📞 전화 서비스
          </Link>
        </li>
        <li>
          <Link 
            to="/profile" 
            className={isActive('/profile') ? 'active' : ''}
          >
            👤 내 정보
          </Link>
        </li>
        <li>
          <Link 
            to="/support/contact" 
            className={isActive('/support') ? 'active' : ''}
          >
            💬 고객지원
          </Link>
        </li>
      </ul>
    </nav>
  );
}