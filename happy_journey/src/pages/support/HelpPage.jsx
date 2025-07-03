// 고객지원 도움말 페이지 (src/pages/support/HelpPage.jsx)
import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const helpSections = [
  {
    id: 'getting-started',
    title: '서비스 시작하기',
    icon: '🚀',
    content: [
      {
        title: '1. 회원가입',
        description: '이메일과 기본 정보를 입력하여 계정을 생성하세요.',
        steps: [
          '회원가입 페이지에서 이메일, 이름, 전화번호 입력',
          '이메일 인증 완료',
          '기본 건강 정보 입력 (선택사항)'
        ]
      },
      {
        title: '2. 전화 서비스 신청',
        description: 'AI 기반 안부 전화 서비스를 신청하세요.',
        steps: [
          '대시보드에서 "전화 서비스 신청" 클릭',
          '수신 희망 시간 설정',
          '24시간 내 서비스 시작'
        ]
      },
      {
        title: '3. 가족 등록',
        description: '보호자 가족을 등록하여 건강 상태를 공유하세요.',
        steps: [
          '내 정보 > 가족 구성원 메뉴 접속',
          '가족의 이름, 관계, 연락처 입력',
          '알림 설정 완료'
        ]
      }
    ]
  },
  {
    id: 'phone-service',
    title: '전화 서비스 이용법',
    icon: '📞',
    content: [
      {
        title: '안부 전화 받기',
        description: '매일 설정한 시간에 AI가 안부 전화를 드립니다.',
        steps: [
          '설정한 시간에 전화 수신',
          '건강 상태 관련 질문에 답변',
          '음성편지 확인 및 녹음',
          '통화 종료 후 자동으로 건강 상태 분석'
        ]
      },
      {
        title: '음성편지 기능',
        description: '가족과 따뜻한 음성편지를 주고받으세요.',
        steps: [
          '보호자가 보낸 음성편지 청취',
          '답장 음성편지 녹음 (최대 2분)',
          '특별한 날 예약 발송 가능'
        ]
      },
      {
        title: '응급상황 대응',
        description: '위험 상황 감지 시 즉시 대응합니다.',
        steps: [
          'AI가 응답 내용 분석하여 위험도 판단',
          '위험도 높음 시 보호자에게 즉시 알림',
          '필요시 119 신고 또는 병원 연계'
        ]
      }
    ]
  },
  {
    id: 'health-monitoring',
    title: '건강 모니터링',
    icon: '💊',
    content: [
      {
        title: '건강 상태 확인',
        description: '일일 건강 상태를 체계적으로 관리하세요.',
        steps: [
          '대시보드에서 실시간 건강 지수 확인',
          '심박수, 혈압, 혈당 등 주요 지표 모니터링',
          '위험도 등급별 맞춤 관리'
        ]
      },
      {
        title: '월간 건강 보고서',
        description: '한 달간의 건강 변화를 종합적으로 분석합니다.',
        steps: [
          '매월 말 자동 생성',
          '건강 트렌드 분석',
          '의료진 상담 시 활용 가능'
        ]
      }
    ]
  },
  {
    id: 'care-services',
    title: '케어 서비스',
    icon: '🏥',
    content: [
      {
        title: '요양원 찾기',
        description: '전국 요양원 정보를 한눈에 비교하세요.',
        steps: [
          '지역별, 가격대별 검색',
          '시설 상세 정보 및 후기 확인',
          '온라인 예약 및 상담 신청'
        ]
      },
      {
        title: '호스피스 케어',
        description: '전문 호스피스 시설을 찾아드립니다.',
        steps: [
          '호스피스 전문 시설 검색',
          '의료진 정보 및 프로그램 확인',
          '가족 상담 서비스 제공'
        ]
      }
    ]
  },
  {
    id: 'app-features',
    title: '앱 기능 안내',
    icon: '📱',
    content: [
      {
        title: '알림 설정',
        description: '원하는 방식으로 알림을 받으세요.',
        steps: [
          '푸시 알림, SMS, 이메일 선택',
          '알림 수신 시간 설정',
          '응급상황 알림 별도 설정'
        ]
      },
      {
        title: '데이터 관리',
        description: '개인 정보와 건강 데이터를 안전하게 관리합니다.',
        steps: [
          '암호화된 데이터 저장',
          '데이터 백업 및 복구',
          '개인정보 보호 정책 준수'
        ]
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: '문제 해결',
    icon: '🔧',
    content: [
      {
        title: '전화를 받지 못했을 때',
        description: '전화를 놓쳤을 때의 대처 방법입니다.',
        steps: [
          '30분 후 자동 재시도 (최대 3회)',
          '모든 시도 실패 시 보호자에게 알림',
          '대시보드에서 미수신 기록 확인'
        ]
      },
      {
        title: '앱이 작동하지 않을 때',
        description: '기술적 문제 해결 방법입니다.',
        steps: [
          '앱 재시작 및 업데이트 확인',
          '네트워크 연결 상태 확인',
          '고객센터 문의 (1588-0000)'
        ]
      }
    ]
  }
];

export default function HelpPage() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = helpSections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.content.some(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="help-container">
      <div className="help-header">
        <h1 className="title">도움말</h1>
        <p className="text-gray">행복한 여정 서비스 이용 가이드</p>
      </div>

      <div className="help-layout">
        {/* 사이드바 메뉴 */}
        <div className="help-sidebar">
          <Card>
            <h3 className="sidebar-title">목차</h3>
            <nav className="help-nav">
              {helpSections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                >
                  <span className="nav-icon">{section.icon}</span>
                  <span className="nav-text">{section.title}</span>
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="help-content">
          {helpSections
            .filter(section => section.id === activeSection)
            .map(section => (
              <div key={section.id}>
                <div className="section-header">
                  <div className="section-icon">{section.icon}</div>
                  <h2 className="section-title">{section.title}</h2>
                </div>

                <div className="section-content">
                  {section.content.map((item, index) => (
                    <Card key={index} className="help-item">
                      <h3 className="item-title">{item.title}</h3>
                      <p className="item-description">{item.description}</p>
                      <div className="item-steps">
                        {item.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="step-item">
                            <div className="step-number">{stepIndex + 1}</div>
                            <div className="step-text">{step}</div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* 추가 도움말 */}
      <Card>
        <div className="help-footer">
          <h3>더 많은 도움이 필요하세요?</h3>
          <p className="text-gray mb-4">
            위의 가이드로 해결되지 않는 문제가 있으시면 언제든지 연락주세요.
          </p>
          <div className="help-actions">
            <Button onClick={() => window.location.href = '/support/contact'}>
              문의하기
            </Button>
            <Button 
              onClick={() => window.location.href = '/support/faq'}
              className="btn-secondary"
            >
              FAQ 보기
            </Button>
            <Button 
              onClick={() => window.open('tel:1588-0000')}
              className="btn-secondary"
            >
              📞 전화 상담
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}