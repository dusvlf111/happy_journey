// 헤더 컴포넌트 (src/components/layout/Header.jsx)
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 상단 헤더 - 로고, 네비게이션 메뉴
 */
const Header = () => (
  <header className="bg-white shadow sticky top-0 z-40">
    <div className="container mx-auto flex items-center justify-between py-3 px-4">
      <Link to="/" className="flex items-center gap-2">
        <img src="/vite.svg" alt="행복한 여정 로고" className="h-8" />
        <span className="font-bold text-lg text-blue-700">행복한 여정</span>
      </Link>
      <nav className="space-x-4">
        <Link to="/dashboard" className="hover:text-blue-600">대시보드</Link>
        <Link to="/care-services" className="hover:text-blue-600">케어 서비스</Link>
        <Link to="/phone-service" className="hover:text-blue-600">전화 서비스</Link>
        <Link to="/profile" className="hover:text-blue-600">내 정보</Link>
        <Link to="/support" className="hover:text-blue-600">고객지원</Link>
      </nav>
    </div>
  </header>
);

export default Header;
