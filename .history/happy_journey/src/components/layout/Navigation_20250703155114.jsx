// 네비게이션 컴포넌트 (src/components/layout/Navigation.jsx)
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 주요 메뉴 네비게이션(사이드바)
 */
export default function Navigation() {
  return (
    <nav className="navigation">
      <ul style={{display:'flex', justifyContent:'center', gap:'2em', listStyle:'none', padding:0, margin:0}}>
        <li><Link to="/">대시보드</Link></li>
        <li><Link to="/care-services">케어 서비스</Link></li>
        <li><Link to="/phone-service">전화 서비스</Link></li>
        <li><Link to="/profile">내 정보</Link></li>
        <li><Link to="/support">고객지원</Link></li>
      </ul>
    </nav>
  );
}
