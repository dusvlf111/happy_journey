// 건강 모니터링 페이지 (src/pages/dashboard/HealthMonitoring.jsx)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import healthData from '../../services/mockData/healthData';
import { callHistory } from '../../services/mockData/voiceMessages';

/**
 * 건강 모니터링 상세 페이지 - 월간 캘린더 및 건강 분석
 */
const HealthMonitoring = () => {
  const [user, setUser] = useState(null);
  const [userHealthData, setUserHealthData] = useState([]);
  const [userCallHistory, setUserCallHistory] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    // localStorage에서 현재 사용자 정보 가져오기
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUser(currentUser);
      
      // 사용자의 모든 건강 데이터 가져오기
      const userHealth = healthData.filter(h => h.userId === currentUser.id);
      setUserHealthData(userHealth);
      
      // 사용자의 통화 기록 가져오기
      const userCalls = callHistory.filter(call => call.userId === currentUser.id);
      setUserCallHistory(userCalls);
    }
  }, []);

  // 달력 생성 함수
  const generateCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const calendar = [];
    for (let week = 0; week < 6; week++) {
      const weekDays = [];
      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + (week * 7) + day);
        
        if (currentDate > lastDay && week > 3) break;
        
        // 해당 날짜의 통화 기록 찾기
        const dateStr = currentDate.toISOString().slice(0, 10);
        const dayCall = userCallHistory.find(call => call.date === dateStr);
        const dayHealth = userHealthData.find(health => health.date === dateStr);
        
        weekDays.push({
          date: currentDate,
          isCurrentMonth: currentDate.getMonth() === month,
          call: dayCall,
          health: dayHealth
        });
      }
      if (weekDays.length > 0) calendar.push(weekDays);
    }
    return calendar;
  };

  // 날짜별 상태 아이콘 반환
  const getDateStatus = (dayData) => {
    if (!dayData.call) return null;
    
    switch (dayData.call.status) {
      case '완료':
        return dayData.call.riskScore > 70 ? '🚨' : dayData.call.riskScore > 40 ? '⚠️' : '✅';
      case '증상 발견':
        return '⚠️';
      case '응급상황':
        return '🚨';
      case '미응답':
        return '❌';
      default:
        return '📞';
    }
  };

  // 날짜 클릭 핸들러
  const handleDateClick = (dayData) => {
    if (dayData.call || dayData.health) {
      setSelectedDate(dayData);
    }
  };

  // 월 변경 함수
  const changeMonth = (increment) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + increment);
    setCurrentMonth(newMonth);
  };

  // 최근 건강 데이터
  const latestHealth = userHealthData[userHealthData.length - 1];
  
  // 건강 통계 계산
  const healthStats = {
    totalCalls: userCallHistory.length,
    completedCalls: userCallHistory.filter(call => call.status === '완료').length,
    emergencyCalls: userCallHistory.filter(call => call.status === '응급상황').length,
    avgRiskScore: userCallHistory.reduce((sum, call) => sum + (call.riskScore || 0), 0) / userCallHistory.length || 0
  };

  if (!user) {
    return <div>로그인이 필요합니다.</div>;
  }

  const calendar = generateCalendar();

  return (
    <div className="health-monitoring-container">
      {/* 헤더 */}
      <div className="monitoring-header">
        <h1 className="title">🏥 건강 모니터링</h1>
        <p className="subtitle">매일의 건강 상태를 체계적으로 관리하고 추적합니다</p>
      </div>

      {/* 건강 요약 통계 */}
      <div className="health-summary">
        <div className="summary-stats">
          <div className="stat-item">
            <div className="stat-icon">📞</div>
            <div className="stat-content">
              <div className="stat-number">{healthStats.totalCalls}</div>
              <div className="stat-label">총 안부 전화</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <div className="stat-number">{healthStats.completedCalls}</div>
              <div className="stat-label">완료된 통화</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <div className="stat-number">{Math.round(healthStats.avgRiskScore)}</div>
              <div className="stat-label">평균 위험도</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🚨</div>
            <div className="stat-content">
              <div className="stat-number">{healthStats.emergencyCalls}</div>
              <div className="stat-label">응급 상황</div>
            </div>
          </div>
        </div>
      </div>

      {/* 월간 캘린더 */}
      <Card className="calendar-card">
        <div className="calendar-header">
          <Button onClick={() => changeMonth(-1)} className="btn-secondary">
            ◀ 이전달
          </Button>
          <h2 className="calendar-title">
            {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월 건강 캘린더
          </h2>
          <Button onClick={() => changeMonth(1)} className="btn-secondary">
            다음달 ▶
          </Button>
        </div>

        <div className="calendar-legend">
          <div className="legend-item">
            <span className="legend-icon">✅</span>
            <span>정상 완료</span>
          </div>
          <div className="legend-item">
            <span className="legend-icon">⚠️</span>
            <span>주의 관찰</span>
          </div>
          <div className="legend-item">
            <span className="legend-icon">🚨</span>
            <span>응급 상황</span>
          </div>
          <div className="legend-item">
            <span className="legend-icon">❌</span>
            <span>미응답</span>
          </div>
        </div>

        <div className="calendar-grid">
          <div className="calendar-weekdays">
            {['일', '월', '화', '수', '목', '금', '토'].map(day => (
              <div key={day} className="weekday">{day}</div>
            ))}
          </div>
          
          <div className="calendar-dates">
            {calendar.map((week, weekIndex) => (
              <div key={weekIndex} className="calendar-week">
                {week.map((dayData, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`calendar-day ${!dayData.isCurrentMonth ? 'other-month' : ''} ${dayData.call || dayData.health ? 'has-data' : ''}`}
                    onClick={() => handleDateClick(dayData)}
                  >
                    <div className="day-number">{dayData.date.getDate()}</div>
                    <div className="day-status">
                      {getDateStatus(dayData)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* 선택된 날짜 상세 정보 */}
      {selectedDate && (
        <Card className="date-detail-card">
          <h3 className="detail-title">
            📅 {selectedDate.date.getMonth() + 1}월 {selectedDate.date.getDate()}일 상세 정보
          </h3>
          
          {selectedDate.call && (
            <div className="call-detail">
              <h4>📞 안부 전화 기록</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">통화 시간:</span>
                  <span className="detail-value">{selectedDate.call.time}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">통화 시간:</span>
                  <span className="detail-value">{selectedDate.call.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">상태:</span>
                  <span className={`status-badge status-${selectedDate.call.status}`}>
                    {selectedDate.call.status}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">위험도:</span>
                  <span className={`risk-score risk-${selectedDate.call.riskScore > 70 ? 'high' : selectedDate.call.riskScore > 40 ? 'medium' : 'low'}`}>
                    {selectedDate.call.riskScore}점
                  </span>
                </div>
              </div>
              
              <div className="call-summary">
                <h5>📋 통화 요약</h5>
                <p>{selectedDate.call.summary}</p>
              </div>
              
              {selectedDate.call.symptoms && selectedDate.call.symptoms.length > 0 && (
                <div className="symptoms">
                  <h5>⚠️ 발견된 증상</h5>
                  <div className="symptom-list">
                    {selectedDate.call.symptoms.map((symptom, index) => (
                      <span key={index} className="symptom-tag">{symptom}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedDate.call.aiAnalysis && (
                <div className="ai-analysis">
                  <h5>🤖 AI 분석</h5>
                  <p>{selectedDate.call.aiAnalysis}</p>
                </div>
              )}
            </div>
          )}

          {selectedDate.health && (
            <div className="health-detail">
              <h4>💊 건강 데이터</h4>
              <div className="health-metrics">
                <div className="metric-item">
                  <span className="metric-icon">💓</span>
                  <span className="metric-label">심박수</span>
                  <span className="metric-value">{selectedDate.health.heartRate} bpm</span>
                </div>
                <div className="metric-item">
                  <span className="metric-icon">🩺</span>
                  <span className="metric-label">혈압</span>
                  <span className="metric-value">{selectedDate.health.bloodPressure}</span>
                </div>
                <div className="metric-item">
                  <span className="metric-icon">🍯</span>
                  <span className="metric-label">혈당</span>
                  <span className="metric-value">{selectedDate.health.bloodSugar} mg/dL</span>
                </div>
              </div>
              
              {selectedDate.health.notes && (
                <div className="health-notes">
                  <h5>📝 특이사항</h5>
                  <p>{selectedDate.health.notes}</p>
                </div>
              )}
            </div>
          )}
        </Card>
      )}

      {/* 현재 건강 상태 */}
      {latestHealth && (
        <Card className="current-health-card">
          <h3 className="card-title">📊 최근 건강 상태</h3>
          <div className="current-health-grid">
            <div className="health-metric">
              <div className="metric-header">
                <span className="metric-icon">💓</span>
                <span className="metric-name">심박수</span>
              </div>
              <div className="metric-value">{latestHealth.heartRate} bpm</div>
              <div className="metric-status normal">정상 범위</div>
            </div>
            
            <div className="health-metric">
              <div className="metric-header">
                <span className="metric-icon">🩺</span>
                <span className="metric-name">혈압</span>
              </div>
              <div className="metric-value">{latestHealth.bloodPressure}</div>
              <div className={`metric-status ${latestHealth.riskLevel === '높음' ? 'warning' : 'normal'}`}>
                {latestHealth.riskLevel === '높음' ? '주의 필요' : '정상 범위'}
              </div>
            </div>
            
            <div className="health-metric">
              <div className="metric-header">
                <span className="metric-icon">🍯</span>
                <span className="metric-name">혈당</span>
              </div>
              <div className="metric-value">{latestHealth.bloodSugar} mg/dL</div>
              <div className="metric-status normal">정상 범위</div>
            </div>
            
            <div className="health-metric">
              <div className="metric-header">
                <span className="metric-icon">⚠️</span>
                <span className="metric-name">위험도</span>
              </div>
              <div className="metric-value">
                <span className={`risk-badge risk-${latestHealth.riskLevel === '낮음' ? 'low' : latestHealth.riskLevel === '보통' ? 'medium' : 'high'}`}>
                  {latestHealth.riskLevel}
                </span>
              </div>
              <div className="metric-description">
                {latestHealth.riskLevel === '낮음' && '건강 상태가 양호합니다'}
                {latestHealth.riskLevel === '보통' && '주의 깊은 관찰이 필요합니다'}
                {latestHealth.riskLevel === '높음' && '즉시 의료진 상담을 권장합니다'}
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* 건강 관리 팁 */}
      <Card className="health-tips-card">
        <h3 className="card-title">💡 건강 관리 팁</h3>
        <div className="tips-grid">
          <div className="tip-item">
            <div className="tip-icon">💊</div>
            <div className="tip-content">
              <h4>정기적인 약물 복용</h4>
              <p>처방된 약물을 정해진 시간에 꾸준히 복용하세요.</p>
            </div>
          </div>
          <div className="tip-item">
            <div className="tip-icon">🏃‍♂️</div>
            <div className="tip-content">
              <h4>적절한 운동</h4>
              <p>매일 30분씩 가벼운 산책이나 스트레칭을 해보세요.</p>
            </div>
          </div>
          <div className="tip-item">
            <div className="tip-icon">🥗</div>
            <div className="tip-content">
              <h4>균형잡힌 식사</h4>
              <p>규칙적인 식사와 충분한 수분 섭취를 유지하세요.</p>
            </div>
          </div>
          <div className="tip-item">
            <div className="tip-icon">😴</div>
            <div className="tip-content">
              <h4>충분한 휴식</h4>
              <p>하루 7-8시간의 충분한 수면을 취하세요.</p>
            </div>
          </div>
        </div>
      </Card>

      {/* 관련 링크 */}
      <div className="health-actions">
        <Link to="/phone-service" className="btn btn-secondary">
          📞 전화 서비스 설정
        </Link>
        <Link to="/profile/notification" className="btn btn-secondary">
          🔔 알림 설정
        </Link>
        <Link to="/care-services" className="btn btn-primary">
          🏥 케어 서비스 찾기
        </Link>
      </div>
    </div>
  );
};

export default HealthMonitoring;