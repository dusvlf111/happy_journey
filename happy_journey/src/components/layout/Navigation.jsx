// 네비게이션 컴포넌트 (src/components/layout/Navigation.jsx)
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 주요 메뉴 네비게이션
 */
export default function Navigation() {
  return (
    <>
      {/* 데스크탑용 상단 네비 */}
      <nav className="navigation desktop-nav">
        <ul className="nav-list">
          <li><Link to="/">대시보드</Link></li>
          <li><Link to="/care-services">케어 서비스</Link></li>
          <li><Link to="/phone-service">전화 서비스</Link></li>
          <li><Link to="/profile">내 정보</Link></li>
          <li><Link to="/support">고객지원</Link></li>
        </ul>
      </nav>
      {/* 모바일용 하단 네비 */}
      <nav className="mobile-bottom-nav">
        <ul>
          <li><Link to="/"><span role="img" aria-label="대시보드">🏠</span><br />대시보드</Link></li>
          <li><Link to="/care-services"><span role="img" aria-label="케어서비스">🏥</span><br />케어서비스</Link></li>
          <li><Link to="/phone-service"><span role="img" aria-label="전화">📞</span><br />전화</Link></li>
          <li><Link to="/profile"><span role="img" aria-label="내정보">👤</span><br />내정보</Link></li>
          <li><Link to="/support"><span role="img" aria-label="고객지원">💬</span><br />고객지원</Link></li>
        </ul>
      </nav>
    </>
  );
}