// 전화 서비스 안내 페이지 (src/pages/phone-service/PhoneServiceInfo.jsx)
import React from 'react';
import Card from '../../components/common/Card';

/**
 * 전화 서비스 안내 및 소개
 */
const PhoneServiceInfo = () => (
  <Card>
    <h1 className="text-2xl font-bold mb-4">AI 전화 건강 모니터링 서비스 안내</h1>
    <ul className="list-disc ml-6 mb-4 text-gray-700">
      <li>AI가 정기적으로 전화를 걸어 건강 상태를 확인합니다.</li>
      <li>이상 징후 발견 시 보호자와 의료진에게 즉시 알림을 보냅니다.</li>
      <li>보호자 음성편지 재생, 고령자 음성편지 녹음 기능 제공</li>
      <li>통화 기록 및 건강 모니터링 결과를 앱에서 확인할 수 있습니다.</li>
    </ul>
    <div className="text-sm text-gray-500">※ 본 서비스는 프로토타입으로, 실제 전화 연결은 지원하지 않습니다.</div>
  </Card>
);

export default PhoneServiceInfo;
