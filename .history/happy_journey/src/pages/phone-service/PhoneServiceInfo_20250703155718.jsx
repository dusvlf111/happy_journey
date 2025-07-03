// 전화 서비스 안내 페이지 (src/pages/phone-service/PhoneServiceInfo.jsx)
import React from 'react';
import Card from '../../components/common/Card';

/**
 * 전화 서비스 안내 및 소개
 */
export default function PhoneServiceInfo() {
  return (
    <Card>
      <h2 className="title mb-2">전화 서비스 안내</h2>
      <div className="mb-2">행복한 여정 전화 서비스는 정기적으로 안부 전화를 드리고, 건강 상태를 확인해드립니다.</div>
      <div className="mb-2">특이 증상 발견 시 보호자에게 즉시 알림이 전송됩니다.</div>
      <div>문의: 1588-0000</div>
    </Card>
  );
}
