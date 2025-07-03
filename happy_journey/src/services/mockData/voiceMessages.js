// 전화 서비스(통화 기록/음성편지) 목데이터 (src/services/mockData/voiceMessages.js)

/**
 * 확장된 통화 기록 데이터
 */
const callHistory = [
  {
    id: 1,
    userId: 1,
    date: '2024-06-05',
    time: '10:30',
    duration: '5분 20초',
    status: '완료',
    summary: '건강 상태 양호, 혈압약 복용 확인',
    riskScore: 25,
    symptoms: [],
    aiAnalysis: '정상적인 응답, 건강 상태 안정'
  },
  {
    id: 2,
    userId: 1,
    date: '2024-06-04',
    time: '10:28',
    duration: '6분 15초',
    status: '완료',
    summary: '가벼운 두통 호소, 혈압 관리 필요',
    riskScore: 45,
    symptoms: ['두통'],
    aiAnalysis: '경미한 증상, 지속 관찰 필요'
  },
  {
    id: 3,
    userId: 1,
    date: '2024-06-03',
    time: '10:32',
    duration: '4분 45초',
    status: '완료',
    summary: '식사 잘 드심, 약물 복용 정상',
    riskScore: 20,
    symptoms: [],
    aiAnalysis: '전반적 상태 양호'
  },
  {
    id: 4,
    userId: 3,
    date: '2024-06-05',
    time: '09:15',
    duration: '7분 30초',
    status: '완료',
    summary: '무릎 통증 지속, 관절염 약물 복용',
    riskScore: 35,
    symptoms: ['무릎 통증'],
    aiAnalysis: '만성 질환 관리 중, 안정적'
  },
  {
    id: 5,
    userId: 4,
    date: '2024-06-05',
    time: '14:20',
    duration: '8분 10초',
    status: '증상 발견',
    summary: '가슴 답답함 호소, 심장 관련 증상',
    riskScore: 75,
    symptoms: ['가슴 답답함', '가벼운 숨참'],
    aiAnalysis: '심장 관련 증상 감지, 주의 관찰 필요'
  },
  {
    id: 6,
    userId: 5,
    date: '2024-06-05',
    time: '11:45',
    duration: '12분 20초',
    status: '증상 발견',
    summary: '심한 두통과 어지러움, 고혈압 악화',
    riskScore: 80,
    symptoms: ['심한 두통', '어지러움', '메스꺼움'],
    aiAnalysis: '고혈압 악화 징후, 즉시 의료진 상담 권장'
  },
  {
    id: 7,
    userId: 6,
    date: '2024-06-05',
    time: '10:15',
    duration: '6분 50초',
    status: '완료',
    summary: '혈당 관리 양호, 당뇨약 복용 정상',
    riskScore: 30,
    symptoms: ['가벼운 갈증'],
    aiAnalysis: '당뇨 관리 상태 양호'
  },
  {
    id: 8,
    userId: 7,
    date: '2024-06-05',
    time: '15:10',
    duration: '5분 30초',
    status: '완료',
    summary: '시야 흐림 지속, 안과 검진 예정',
    riskScore: 40,
    symptoms: ['시야 흐림'],
    aiAnalysis: '백내장 진행, 정기 검진 필요'
  },
  {
    id: 9,
    userId: 8,
    date: '2024-06-05',
    time: '09:45',
    duration: '4분 20초',
    status: '완료',
    summary: '컨디션 좋음, 약물 복용 잘 하고 있음',
    riskScore: 15,
    symptoms: [],
    aiAnalysis: '건강 상태 우수'
  },
  {
    id: 10,
    userId: 9,
    date: '2024-06-05',
    time: '11:20',
    duration: '6분 40초',
    status: '완료',
    summary: '요통 있지만 일상생활 가능',
    riskScore: 25,
    symptoms: ['요통'],
    aiAnalysis: '골다공증 관련 통증, 관리 중'
  },
  {
    id: 11,
    userId: 10,
    date: '2024-06-05',
    time: '14:30',
    duration: '7분 15초',
    status: '완료',
    summary: '소변 곤란 지속, 전립선 약물 복용',
    riskScore: 35,
    symptoms: ['소변 곤란'],
    aiAnalysis: '전립선 관련 증상, 치료 중'
  },
  {
    id: 12,
    userId: 1,
    date: '2024-06-02',
    time: '10:35',
    duration: '미응답',
    status: '미응답',
    summary: '전화 연결 실패, 30분 후 재시도 예정',
    riskScore: 0,
    symptoms: [],
    aiAnalysis: '통화 연결 실패'
  },
  {
    id: 13,
    userId: 3,
    date: '2024-06-04',
    time: '09:20',
    duration: '미응답',
    status: '미응답',
    summary: '2차 시도에서 연결 성공',
    riskScore: 0,
    symptoms: [],
    aiAnalysis: '재시도 후 정상 통화'
  },
  {
    id: 14,
    userId: 4,
    date: '2024-06-04',
    time: '14:15',
    duration: '9분 30초',
    status: '응급상황',
    summary: '심한 가슴 통증, 즉시 병원 이송 권장',
    riskScore: 95,
    symptoms: ['심한 가슴 통증', '식은땀', '호흡곤란'],
    aiAnalysis: '응급상황 감지, 119 신고 필요'
  },
  {
    id: 15,
    userId: 5,
    date: '2024-06-03',
    time: '11:50',
    duration: '15분 10초',
    status: '응급상황',
    summary: '의식 저하, 응답 불분명',
    riskScore: 90,
    symptoms: ['의식 저하', '응답 불분명'],
    aiAnalysis: '의식 상태 이상, 즉시 응급 처치 필요'
  }
];

/**
 * 확장된 음성편지 데이터
 */
const voiceMessages = [
  {
    id: 1,
    userId: 1,
    sender: '김보호자',
    recipient: '홍길동',
    text: '아버지, 안녕하세요. 김지영입니다. 오늘도 건강하게 지내시고 혈압약 꼭 챙겨 드세요. 이번 주말에 찾아뵐게요.',
    date: '2024-06-05',
    time: '14:20',
    duration: '45초',
    type: 'received',
    isRead: false
  },
  {
    id: 2,
    userId: 1,
    sender: '홍길동',
    recipient: '김보호자',
    text: '지영아, 나는 괜찮다. 약도 잘 먹고 있고, 오늘 산책도 했어. 너무 걱정하지 말고 일 열심히 해라.',
    date: '2024-06-05',
    time: '10:35',
    duration: '38초',
    type: 'sent',
    isRead: true
  },
  {
    id: 3,
    userId: 1,
    sender: '김보호자',
    recipient: '홍길동',
    text: '아버지, 내일 병원 예약 있으시니까 잊지 마시고 오전 9시에 나가세요. 제가 모시러 갈게요.',
    date: '2024-06-04',
    time: '16:45',
    duration: '52초',
    type: 'received',
    isRead: true
  },
  {
    id: 4,
    userId: 3,
    sender: '이보호자',
    recipient: '박영희',
    text: '엄마, 오늘 날씨가 쌀쌀하니까 외출할 때 따뜻하게 입고 나가세요. 무릎 아프시면 무리하지 마세요.',
    date: '2024-06-05',
    time: '08:30',
    duration: '42초',
    type: 'received',
    isRead: false
  },
  {
    id: 5,
    userId: 3,
    sender: '박영희',
    recipient: '이보호자',
    text: '준호야, 걱정 마라. 엄마는 괜찮어. 무릎은 좀 아프지만 약 먹고 있으니까 괜찮다. 너도 몸조심해.',
    date: '2024-06-05',
    time: '09:20',
    duration: '41초',
    type: 'sent',
    isRead: true
  },
  {
    id: 6,
    userId: 4,
    sender: '최보호자',
    recipient: '이철수',
    text: '아버지, 어제 심장 관련 증상 있으셨다고 들었는데 괜찮으세요? 오늘 꼭 병원 가보시고 연락 주세요.',
    date: '2024-06-05',
    time: '15:00',
    duration: '48초',
    type: 'received',
    isRead: false
  },
  {
    id: 7,
    userId: 4,
    sender: '이철수',
    recipient: '최보호자',
    text: '미영아, 아버지는 괜찮다. 병원 다녀왔는데 약만 잘 먹으면 된다고 하네. 너무 걱정하지 말아라.',
    date: '2024-06-05',
    time: '17:30',
    duration: '35초',
    type: 'sent',
    isRead: true
  },
  {
    id: 8,
    userId: 5,
    sender: '김보호자2',
    recipient: '최순자',
    text: '할머니, 오늘 컨디션 어떠세요? 치매 약 드시는 거 잊지 마시고, 뭔가 이상하시면 바로 연락 주세요.',
    date: '2024-06-05',
    time: '12:20',
    duration: '51초',
    type: 'received',
    isRead: true
  },
  {
    id: 9,
    userId: 5,
    sender: '최순자',
    recipient: '김보호자2',
    text: '민수야, 할머니는... 음... 괜찮아. 약도 먹고 있고... 그런데 가끔 깜빡깜빡해서 걱정이야.',
    date: '2024-06-05',
    time: '12:50',
    duration: '43초',
    type: 'sent',
    isRead: true
  },
  {
    id: 10,
    userId: 6,
    sender: '정보호자',
    recipient: '정민수',
    text: '아버지, 혈당 관리 잘 하고 계시죠? 단 것 드시면 안 되는 거 아시죠? 식단 조절 꼭 해주세요.',
    date: '2024-06-05',
    time: '11:00',
    duration: '46초',
    type: 'received',
    isRead: true
  },
  {
    id: 11,
    userId: 6,
    sender: '정민수',
    recipient: '정보호자',
    text: '수진아, 아버지 혈당 관리 잘하고 있어. 단 것도 안 먹고 있고, 약도 빼먹지 않고 먹고 있으니까 안심해.',
    date: '2024-06-05',
    time: '11:30',
    duration: '39초',
    type: 'sent',
    isRead: true
  },
  {
    id: 12,
    userId: 7,
    sender: '장보호자',
    recipient: '장미화',
    text: '엄마, 백내장 수술 날짜 잡혔어요. 다음 주 화요일 오전 10시에 병원 가셔야 해요. 제가 모시러 갈게요.',
    date: '2024-06-05',
    time: '16:15',
    duration: '55초',
    type: 'received',
    isRead: false
  },
  {
    id: 13,
    userId: 8,
    sender: '윤보호자',
    recipient: '윤성호',
    text: '아버지, 혈압 체크 잘 하고 계시죠? 오늘 측정한 수치 좀 알려주세요. 콜레스테롤 약도 빼먹지 마세요.',
    date: '2024-06-05',
    time: '10:45',
    duration: '44초',
    type: 'received',
    isRead: true
  },
  {
    id: 14,
    userId: 8,
    sender: '윤성호',
    recipient: '윤보호자',
    text: '영호야, 아버지 혈압 오늘 135에 85였어. 어제보다 좀 좋아졌네. 약도 잘 먹고 있으니까 걱정 마.',
    date: '2024-06-05',
    time: '11:15',
    duration: '37초',
    type: 'sent',
    isRead: true
  },
  {
    id: 15,
    userId: 9,
    sender: '강보호자',
    recipient: '강애순',
    text: '엄마, 칼슘 보충제 드시는 거 잊지 마세요. 골다공증 예방하려면 꾸준히 드셔야 해요. 운동도 가볍게 하시고요.',
    date: '2024-06-05',
    time: '12:30',
    duration: '49초',
    type: 'received',
    isRead: true
  },
  {
    id: 16,
    userId: 9,
    sender: '강애순',
    recipient: '강보호자',
    text: '혜진아, 엄마 칼슘약 잘 먹고 있어. 오늘도 집 앞 공원에서 산책했어. 허리는 좀 아프지만 괜찮아.',
    date: '2024-06-05',
    time: '13:00',
    duration: '40초',
    type: 'sent',
    isRead: true
  },
  {
    id: 17,
    userId: 10,
    sender: '신보호자',
    recipient: '신동철',
    text: '아버지, 전립선 약 드시는 거 잊지 마시고, 소변 보시기 힘들면 참지 마시고 바로 병원 가세요.',
    date: '2024-06-05',
    time: '15:45',
    duration: '47초',
    type: 'received',
    isRead: false
  },
  {
    id: 18,
    userId: 10,
    sender: '신동철',
    recipient: '신보호자',
    text: '성민아, 아버지 괜찮다. 약도 잘 먹고 있고, 많이 불편하지는 않아. 너무 걱정하지 마라.',
    date: '2024-06-05',
    time: '16:20',
    duration: '33초',
    type: 'sent',
    isRead: true
  },
  {
    id: 19,
    userId: 1,
    sender: '김보호자',
    recipient: '홍길동',
    text: '아버지, 생신 축하드려요! 건강하게 오래오래 사세요. 케이크 사들고 저녁에 갈게요.',
    date: '2024-06-03',
    time: '09:00',
    duration: '58초',
    type: 'received',
    isRead: true
  },
  {
    id: 20,
    userId: 1,
    sender: '홍길동',
    recipient: '김보호자',
    text: '지영아, 고맙다. 아버지 생일 챙겨줘서. 건강하게 오래 살아서 손주들 보고 싶다.',
    date: '2024-06-03',
    time: '09:30',
    duration: '41초',
    type: 'sent',
    isRead: true
  }
];

export { callHistory, voiceMessages };