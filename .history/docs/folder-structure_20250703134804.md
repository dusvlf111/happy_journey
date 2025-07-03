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