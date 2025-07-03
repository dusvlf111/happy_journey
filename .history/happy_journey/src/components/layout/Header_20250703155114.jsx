// 헤더 컴포넌트 (src/components/layout/Header.jsx)
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 상단 헤더 - 로고, 네비게이션 메뉴
 */
export default function Header() {
  return (
    <header className="header">
      <div className="logo" style={{display:'inline-block', verticalAlign:'middle'}}>
        <span role="img" aria-label="logo">⚡</span>
      </div>
      <span className="title" style={{verticalAlign:'middle', marginLeft:'0.5em'}}>행복한 여정</span>
    </header>
  );
}
