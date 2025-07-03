// 고객지원 도움말 페이지 (src/pages/support/HelpPage.jsx)
import React from 'react';
import Card from '../../components/common/Card';

/**
 * 고객지원 도움말 페이지
 */
export default function HelpPage() {
  return (
    <Card>
      <h2 className="title mb-2">도움말</h2>
      <div className="mb-2">행복한 여정 서비스 이용 중 궁금한 점이 있으시면 FAQ 또는 고객 문의를 이용해 주세요.</div>
      <div>서비스 이용 가이드, 보안 정책 등은 추후 별도 안내 예정입니다.</div>
    </Card>
  );
}
