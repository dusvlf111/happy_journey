// 건강 데이터 목데이터 (src/services/mockData/healthData.js)

/**
 * 확장된 건강 상태 데이터 (다양한 사용자들의 건강 정보)
 */
const healthData = [
  // 홍길동 (test) - 고혈압, 당뇨병
  {
    id: 1,
    userId: 1,
    date: '2024-06-01',
    heartRate: 78,
    bloodPressure: '145/90',
    bloodSugar: 120,
    riskLevel: '보통',
    symptoms: ['가슴 답답함'],
    notes: '혈압이 약간 높음. 약물 복용 확인 필요'
  },
  {
    id: 2,
    userId: 1,
    date: '2024-06-02',
    heartRate: 75,
    bloodPressure: '140/85',
    bloodSugar: 110,
    riskLevel: '보통',
    symptoms: [],
    notes: '전일 대비 개선됨'
  },
  
  // 김보호자 (test0) - 보호자이므로 건강 데이터 없음
  
  // 박영희 (test1) - 관절염, 골다공증
  {
    id: 3,
    userId: 3,
    date: '2024-06-01',
    heartRate: 72,
    bloodPressure: '130/80',
    bloodSugar: 95,
    riskLevel: '낮음',
    symptoms: ['무릎 통증'],
    notes: '관절염으로 인한 통증 호소'
  },
  {
    id: 4,
    userId: 3,
    date: '2024-06-02',
    heartRate: 70,
    bloodPressure: '125/78',
    bloodSugar: 92,
    riskLevel: '낮음',
    symptoms: ['무릎 통증'],
    notes: '통증 지속되나 전반적 상태 양호'
  },
  
  // 이철수 (test2) - 심장병
  {
    id: 5,
    userId: 4,
    date: '2024-06-01',
    heartRate: 85,
    bloodPressure: '150/95',
    bloodSugar: 105,
    riskLevel: '높음',
    symptoms: ['가슴 통증', '숨참'],
    notes: '심장 관련 증상 발견. 주의 관찰 필요'
  },
  {
    id: 6,
    userId: 4,
    date: '2024-06-02',
    heartRate: 82,
    bloodPressure: '145/90',
    bloodSugar: 100,
    riskLevel: '보통',
    symptoms: ['가벼운 숨참'],
    notes: '전일 대비 개선. 약물 효과 확인됨'
  },
  
  // 최순자 (test3) - 치매 초기, 고혈압
  {
    id: 7,
    userId: 5,
    date: '2024-06-01',
    heartRate: 68,
    bloodPressure: '160/100',
    bloodSugar: 110,
    riskLevel: '높음',
    symptoms: ['두통', '어지러움'],
    notes: '고혈압 악화. 치매 진행 상태 확인 필요'
  },
  {
    id: 8,
    userId: 5,
    date: '2024-06-02',
    heartRate: 70,
    bloodPressure: '155/95',
    bloodSugar: 105,
    riskLevel: '보통',
    symptoms: ['가벼운 두통'],
    notes: '혈압 약간 개선. 지속 관찰 필요'
  },
  
  // 정민수 (test4) - 당뇨병
  {
    id: 9,
    userId: 6,
    date: '2024-06-01',
    heartRate: 75,
    bloodPressure: '135/85',
    bloodSugar: 180,
    riskLevel: '높음',
    symptoms: ['갈증', '피로감'],
    notes: '혈당 급상승. 식단 관리 필요'
  },
  {
    id: 10,
    userId: 6,
    date: '2024-06-02',
    heartRate: 73,
    bloodPressure: '130/80',
    bloodSugar: 150,
    riskLevel: '보통',
    symptoms: ['갈증'],
    notes: '혈당 개선 중. 약물 복용 효과 확인'
  },
  
  // 장미화 (test5) - 백내장, 관절염
  {
    id: 11,
    userId: 7,
    date: '2024-06-01',
    heartRate: 70,
    bloodPressure: '125/80',
    bloodSugar: 90,
    riskLevel: '낮음',
    symptoms: ['시야 흐림', '관절 통증'],
    notes: '백내장 진행. 관절염 통증 지속'
  },
  {
    id: 12,
    userId: 7,
    date: '2024-06-02',
    heartRate: 69,
    bloodPressure: '120/75',
    bloodSugar: 88,
    riskLevel: '낮음',
    symptoms: ['시야 흐림'],
    notes: '전반적 상태 양호. 안과 검진 권장'
  },
  
  // 윤성호 (test6) - 고혈압, 고지혈증
  {
    id: 13,
    userId: 8,
    date: '2024-06-01',
    heartRate: 80,
    bloodPressure: '140/90',
    bloodSugar: 95,
    riskLevel: '보통',
    symptoms: ['어지러움'],
    notes: '고혈압 관리 중. 콜레스테롤 수치 확인 필요'
  },
  {
    id: 14,
    userId: 8,
    date: '2024-06-02',
    heartRate: 78,
    bloodPressure: '135/85',
    bloodSugar: 92,
    riskLevel: '낮음',
    symptoms: [],
    notes: '상태 안정. 약물 효과 양호'
  },
  
  // 강애순 (test7) - 골다공증, 관절염
  {
    id: 15,
    userId: 9,
    date: '2024-06-01',
    heartRate: 65,
    bloodPressure: '120/70',
    bloodSugar: 85,
    riskLevel: '낮음',
    symptoms: ['요통', '관절 통증'],
    notes: '골다공증으로 인한 통증. 칼슘 보충 필요'
  },
  {
    id: 16,
    userId: 9,
    date: '2024-06-02',
    heartRate: 67,
    bloodPressure: '118/68',
    bloodSugar: 83,
    riskLevel: '낮음',
    symptoms: ['요통'],
    notes: '통증 완화. 운동 권장'
  },
  
  // 신동철 (test8) - 전립선비대증
  {
    id: 17,
    userId: 10,
    date: '2024-06-01',
    heartRate: 72,
    bloodPressure: '130/75',
    bloodSugar: 88,
    riskLevel: '낮음',
    symptoms: ['소변 곤란'],
    notes: '전립선 관련 증상. 비뇨기과 검진 권장'
  },
  {
    id: 18,
    userId: 10,
    date: '2024-06-02',
    heartRate: 70,
    bloodPressure: '125/72',
    bloodSugar: 85,
    riskLevel: '낮음',
    symptoms: ['소변 곤란'],
    notes: '전반적 상태 양호. 약물 치료 지속'
  },
  
  // 최근 일주일 데이터 (test 사용자 기준)
  {
    id: 19,
    userId: 1,
    date: '2024-06-03',
    heartRate: 77,
    bloodPressure: '138/88',
    bloodSugar: 115,
    riskLevel: '보통',
    symptoms: [],
    notes: '상태 안정화'
  },
  {
    id: 20,
    userId: 1,
    date: '2024-06-04',
    heartRate: 76,
    bloodPressure: '135/85',
    bloodSugar: 108,
    riskLevel: '낮음',
    symptoms: [],
    notes: '개선 지속'
  },
  {
    id: 21,
    userId: 1,
    date: '2024-06-05',
    heartRate: 74,
    bloodPressure: '132/82',
    bloodSugar: 105,
    riskLevel: '낮음',
    symptoms: [],
    notes: '양호한 상태 유지'
  }
];

export default healthData;