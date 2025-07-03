// 건강 데이터 목데이터 (src/services/mockData/healthData.js)

/**
 * 프로토타입용 건강 상태 예시 데이터
 */
const healthData = [
  {
    id: 1,
    userId: 1,
    date: '2024-06-01',
    heartRate: 72, // 심박수
    bloodPressure: '120/80', // 혈압
    bloodSugar: 95, // 혈당
    riskLevel: '낮음',
  },
  {
    id: 2,
    userId: 1,
    date: '2024-06-02',
    heartRate: 80,
    bloodPressure: '130/85',
    bloodSugar: 110,
    riskLevel: '보통',
  },
  {
    id: 3,
    userId: 2,
    date: '2024-06-01',
    heartRate: 90,
    bloodPressure: '145/95',
    bloodSugar: 140,
    riskLevel: '높음',
  },
];

export default healthData;
