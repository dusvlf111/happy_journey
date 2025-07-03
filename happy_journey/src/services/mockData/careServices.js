// 케어 서비스(요양원/호스피스) 목데이터 (src/services/mockData/careServices.js)

/**
 * 확장된 케어 서비스 데이터
 */
const careServices = [
  {
    id: 1,
    name: '행복한 요양원',
    type: '요양원',
    location: '서울 강남구',
    address: '서울특별시 강남구 테헤란로 123',
    price: 180,
    rating: 4.7,
    reviewCount: 45,
    image: '/images/facilities/facility1.jpg',
    description: '쾌적한 환경과 전문 간호진이 상주하는 프리미엄 요양원입니다. 24시간 의료진 상주, 개별 맞춤 케어 제공.',
    features: ['24시간 의료진 상주', '개별 맞춤 케어', '물리치료실', '식당', '정원'],
    capacity: 50,
    available: true,
    contact: '02-1234-5678',
    established: '2018',
    grades: {
      facility: 'A',
      service: 'A+',
      medical: 'A'
    }
  },
  {
    id: 2,
    name: '편안한 호스피스',
    type: '호스피스',
    location: '경기 성남시',
    address: '경기도 성남시 분당구 황새울로 456',
    price: 150,
    rating: 4.5,
    reviewCount: 32,
    image: '/images/facilities/facility2.jpg',
    description: '말기 환자를 위한 전문 호스피스 케어를 제공합니다. 가족과 함께하는 따뜻한 마지막 시간을 보장합니다.',
    features: ['전문 호스피스 케어', '가족 상담', '종교 서비스', '통증 관리', '심리 치료'],
    capacity: 30,
    available: false,
    contact: '031-2345-6789',
    established: '2020',
    grades: {
      facility: 'A',
      service: 'A+',
      medical: 'A+'
    }
  },
  {
    id: 3,
    name: '사랑의 요양원',
    type: '요양원',
    location: '부산 해운대구',
    address: '부산광역시 해운대구 해운대로 789',
    price: 130,
    rating: 4.2,
    reviewCount: 38,
    image: '/images/facilities/facility3.jpg',
    description: '가족같은 분위기와 저렴한 가격의 요양원입니다. 바다가 보이는 좋은 환경에서 편안한 노후를 보내세요.',
    features: ['바다 전망', '가족 같은 분위기', '레크리에이션', '물리치료', '영양 관리'],
    capacity: 40,
    available: true,
    contact: '051-3456-7890',
    established: '2015',
    grades: {
      facility: 'B+',
      service: 'A',
      medical: 'B+'
    }
  },
  {
    id: 4,
    name: '늘푸른 실버타운',
    type: '실버타운',
    location: '서울 서초구',
    address: '서울특별시 서초구 반포대로 321',
    price: 280,
    rating: 4.8,
    reviewCount: 67,
    image: '/images/facilities/facility4.jpg',
    description: '고급 실버타운으로 독립적인 생활과 필요시 케어 서비스를 제공합니다. 다양한 문화 활동과 편의시설이 완비되어 있습니다.',
    features: ['독립 생활', '문화 센터', '피트니스', '수영장', '골프 연습장', '의료진 상주'],
    capacity: 120,
    available: true,
    contact: '02-4567-8901',
    established: '2019',
    grades: {
      facility: 'A+',
      service: 'A+',
      medical: 'A'
    }
  },
  {
    id: 5,
    name: '평화의 집',
    type: '호스피스',
    location: '대구 중구',
    address: '대구광역시 중구 중앙대로 234',
    price: 120,
    rating: 4.4,
    reviewCount: 28,
    image: '/images/facilities/facility5.jpg',
    description: '종교적 배경을 바탕으로 한 호스피스 케어 센터입니다. 영적 돌봄과 함께 전문적인 의료 서비스를 제공합니다.',
    features: ['종교적 돌봄', '영적 상담', '가족 지원', '통증 관리', '자원봉사 프로그램'],
    capacity: 25,
    available: true,
    contact: '053-5678-9012',
    established: '2017',
    grades: {
      facility: 'B+',
      service: 'A+',
      medical: 'A'
    }
  },
  {
    id: 6,
    name: '건강한 요양원',
    type: '요양원',
    location: '인천 남동구',
    address: '인천광역시 남동구 구월로 567',
    price: 160,
    rating: 4.3,
    reviewCount: 41,
    image: '/images/facilities/facility6.jpg',
    description: '전문 의료진과 다양한 재활 프로그램이 있는 요양원입니다. 치매 전문 케어와 물리치료에 특화되어 있습니다.',
    features: ['치매 전문 케어', '재활 프로그램', '물리치료', '작업치료', '음악치료'],
    capacity: 60,
    available: true,
    contact: '032-6789-0123',
    established: '2016',
    grades: {
      facility: 'A',
      service: 'A',
      medical: 'A+'
    }
  },
  {
    id: 7,
    name: '황금요양원',
    type: '요양원',
    location: '광주 서구',
    address: '광주광역시 서구 상무대로 890',
    price: 140,
    rating: 4.1,
    reviewCount: 35,
    image: '/images/facilities/facility7.jpg',
    description: '합리적인 가격과 좋은 서비스를 제공하는 요양원입니다. 넓은 실내 공간과 아늑한 분위기가 특징입니다.',
    features: ['넓은 실내 공간', '아늑한 분위기', '간병 서비스', '식사 제공', '세탁 서비스'],
    capacity: 45,
    available: true,
    contact: '062-7890-1234',
    established: '2014',
    grades: {
      facility: 'B',
      service: 'B+',
      medical: 'B+'
    }
  },
  {
    id: 8,
    name: '소망의 집',
    type: '호스피스',
    location: '울산 남구',
    address: '울산광역시 남구 삼산로 123',
    price: 135,
    rating: 4.6,
    reviewCount: 24,
    image: '/images/facilities/facility8.jpg',
    description: '환자와 가족의 마음을 위로하는 호스피스 전문 기관입니다. 개별 맞춤 케어와 심리 상담을 제공합니다.',
    features: ['개별 맞춤 케어', '심리 상담', '가족 지원', '종교 서비스', '자원봉사'],
    capacity: 20,
    available: true,
    contact: '052-8901-2345',
    established: '2019',
    grades: {
      facility: 'A',
      service: 'A+',
      medical: 'A'
    }
  },
  {
    id: 9,
    name: '푸른솔 요양원',
    type: '요양원',
    location: '세종 조치원',
    address: '세종특별자치시 조치원읍 세종로 456',
    price: 125,
    rating: 4.0,
    reviewCount: 29,
    image: '/images/facilities/facility9.jpg',
    description: '자연 친화적인 환경에서 편안한 요양 생활을 할 수 있는 요양원입니다. 산책로와 정원이 잘 조성되어 있습니다.',
    features: ['자연 친화적', '산책로', '정원', '레크리에이션', '건강 관리'],
    capacity: 35,
    available: true,
    contact: '044-9012-3456',
    established: '2013',
    grades: {
      facility: 'B+',
      service: 'B+',
      medical: 'B'
    }
  },
  {
    id: 10,
    name: '희망찬 실버타운',
    type: '실버타운',
    location: '강원 춘천시',
    address: '강원도 춘천시 효자로 789',
    price: 220,
    rating: 4.4,
    reviewCount: 52,
    image: '/images/facilities/facility10.jpg',
    description: '호수가 보이는 아름다운 실버타운입니다. 독립적인 생활과 다양한 여가 활동을 즐길 수 있습니다.',
    features: ['호수 전망', '독립 생활', '문화 활동', '스포츠 시설', '카페', '도서관'],
    capacity: 80,
    available: true,
    contact: '033-0123-4567',
    established: '2021',
    grades: {
      facility: 'A+',
      service: 'A',
      medical: 'A'
    }
  },
  {
    id: 11,
    name: '따뜻한 마음 요양원',
    type: '요양원',
    location: '충북 청주시',
    address: '충청북도 청주시 상당구 청남로 012',
    price: 155,
    rating: 4.3,
    reviewCount: 42,
    image: '/images/facilities/facility11.jpg',
    description: '가족 같은 따뜻한 마음으로 어르신들을 모시는 요양원입니다. 개별 케어와 정성스러운 식사를 제공합니다.',
    features: ['가족 같은 분위기', '개별 케어', '정성스러운 식사', '물리치료', '치매 케어'],
    capacity: 55,
    available: true,
    contact: '043-1234-5678',
    established: '2017',
    grades: {
      facility: 'B+',
      service: 'A',
      medical: 'B+'
    }
  },
  {
    id: 12,
    name: '안식의 집',
    type: '호스피스',
    location: '충남 천안시',
    address: '충청남도 천안시 동남구 충절로 345',
    price: 145,
    rating: 4.5,
    reviewCount: 31,
    image: '/images/facilities/facility12.jpg',
    description: '마지막 순간까지 존엄성을 지키며 편안한 임종을 도와드리는 호스피스 센터입니다.',
    features: ['존엄한 임종', '통증 관리', '가족 상담', '종교 서비스', '임종 케어'],
    capacity: 28,
    available: false,
    contact: '041-2345-6789',
    established: '2018',
    grades: {
      facility: 'A',
      service: 'A+',
      medical: 'A+'
    }
  },
  {
    id: 13,
    name: '실버파크',
    type: '실버타운',
    location: '전북 전주시',
    address: '전라북도 전주시 완산구 효자로 678',
    price: 190,
    rating: 4.2,
    reviewCount: 48,
    image: '/images/facilities/facility13.jpg',
    description: '전통 한옥 스타일의 실버타운입니다. 한국의 전통 문화를 체험하며 편안한 노후를 보낼 수 있습니다.',
    features: ['한옥 스타일', '전통 문화', '독립 생활', '문화 체험', '정원', '한방 치료'],
    capacity: 60,
    available: true,
    contact: '063-3456-7890',
    established: '2020',
    grades: {
      facility: 'A',
      service: 'A',
      medical: 'B+'
    }
  },
  {
    id: 14,
    name: '바다뷰 요양원',
    type: '요양원',
    location: '전남 여수시',
    address: '전라남도 여수시 돌산로 901',
    price: 165,
    rating: 4.4,
    reviewCount: 39,
    image: '/images/facilities/facility14.jpg',
    description: '바다가 한눈에 보이는 요양원입니다. 해양 치료와 신선한 바다 공기로 건강을 회복하세요.',
    features: ['바다 전망', '해양 치료', '신선한 공기', '산책로', '물리치료', '영양 관리'],
    capacity: 50,
    available: true,
    contact: '061-4567-8901',
    established: '2016',
    grades: {
      facility: 'A',
      service: 'A',
      medical: 'A'
    }
  },
  {
    id: 15,
    name: '자연힐링 요양원',
    type: '요양원',
    location: '경북 경주시',
    address: '경상북도 경주시 첨성로 234',
    price: 148,
    rating: 4.1,
    reviewCount: 36,
    image: '/images/facilities/facility15.jpg',
    description: '천년 고도 경주의 자연 속에서 힐링할 수 있는 요양원입니다. 역사와 문화가 살아있는 환경에서 편안한 요양 생활을 하세요.',
    features: ['자연 힐링', '역사 문화', '산책로', '정원', '문화 체험', '건강 관리'],
    capacity: 42,
    available: true,
    contact: '054-5678-9012',
    established: '2015',
    grades: {
      facility: 'B+',
      service: 'A',
      medical: 'B+'
    }
  },
  {
    id: 16,
    name: '따뜻한 손길 호스피스',
    type: '호스피스',
    location: '경남 창원시',
    address: '경상남도 창원시 의창구 중앙대로 567',
    price: 138,
    rating: 4.6,
    reviewCount: 27,
    image: '/images/facilities/facility16.jpg',
    description: '환자와 가족에게 따뜻한 손길을 전하는 호스피스 센터입니다. 전문 의료진과 자원봉사자들이 함께합니다.',
    features: ['따뜻한 손길', '전문 의료진', '자원봉사', '가족 지원', '통증 관리', '심리 치료'],
    capacity: 22,
    available: true,
    contact: '055-6789-0123',
    established: '2019',
    grades: {
      facility: 'A',
      service: 'A+',
      medical: 'A'
    }
  },
  {
    id: 17,
    name: '제주 힐링 실버타운',
    type: '실버타운',
    location: '제주 제주시',
    address: '제주특별자치도 제주시 연신로 890',
    price: 250,
    rating: 4.7,
    reviewCount: 58,
    image: '/images/facilities/facility17.jpg',
    description: '제주도의 아름다운 자연 속에서 여유로운 실버 라이프를 즐기세요. 골프장과 온천이 인근에 있어 편리합니다.',
    features: ['제주 자연', '골프장 인근', '온천', '독립 생활', '레저 활동', '건강 관리'],
    capacity: 100,
    available: true,
    contact: '064-7890-1234',
    established: '2022',
    grades: {
      facility: 'A+',
      service: 'A+',
      medical: 'A'
    }
  },
  {
    id: 18,
    name: '사랑채 요양원',
    type: '요양원',
    location: '강원 강릉시',
    address: '강원도 강릉시 해안로 123',
    price: 135,
    rating: 4.2,
    reviewCount: 33,
    image: '/images/facilities/facility18.jpg',
    description: '동해 바다가 보이는 요양원입니다. 전통 한옥의 멋과 현대적 편의시설이 조화된 공간입니다.',
    features: ['동해 바다 전망', '한옥 스타일', '현대적 편의시설', '산책로', '물리치료', '건강 관리'],
    capacity: 38,
    available: true,
    contact: '033-8901-2345',
    established: '2014',
    grades: {
      facility: 'B+',
      service: 'A',
      medical: 'B+'
    }
  },
  {
    id: 19,
    name: '든든한 요양원',
    type: '요양원',
    location: '경기 수원시',
    address: '경기도 수원시 영통구 월드컵로 456',
    price: 175,
    rating: 4.3,
    reviewCount: 44,
    image: '/images/facilities/facility19.jpg',
    description: '수원 화성 근처의 요양원으로 역사적 분위기와 현대적 케어가 조화된 곳입니다. 치매 전문 프로그램이 우수합니다.',
    features: ['역사적 분위기', '치매 전문 프로그램', '현대적 케어', '물리치료', '작업치료', '영양 관리'],
    capacity: 65,
    available: true,
    contact: '031-9012-3456',
    established: '2018',
    grades: {
      facility: 'A',
      service: 'A',
      medical: 'A'
    }
  },
  {
    id: 20,
    name: '마지막 안식처',
    type: '호스피스',
    location: '경기 고양시',
    address: '경기도 고양시 일산동구 중앙로 789',
    price: 160,
    rating: 4.5,
    reviewCount: 26,
    image: '/images/facilities/facility20.jpg',
    description: '환자와 가족이 편안하게 마지막 시간을 보낼 수 있는 호스피스 센터입니다. 24시간 의료진이 상주합니다.',
    features: ['24시간 의료진', '편안한 환경', '가족 지원', '통증 관리', '심리 상담', '종교 서비스'],
    capacity: 35,
    available: false,
    contact: '031-0123-4567',
    established: '2020',
    grades: {
      facility: 'A+',
      service: 'A+',
      medical: 'A+'
    }
  }
];

export default careServices;