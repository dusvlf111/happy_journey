// 케어 서비스(요양원/호스피스) 목데이터 (src/services/mockData/careServices.js)

/**
 * 프로토타입용 케어 서비스 예시 데이터
 */
const careServices = [
  {
    id: 1,
    name: '행복한 요양원',
    type: '요양원',
    location: '서울 강남구',
    price: 180,
    rating: 4.7,
    image: '/images/facilities/facility1.jpg',
    description: '쾌적한 환경과 전문 간호진이 상주하는 프리미엄 요양원입니다.',
    available: true,
  },
  {
    id: 2,
    name: '편안한 호스피스',
    type: '호스피스',
    location: '경기 성남시',
    price: 150,
    rating: 4.5,
    image: '/images/facilities/facility2.jpg',
    description: '말기 환자를 위한 전문 호스피스 케어를 제공합니다.',
    available: false,
  },
  {
    id: 3,
    name: '사랑의 요양원',
    type: '요양원',
    location: '부산 해운대구',
    price: 130,
    rating: 4.2,
    image: '/images/facilities/facility3.jpg',
    description: '가족같은 분위기와 저렴한 가격의 요양원입니다.',
    available: true,
  },
];

export default careServices;
