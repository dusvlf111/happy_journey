// 건강 모니터링 컴포넌트 (src/pages/dashboard/HealthMonitoring.jsx)
import React from 'react';
import healthData from '../../services/mockData/healthData';

/**
 * 건강 모니터링 요약 (심박수, 혈압, 혈당, 위험도)
 */
const HealthMonitoring = () => {
  // 예시: 첫 번째 건강 데이터만 사용
  const data = healthData[0];

  if (!data) return <div className="text-gray">건강 데이터가 없습니다.</div>;

  return (
    <div className="card">
      <div className="mb-2"><b>심박수:</b> {data.heartRate} bpm</div>
      <div className="mb-2"><b>혈압:</b> {data.bloodPressure}</div>
      <div className="mb-2"><b>혈당:</b> {data.bloodSugar} mg/dL</div>
      <div><b>위험도:</b> {data.riskLevel}</div>
    </div>
  );
};

export default HealthMonitoring;
