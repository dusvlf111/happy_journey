// 고객지원 도움말 페이지 (src/pages/support/HelpPage.jsx)
import React from 'react';
import Card from '../../components/common/Card';

/**
 * 고객지원 도움말 페이지
 */
const HelpPage = () => (
  <Card>
    <h1 className="text-2xl font-bold mb-4">도움말</h1>
    <ul className="list-disc ml-6 text-gray-700 space-y-2">
      <li>로그인 후 대시보드에서 건강 상태와 음성편지를 확인할 수 있습니다.</li>
      <li>케어 서비스 메뉴에서 요양원/호스피스 정보를 비교하고 예약할 수 있습니다.</li>
      <li>전화 서비스 메뉴에서 통화 기록과 알림 설정을 관리할 수 있습니다.</li>
      <li>내 정보/가족/알림 설정은 프로필 메뉴에서 확인하세요.</li>
      <li>문의사항은 고객지원 메뉴를 이용해 주세요.</li>
    </ul>
  </Card>
);

export default HelpPage;
