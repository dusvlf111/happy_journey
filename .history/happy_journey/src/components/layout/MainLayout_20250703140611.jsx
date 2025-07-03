// 메인 레이아웃 컴포넌트 (src/components/layout/MainLayout.jsx)
import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * 전체 페이지 레이아웃 (헤더, 본문, 푸터)
 * @param {React.ReactNode} children - 본문 내용
 */
const MainLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex-1 container mx-auto px-4 py-6">
      {children}
    </main>
    <Footer />
  </div>
);

export default MainLayout;
