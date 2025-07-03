// 사용자 목데이터 (src/services/mockData/users.js)

/**
 * 프로토타입용 예시 사용자 데이터
 */
const users = [
  {
    id: 1,
    name: '홍길동',
    email: 'user1@example.com',
    password: '1234', // 실제 서비스에서는 암호화 필요
    role: 'user',
    phone: '010-1111-2222',
    family: ['user2@example.com'],
  },
  {
    id: 2,
    name: '김보호자',
    email: 'user2@example.com',
    password: '5678',
    role: 'guardian',
    phone: '010-3333-4444',
    family: ['user1@example.com'],
  },
];

export default users;
