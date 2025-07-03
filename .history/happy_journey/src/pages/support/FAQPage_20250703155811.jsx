// FAQ 페이지 (src/pages/support/FAQPage.jsx)
import React from 'react';
import Card from '../../components/common/Card';

const faqs = [
  { q: '서비스 이용 요금이 있나요?', a: '행복한 여정의 기본 서비스는 무료로 제공됩니다.' },
  { q: '전화 서비스는 어떻게 신청하나요?', a: '회원가입 후 내 정보에서 전화 서비스 신청이 가능합니다.' },
  { q: '가족도 알림을 받을 수 있나요?', a: '가족 등록 시 보호자도 알림을 받을 수 있습니다.' },
];

export default function FAQPage() {
  return (
    <div>
      <h1 className="title mb-4">자주 묻는 질문</h1>
      {faqs.map((item, idx) => (
        <Card key={idx} className="mb-2">
          <div className="mb-2"><b>Q.</b> {item.q}</div>
          <div><b>A.</b> {item.a}</div>
        </Card>
      ))}
    </div>
  );
}
