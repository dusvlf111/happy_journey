// 메인 레이아웃 컴포넌트 (src/components/layout/MainLayout.jsx)
import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

/**
 * 전체 페이지 레이아웃 (헤더, 본문, 푸터)
 * @param {React.ReactNode} children - 본문 내용
 */
const MainLayout = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <Navigation />
    <main className="main">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;
