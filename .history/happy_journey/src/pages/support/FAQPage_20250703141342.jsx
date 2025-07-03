// FAQ 페이지 (src/pages/support/FAQPage.jsx)
import React from 'react';
import Card from '../../components/common/Card';

/**
 * 자주 묻는 질문(FAQ) 페이지
 */
const FAQPage = () => (
  <Card>
    <h1 className="text-2xl font-bold mb-4">자주 묻는 질문</h1>
    <ul className="space-y-3">
      <li>
        <span className="font-semibold">Q. 실제로 전화가 오나요?</span>
        <div className="text-gray-700">A. 본 프로토타입에서는 실제 전화 연결은 지원하지 않습니다.</div>
      </li>
      <li>
        <span className="font-semibold">Q. 예약하면 바로 확정되나요?</span>
        <div className="text-gray-700">A. 예약 후 담당자가 별도 연락을 드립니다.</div>
      </li>
      <li>
        <span className="font-semibold">Q. 개인정보는 안전하게 관리되나요?</span>
        <div className="text-gray-700">A. 모든 데이터는 시연용 목데이터로만 사용됩니다.</div>
      </li>
    </ul>
  </Card>
);

export default FAQPage;
