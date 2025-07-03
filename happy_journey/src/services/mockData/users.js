// 사용자 목데이터 (src/services/mockData/users.js)

/**
 * 확장된 사용자 데이터 (가족, 알림 설정, 상세 정보 포함)
 */
const users = [
  {
    id: 1,
    name: '홍길동',
    email: 'test',
    password: 'test',
    role: 'user',
    phone: '010-1111-2222',
    age: 75,
    address: '서울특별시 강남구 역삼동 123-45',
    birthDate: '1949-03-15',
    gender: '남성',
    joinDate: '2024-01-15',
    emergencyContact: '010-3333-4444',
    medicalHistory: ['고혈압', '당뇨병'],
    medications: ['혈압약', '당뇨약'],
    family: [
      { name: '김보호자', email: 'test0@example.com', relation: '자녀', phone: '010-3333-4444' }
    ],
    notification: {
      push: true,
      sms: false,
      email: true,
      time: '오전 10시',
    },
    preferences: {
      callFrequency: 'daily',
      language: 'korean',
      voiceSpeed: 'normal'
    }
  },
  {
    id: 2,
    name: '김보호자',
    email: 'test0',
    password: 'test0',
    role: 'guardian',
    phone: '010-3333-4444',
    age: 45,
    address: '서울특별시 서초구 서초동 456-78',
    birthDate: '1979-07-22',
    gender: '여성',
    joinDate: '2024-01-16',
    occupation: '회사원',
    family: [
      { name: '홍길동', email: 'test@example.com', relation: '부', phone: '010-1111-2222' }
    ],
    notification: {
      push: true,
      sms: true,
      email: true,
      time: '오전 10시',
    },
    preferences: {
      alertLevel: 'high',
      language: 'korean',
      reportFrequency: 'weekly'
    }
  },
  {
    id: 3,
    name: '박영희',
    email: 'test1',
    password: 'test1',
    role: 'user',
    phone: '010-2222-3333',
    age: 68,
    address: '부산광역시 해운대구 우동 789-12',
    birthDate: '1956-11-08',
    gender: '여성',
    joinDate: '2024-02-01',
    emergencyContact: '010-8888-9999',
    medicalHistory: ['관절염', '골다공증'],
    medications: ['관절염약', '칼슘제'],
    family: [
      { name: '이보호자', email: 'test2@example.com', relation: '자녀', phone: '010-4444-5555' },
      { name: '박배우자', email: 'test3@example.com', relation: '배우자', phone: '010-6666-7777' }
    ],
    notification: {
      push: true,
      sms: false,
      email: true,
      time: '오전 9시',
    },
    preferences: {
      callFrequency: 'daily',
      language: 'korean',
      voiceSpeed: 'slow'
    }
  },
  {
    id: 4,
    name: '이철수',
    email: 'test2',
    password: 'test2',
    role: 'user',
    phone: '010-5555-6666',
    age: 72,
    address: '대구광역시 중구 동성로 234-56',
    birthDate: '1952-05-20',
    gender: '남성',
    joinDate: '2024-02-15',
    emergencyContact: '010-7777-8888',
    medicalHistory: ['심장병'],
    medications: ['심장약'],
    family: [
      { name: '최보호자', email: 'test4@example.com', relation: '자녀', phone: '010-9999-0000' }
    ],
    notification: {
      push: true,
      sms: true,
      email: false,
      time: '오후 2시',
    },
    preferences: {
      callFrequency: 'daily',
      language: 'korean',
      voiceSpeed: 'normal'
    }
  },
  {
    id: 5,
    name: '최순자',
    email: 'test3',
    password: 'test3',
    role: 'user',
    phone: '010-7777-8888',
    age: 80,
    address: '인천광역시 남동구 구월동 345-67',
    birthDate: '1944-09-12',
    gender: '여성',
    joinDate: '2024-03-01',
    emergencyContact: '010-1111-3333',
    medicalHistory: ['치매 초기', '고혈압'],
    medications: ['치매약', '혈압약'],
    family: [
      { name: '김보호자2', email: 'test5@example.com', relation: '자녀', phone: '010-2222-4444' },
      { name: '최보호자2', email: 'test6@example.com', relation: '자녀', phone: '010-3333-5555' }
    ],
    notification: {
      push: true,
      sms: true,
      email: true,
      time: '오전 11시',
    },
    preferences: {
      callFrequency: 'twice_daily',
      language: 'korean',
      voiceSpeed: 'slow'
    }
  },
  {
    id: 6,
    name: '정민수',
    email: 'test4',
    password: 'test4',
    role: 'user',
    phone: '010-8888-9999',
    age: 66,
    address: '광주광역시 서구 상무동 456-78',
    birthDate: '1958-12-03',
    gender: '남성',
    joinDate: '2024-03-15',
    emergencyContact: '010-4444-6666',
    medicalHistory: ['당뇨병'],
    medications: ['당뇨약', '혈당강하제'],
    family: [
      { name: '정보호자', email: 'test7@example.com', relation: '자녀', phone: '010-5555-7777' }
    ],
    notification: {
      push: false,
      sms: true,
      email: true,
      time: '오전 10시',
    },
    preferences: {
      callFrequency: 'daily',
      language: 'korean',
      voiceSpeed: 'normal'
    }
  },
  {
    id: 7,
    name: '장미화',
    email: 'test5',
    password: 'test5',
    role: 'user',
    phone: '010-9999-0000',
    age: 73,
    address: '울산광역시 남구 삼산동 567-89',
    birthDate: '1951-04-18',
    gender: '여성',
    joinDate: '2024-04-01',
    emergencyContact: '010-6666-8888',
    medicalHistory: ['백내장', '관절염'],
    medications: ['안약', '진통제'],
    family: [
      { name: '장보호자', email: 'test8@example.com', relation: '자녀', phone: '010-7777-9999' }
    ],
    notification: {
      push: true,
      sms: false,
      email: true,
      time: '오후 3시',
    },
    preferences: {
      callFrequency: 'daily',
      language: 'korean',
      voiceSpeed: 'slow'
    }
  },
  {
    id: 8,
    name: '윤성호',
    email: 'test6',
    password: 'test6',
    role: 'user',
    phone: '010-1010-2020',
    age: 69,
    address: '세종특별자치시 조치원읍 678-90',
    birthDate: '1955-08-25',
    gender: '남성',
    joinDate: '2024-04-15',
    emergencyContact: '010-8888-0000',
    medicalHistory: ['고혈압', '고지혈증'],
    medications: ['혈압약', '콜레스테롤약'],
    family: [
      { name: '윤보호자', email: 'test9@example.com', relation: '자녀', phone: '010-9999-1111' },
      { name: '윤배우자', email: 'test10@example.com', relation: '배우자', phone: '010-2222-3333' }
    ],
    notification: {
      push: true,
      sms: true,
      email: false,
      time: '오전 9시',
    },
    preferences: {
      callFrequency: 'daily',
      language: 'korean',
      voiceSpeed: 'normal'
    }
  },
  {
    id: 9,
    name: '강애순',
    email: 'test7',
    password: 'test7',
    role: 'user',
    phone: '010-3030-4040',
    age: 77,
    address: '강원도 춘천시 효자동 789-01',
    birthDate: '1947-06-10',
    gender: '여성',
    joinDate: '2024-05-01',
    emergencyContact: '010-1111-4444',
    medicalHistory: ['골다공증', '관절염'],
    medications: ['칼슘제', '관절염약'],
    family: [
      { name: '강보호자', email: 'test11@example.com', relation: '자녀', phone: '010-5555-6666' }
    ],
    notification: {
      push: true,
      sms: false,
      email: true,
      time: '오전 11시',
    },
    preferences: {
      callFrequency: 'daily',
      language: 'korean',
      voiceSpeed: 'slow'
    }
  },
  {
    id: 10,
    name: '신동철',
    email: 'test8',
    password: 'test8',
    role: 'user',
    phone: '010-5050-6060',
    age: 71,
    address: '충청북도 청주시 상당구 890-12',
    birthDate: '1953-02-14',
    gender: '남성',
    joinDate: '2024-05-15',
    emergencyContact: '010-7777-0000',
    medicalHistory: ['전립선비대증'],
    medications: ['전립선약'],
    family: [
      { name: '신보호자', email: 'test12@example.com', relation: '자녀', phone: '010-8888-9999' }
    ],
    notification: {
      push: false,
      sms: true,
      email: true,
      time: '오후 2시',
    },
    preferences: {
      callFrequency: 'daily',
      language: 'korean',
      voiceSpeed: 'normal'
    }
  }
];

export default users;