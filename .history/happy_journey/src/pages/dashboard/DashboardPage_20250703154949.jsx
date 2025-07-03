// 대시보드 메인 페이지 (src/pages/dashboard/DashboardPage.jsx)
import React from 'react';
import { Link } from 'react-router-dom';
import HealthMonitoring from './HealthMonitoring';
import VoiceMessages from './VoiceMessages';
import Card from '../../components/common/Card';
import useAuth from '../../hooks/useAuth';

/**
 * 대시보드 메인 - 건강 모니터링, 음성편지, 알림 요약
 */
const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">안녕하세요, {user?.name}님!</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h2 className="font-semibold text-lg mb-2">건강 모니터링</h2>
          <HealthMonitoring />
          <Link to="/dashboard/health" className="text-blue-600 text-sm hover:underline">자세히 보기</Link>
        </Card>
        <Card>
          <h2 className="font-semibold text-lg mb-2">음성편지</h2>
          <VoiceMessages previewMode />
          <Link to="/dashboard/voice" className="text-blue-600 text-sm hover:underline">전체 보기</Link>
        </Card>
      </div>
      <Card className="mt-6">
        <h2 className="font-semibold text-lg mb-2">최근 알림</h2>
        <ul className="list-disc ml-6 text-sm text-gray-700">
          <li>🔵 안부 전화 완료되었습니다 (2024-06-01)</li>
          <li>🟡 경미한 증상이 발견되었습니다 (2024-05-31)</li>
          <li>💌 새로운 음성편지가 도착했습니다 (2024-05-30)</li>
        </ul>
        <Link to="/profile/notification" className="text-blue-600 text-sm hover:underline block mt-2">알림 설정</Link>
      </Card>
    </div>
  );
};

export default DashboardPage;
