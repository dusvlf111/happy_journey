// 전화 서비스 설정 페이지 (src/pages/phone-service/Settings.jsx)
import React from 'react';
import Card from '../../components/common/Card';

export default function Settings() {
  return (
    <Card>
      <h2 className="title mb-2">전화 서비스 설정</h2>
      <div className="mb-2">수신 시간: 오전 10시</div>
      <div className="mb-2">수신 방법: 자동응답</div>
      <div>상태: 정상</div>
    </Card>
  );
}
