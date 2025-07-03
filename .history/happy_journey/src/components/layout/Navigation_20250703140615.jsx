// 네비게이션(사이드바) 컴포넌트 (src/components/layout/Navigation.jsx)
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * 주요 메뉴 네비게이션(사이드바)
 */
const Navigation = () => (
  <nav className="w-48 min-h-full bg-white shadow-md p-4 hidden md:block">
    <ul className="space-y-3">
      <li>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>
          대시보드
        </NavLink>
      </li>
      <li>
        <NavLink to="/care-services" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>
          케어 서비스
        </NavLink>
      </li>
      <li>
        <NavLink to="/phone-service" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>
          전화 서비스
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>
          내 정보
        </NavLink>
      </li>
      <li>
        <NavLink to="/support" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>
          고객지원
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
