# 행복한 여정 - 프로젝트 파일 구조 (현재 → 목표)

## 현재 구조
```
happy-journey/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── README.md
└── vite.config.js
```

## 목표 구조 (다음과 같이 폴더 생성 필요)

```
happy-journey/
├── public/
│   ├── vite.svg                # 기존 파일
│   └── images/                 # 새로 생성
│       ├── facilities/         # 요양원/호스피스 이미지
│       ├── avatars/           # 사용자 아바타
│       └── icons/             # 아이콘 이미지
├── src/
│   ├── components/             # 재사용 가능한 컴포넌트
│   │   ├── common/            # 공통 컴포넌트
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Navigation.jsx
│   │   ├── layout/            # 레이아웃 컴포넌트
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── MainLayout.jsx
│   │   └── ui/                # UI 전용 컴포넌트
│   │       ├── VoiceMessage.jsx
│   │       ├── HealthStatus.jsx
│   │       ├── CareServiceCard.jsx
│   │       ├── FilterDropdown.jsx
│   │       └── RiskBadge.jsx
│   ├── pages/                 # 페이지 컴포넌트
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   └── ForgotPasswordPage.jsx
│   │   ├── dashboard/
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── HealthMonitoring.jsx
│   │   │   └── VoiceMessages.jsx
│   │   ├── care-services/
│   │   │   ├── CareServicesPage.jsx
│   │   │   ├── ServiceDetail.jsx
│   │   │   └── BookingPage.jsx
│   │   ├── phone-service/
│   │   │   ├── PhoneServiceInfo.jsx
│   │   │   ├── CallHistory.jsx
│   │   │   └── Settings.jsx
│   │   ├── profile/
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── FamilyMembers.jsx
│   │   │   └── NotificationSettings.jsx
│   │   └── support/
│   │       ├── HelpPage.jsx
│   │       ├── ContactPage.jsx
│   │       └── FAQPage.jsx
│   ├── hooks/                 # 커스텀 훅
│   │   ├── useAuth.js
│   │   ├── useVoiceMessages.js
│   │   ├── useCareServices.js
│   │   ├── useHealthData.js
│   │   └── useLocalStorage.js
│   ├── contexts/              # React Context
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   ├── NotificationContext.jsx
│   │   └── ServiceContext.jsx
│   ├── services/              # API 서비스
│   │   ├── api/
│   │   │   ├── authApi.js
│   │   │   ├── voiceApi.js
│   │   │   ├── careServicesApi.js
│   │   │   ├── healthApi.js
│   │   │   └── userApi.js
│   │   ├── mockData/          # 목 데이터
│   │   │   ├── voiceMessages.js
│   │   │   ├── careServices.js
│   │   │   ├── healthData.js
│   │   │   └── users.js
│   │   └── utils/
│   │       ├── apiClient.js
│   │       ├── formatters.js
│   │       ├── validators.js
│   │       └── constants.js
│   ├── styles/                # 스타일 파일
│   │   ├── globals.css
│   │   ├── components.css
│   │   ├── utilities.css
│   │   └── variables.css
│   ├── utils/                 # 유틸리티 함수
│   │   ├── dateUtils.js
│   │   ├── formatUtils.js
│   │   ├── validationUtils.js
│   │   ├── storageUtils.js
│   │   └── helpers.js
│   ├── config/                # 설정 파일
│   │   ├── theme.js
│   │   ├── routes.js
│   │   └── constants.js
│   ├── App.jsx                # 메인 앱 컴포넌트
│   ├── main.jsx              # 진입점
│   └── index.css             # 기본 스타일
├── package.json
├── vite.config.js
├── tailwind.config.js
├── .gitignore
├── .env.example
└── README.md
```

## 주요 설계 원칙

### 1. 컴포넌트 분리 전략
- **common/**: 프로젝트 전반에서 재사용되는 기본 UI 컴포넌트
- **ui/**: 비즈니스 로직이 포함된 특화 컴포넌트
- **layout/**: 페이지 구조를 담당하는 레이아웃 컴포넌트
- **pages/**: 라우팅되는 페이지 단위 컴포넌트

### 2. 상태 관리
- **Context API**: 전역 상태 (인증, 테마, 알림)
- **Custom Hooks**: 비즈니스 로직과 데이터 fetching
- **Local State**: 컴포넌트별 UI 상태

### 3. 데이터 관리
- **services/api/**: 실제 API 호출 로직
- **services/mockData/**: 개발/테스트용 목 데이터
- **utils/**: 데이터 변환 및 유틸리티 함수

### 4. 스타일링 전략
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **CSS 모듈**: 컴포넌트별 특화 스타일
- **테마 시스템**: 일관된 디자인 토큰

## 개발 단계별 구현 순서

### Phase 1: 기본 구조 (1주)
1. 프로젝트 설정 및 기본 폴더 구조
2. 공통 컴포넌트 (Button, Input, Card 등)
3. 레이아웃 컴포넌트 (Header, Navigation, Footer)
4. 라우팅 설정

### Phase 2: 인증 시스템 (1주)
1. 로그인/회원가입 페이지
2. AuthContext 및 useAuth 훅
3. 보호된 라우트 구현
4. 사용자 프로필 관리

### Phase 3: 대시보드 (2주)
1. 건강 모니터링 페이지
2. 음성편지 기능
3. 건강 상태 표시
4. 알림 시스템

### Phase 4: 케어 서비스 (2주)
1. 요양원/호스피스 목록 페이지
2. 필터링 및 정렬 기능
3. 상세 정보 페이지
4. 예약 시스템

### Phase 5: 전화 서비스 (1주)
1. 전화 서비스 안내 페이지
2. 통화 기록 관리
3. 설정 페이지

### Phase 6: 고도화 (1주)
1. 반응형 디자인 최적화
2. 성능 최적화
3. 접근성 개선
4. 테스트 코드 작성

## 기술 스택

### 프론트엔드
- **React 18** + **Vite**: 빠른 개발 환경
- **React Router**: 클라이언트 사이드 라우팅
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **Lucide React**: 아이콘 라이브러리
- **React Hook Form**: 폼 관리
- **React Query**: 서버 상태 관리 (향후 API 연동시)

### 개발 도구
- **ESLint**: 코드 품질 관리
- **Prettier**: 코드 포맷팅
- **Husky**: Git 훅 관리
- **Vitest**: 단위 테스트 (향후)

### 배포 및 인프라 (향후)
- **Vercel/Netlify**: 정적 호스팅
- **GitHub Actions**: CI/CD
- **Cloudinary**: 이미지 관리

## 코딩 컨벤션

### 파일명 규칙
- 컴포넌트: PascalCase (예: `VoiceMessage.jsx`)
- 훅: camelCase with 'use' prefix (예: `useAuth.js`)
- 유틸리티: camelCase (예: `dateUtils.js`)
- 상수: UPPER_SNAKE_CASE (예: `API_ENDPOINTS.js`)

### 컴포넌트 구조
```jsx
// 1. imports
import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

// 2. 컴포넌트 정의
const ComponentName = ({ prop1, prop2 }) => {
  // 3. 상태 및 훅
  const [state, setState] = useState(null);
  
  // 4. 이벤트 핸들러
  const handleClick = () => {
    // 로직
  };
  
  // 5. 렌더링
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 6. PropTypes (개발 단계)
ComponentName.propTypes = {
  prop1: PropTypes.string.required,
  prop2: PropTypes.number
};

// 7. 기본값
ComponentName.defaultProps = {
  prop2: 0
};

export default ComponentName;
```

### 폴더별 역할

#### `/components/common/`
재사용 가능한 순수 UI 컴포넌트들로, 비즈니스 로직이 없고 props로만 동작

#### `/components/ui/`
프로젝트 특화된 컴포넌트들로, 도메인 지식이 포함된 컴포넌트

#### `/hooks/`
상태 로직과 사이드 이펙트를 캡슐화한 커스텀 훅들

#### `/services/`
외부 API 통신, 데이터 변환, 비즈니스 로직을 담당

#### `/utils/`
순수 함수들로 구성된 헬퍼 함수들

