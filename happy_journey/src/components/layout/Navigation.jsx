// 네비게이션 컴포넌트 (src/components/layout/Navigation.jsx)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * 주요 메뉴 네비게이션
 */
export default function Navigation() {
  const [supportOpen, setSupportOpen] = useState(false);
  const [mobileSupportOpen, setMobileSupportOpen] = useState(false);
  // 심플한 SVG 아이콘 정의
  const icons = {
    home: <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 12L12 4l9 8"/><path d="M9 21V9h6v12"/></svg>,
    care: <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>,
    phone: <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.72 5.06a2 2 0 0 1-1.1 2.18l-2.2 1.1a16 16 0 0 0 6.29 6.29l1.1-2.2a2 2 0 0 1 2.18-1.1l5.06.72A2 2 0 0 1 22 16.92z"/></svg>,
    user: <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/></svg>,
    support: (
      // 말풍선(채팅) 스타일 아이콘
      <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <circle cx="9" cy="10" r="1"/>
        <circle cx="15" cy="10" r="1"/>
      </svg>
    ),
  };
  return (
    <>
      {/* 데스크탑용 상단 네비 */}
      <nav className="navigation desktop-nav">
        <ul className="nav-list">
          <li><Link to="/">대시보드</Link></li>
          <li><Link to="/care-services">케어 서비스</Link></li>
          <li><Link to="/phone-service">전화 서비스</Link></li>
          <li><Link to="/profile">내 정보</Link></li>
          <li
            className="dropdown"
            onMouseEnter={() => setSupportOpen(true)}
            onMouseLeave={() => setSupportOpen(false)}
          >
            <span className="dropdown-title">고객지원 ▾</span>
            {supportOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/support/contact">문의</Link></li>
                <li><Link to="/support/faq">FAQ</Link></li>
                <li><Link to="/support/help">도움말</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      {/* 모바일 하단 네비게이션: 검은색 아이콘+작은 텍스트 */}
      <nav className="mobile-bottom-nav mobile-bottom-iconbar">
        <ul>
          <li><Link to="/">{icons.home}<div className="nav-label">홈</div></Link></li>
          <li><Link to="/care-services">{icons.care}<div className="nav-label">케어</div></Link></li>
          <li><Link to="/phone-service">{icons.phone}<div className="nav-label">전화</div></Link></li>
          <li><Link to="/profile">{icons.user}<div className="nav-label">내정보</div></Link></li>
          <li
            className={`dropdown${mobileSupportOpen ? ' open' : ''}`}
            onClick={() => setMobileSupportOpen((v) => !v)}
            style={{ position: 'relative' }}
          >
            <span className="nav-icon">{icons.support}</span>
            <div className="nav-label">고객지원</div>
            {mobileSupportOpen && (
              <ul className="dropdown-menu mobile-dropup">
                <li><Link to="/support/contact">문의</Link></li>
                <li><Link to="/support/faq">FAQ</Link></li>
                <li><Link to="/support/help">도움말</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}