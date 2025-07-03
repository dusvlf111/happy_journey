// 건강 모니터링 컴포넌트 (src/pages/dashboard/HealthMonitoring.jsx)
import React from 'react';
import Card from '../../components/common/Card';

// 예시 목데이터
const healthData = {
  riskScore: 28,
  riskLevel: 'Green',
  lastSymptoms: ['두통', '가벼운 어지러움'],
  weekTrend: [30, 28, 32, 29, 27, 28, 28],
};

/**
 * 건강 모니터링 요약 (위험도, 증상, 그래프)
 */
const HealthMonitoring = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-2">
        <span className="font-bold">위험도 점수:</span>
        <span className="text-xl font-bold text-green-600">{healthData.riskScore}점</span>
        <span className="ml-2 px-2 py-1 rounded bg-green-100 text-green-700 text-xs">{healthData.riskLevel} Zone</span>
      </div>
      <div className="mb-2">
        <span className="font-bold">최근 증상:</span>
        <span className="ml-2 text-gray-700">{healthData.lastSymptoms.join(', ')}</span>
      </div>
      <div className="mt-4">
        <span className="font-bold">주간 위험도 추이:</span>
        <div className="flex items-end gap-2 h-16 mt-2">
          {healthData.weekTrend.map((score, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                className="w-4 bg-green-400 rounded"
                style={{ height: `${score}px` }}
                title={`${score}점`}
              ></div>
              <span className="text-xs mt-1">{idx + 1}일</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthMonitoring;
