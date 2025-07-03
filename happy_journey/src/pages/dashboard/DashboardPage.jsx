// 대시보드 메인 페이지 (src/pages/dashboard/DashboardPage.jsx)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import healthData from '../../services/mockData/healthData';
import { voiceMessages } from '../../services/mockData/voiceMessages';

/**
 * 대시보드 메인 페이지
 */
const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [userHealthData, setUserHealthData] = useState(null);
  const [userVoiceMessages, setUserVoiceMessages] = useState([]);

  useEffect(() => {
    // localStorage에서 현재 사용자 정보 가져오기
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUser(currentUser);
      
      // 사용자의 건강 데이터 가져오기
      const userHealth = healthData.find(h => h.userId === currentUser.id);
      setUserHealthData(userHealth);
      
      // 사용자의 음성편지 가져오기 (최근 1개만)
      setUserVoiceMessages(voiceMessages.slice(0, 1));
    }
  }, []);

  if (!user) {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-welcome">
        <h1>안녕하세요, {user.name}님!</h1>
        <p>오늘도 건강한 하루 보내세요. 행복한 여정이 함께합니다.</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-number">
            {userHealthData ? (userHealthData.riskLevel === '낮음' ? '98%' : userHealthData.riskLevel === '보통' ? '75%' : '45%') : '98%'}
          </div>
          <div className="stat-label">건강 지수</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">15</div>
          <div className="stat-label">이번 달 통화</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{userVoiceMessages.length}</div>
          <div className="stat-label">새 음성편지</div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <Card>
          <h2 className="font-semibold mb-4">건강 모니터링</h2>
          <div className="health-status">
            {userHealthData ? (
              <>
                <div className="mb-2"><strong>심박수:</strong> {userHealthData.heartRate} bpm</div>
                <div className="mb-2"><strong>혈압:</strong> {userHealthData.bloodPressure}</div>
                <div className="mb-2"><strong>혈당:</strong> {userHealthData.bloodSugar} mg/dL</div>
                <div><strong>위험도:</strong> <span className={`risk-badge risk-${userHealthData.riskLevel === '낮음' ? 'low' : userHealthData.riskLevel === '보통' ? 'medium' : 'high'}`}>{userHealthData.riskLevel}</span></div>
              </>
            ) : (
              <div className="text-gray">건강 데이터를 불러오는 중...</div>
            )}
          </div>
          <div className="mt-4">
            <Link to="/dashboard/health" className="btn btn-secondary">자세히 보기</Link>
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold mb-4">음성편지</h2>
          <div className="voice-messages">
            {userVoiceMessages.length > 0 ? (
              userVoiceMessages.map(msg => (
                <div key={msg.id} className="voice-message-card card">
                  <div className="font-bold mb-1">{msg.sender}</div>
                  <div className="mb-2">{msg.text}</div>
                  <div className="text-gray text-xs">{msg.date}</div>
                </div>
              ))
            ) : (
              <div className="text-gray">음성편지가 없습니다.</div>
            )}
          </div>
          <div className="mt-4">
            <Link to="/dashboard/voice" className="btn btn-secondary">전체 보기</Link>
          </div>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="font-semibold mb-4">최근 알림</h2>
        <div className="notification-list">
          <div className="notification notification-success">
            🔵 안부 전화 완료되었습니다 (2024-06-01)
          </div>
          <div className="notification notification-warning">
            🟡 경미한 증상이 발견되었습니다 (2024-05-31)
          </div>
          <div className="notification notification-info">
            💌 새로운 음성편지가 도착했습니다 (2024-05-30)
          </div>
        </div>
        <div className="mt-4">
          <Link to="/profile/notification" className="btn btn-secondary">알림 설정</Link>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;