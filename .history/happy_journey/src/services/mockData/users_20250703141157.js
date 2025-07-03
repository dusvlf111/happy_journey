// 사용자 목데이터 (src/services/mockData/users.js)

/**
 * 프로토타입용 예시 사용자 데이터 (가족, 알림 설정 포함)
 */
const users = [
  {
    id: 1,
    name: '홍길동',
    email: 'user1@example.com',
    password: '1234', // 실제 서비스에서는 암호화 필요
    role: 'user',
    phone: '010-1111-2222',
    family: [
      { name: '김보호자', email: 'user2@example.com', relation: '자녀', phone: '010-3333-4444' }
    ],
    notification: {
      push: true,
      sms: false,
      email: true,
      time: '오전 10시',
    },
  },
  {
    id: 2,
    name: '김보호자',
    email: 'user2@example.com',
    password: '5678',
    role: 'guardian',
    phone: '010-3333-4444',
    family: [
      { name: '홍길동', email: 'user1@example.com', relation: '부', phone: '010-1111-2222' }
    ],
    notification: {
      push: true,
      sms: true,
      email: true,
      time: '오전 10시',
    },
  },
];

export default users;
