// 전화 서비스(통화 기록/음성편지) 목데이터 (src/services/mockData/voiceMessages.js)

/**
 * 프로토타입용 통화 기록/음성편지 예시 데이터
 */
const callHistory = [
  {
    id: 1,
    date: '2024-06-01',
    time: '10:30',
    duration: '5분',
    status: '완료',
    summary: '건강 상태 양호, 특이 증상 없음',
  },
  {
    id: 2,
    date: '2024-05-31',
    time: '10:32',
    duration: '4분',
    status: '증상 발견',
    summary: '가벼운 어지러움 호소',
  },
  {
    id: 3,
    date: '2024-05-30',
    time: '10:29',
    duration: '미응답',
    status: '미응답',
    summary: '전화 연결 실패',
  },
];

const voiceMessages = [
  {
    id: 1,
    sender: '김보호자',
    text: '아버지 오늘도 건강 잘 챙기세요!',
    date: '2024-06-01',
  },
  {
    id: 2,
    sender: '홍길동',
    text: '딸아, 걱정마라. 오늘 컨디션 좋아.',
    date: '2024-06-01',
  },
  {
    id: 3,
    sender: '김보호자',
    text: '내일 병원 예약 잊지 마세요.',
    date: '2024-06-02',
  },
];

export { callHistory, voiceMessages };
