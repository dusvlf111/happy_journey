// 푸터 컴포넌트 (src/components/layout/Footer.jsx)
import React from 'react';

/**
 * 하단 푸터 - 저작권, 문의 정보 등
 */
const Footer = () => (
  <footer className="bg-gray-100 text-gray-600 text-sm py-4 mt-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <div>
        &copy; {new Date().getFullYear()} 행복한 여정. All rights reserved.
      </div>
      <div>
        문의: 임성빈 | dusvlf5950@naver.com
      </div>
    </div>
  </footer>
);

export default Footer;
