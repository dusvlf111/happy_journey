// 전화 서비스 안내 페이지 (src/pages/phone-service/PhoneServiceInfo.jsx)
import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

/**
 * 전화 서비스 안내 및 소개
 */
export default function PhoneServiceInfo() {
  return (
    <div className="phone-service-container">
      {/* 서비스 소개 헤더 */}
      <div className="service-hero">
        <Card className="hero-card">
          <div className="hero-content">
            <h1 className="hero-title gradient-text">📞 행복한 여정 전화 서비스</h1>
            <p className="hero-subtitle">
              "마지막까지, 마음을 다해 함께합니다.<br />
              당신의 행복한 여정을 위해"
            </p>
            <div className="hero-description">
              AI 기반 안부 전화와 음성편지로 어르신들의 건강과 안전을 24시간 돌봅니다.
            </div>
          </div>
        </Card>
      </div>

      {/* 주요 서비스 */}
      <div className="service-features">
        <h2 className="section-title">🌟 주요 서비스</h2>
        <div className="grid grid-cols-3">
          <Card className="feature-card hover-lift">
            <div className="feature-icon">🤖</div>
            <h3 className="feature-title">AI 안부 전화</h3>
            <p className="feature-description">
              매일 정해진 시간에 AI가 친근하게 안부를 묻고 건강 상태를 확인합니다.
            </p>
            <ul className="feature-list">
              <li>✅ 맞춤형 대화</li>
              <li>✅ 건강 상태 분석</li>
              <li>✅ 응급상황 감지</li>
            </ul>
          </Card>

          <Card className="feature-card hover-lift">
            <div className="feature-icon">💌</div>
            <h3 className="feature-title">음성편지 서비스</h3>
            <p className="feature-description">
              가족과 따뜻한 음성편지를 주고받으며 마음의 유대감을 이어갑니다.
            </p>
            <ul className="feature-list">
              <li>✅ 가족 간 음성 메시지</li>
              <li>✅ 예약 발송 기능</li>
              <li>✅ 특별한 날 알림</li>
            </ul>
          </Card>

          <Card className="feature-card hover-lift">
            <div className="feature-icon">🚨</div>
            <h3 className="feature-title">응급상황 대응</h3>
            <p className="feature-description">
              위험 상황 감지 시 즉시 보호자에게 알림을 보내고 필요시 응급 서비스와 연결합니다.
            </p>
            <ul className="feature-list">
              <li>✅ 실시간 위험도 분석</li>
              <li>✅ 보호자 즉시 알림</li>
              <li>✅ 119 연계 서비스</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* 서비스 프로세스 */}
      <Card className="process-card">
        <h2 className="section-title">📋 서비스 이용 프로세스</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>📱 회원가입 및 설정</h4>
              <p>간단한 정보 입력 후 전화 수신 시간을 설정합니다.</p>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>📞 정기 안부 전화</h4>
              <p>매일 설정된 시간에 AI가 친근하게 안부를 확인합니다.</p>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>🤖 AI 건강 분석</h4>
              <p>대화 내용을 분석하여 건강 상태와 위험도를 판단합니다.</p>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>📊 보고서 전송</h4>
              <p>가족에게 건강 상태 보고서와 필요시 응급 알림을 전송합니다.</p>
            </div>
          </div>
        </div>
      </Card>

      {/* 서비스 특징 */}
      <div className="service-benefits">
        <h2 className="section-title">💎 서비스 특징</h2>
        <div className="grid grid-cols-2">
          <Card className="benefit-card hover-lift">
            <div className="benefit-icon">🏥</div>
            <h3>전문 의료진 검증</h3>
            <p>의료 전문가들이 검증한 건강 체크 항목과 응급상황 판단 기준을 적용합니다.</p>
          </Card>

          <Card className="benefit-card hover-lift">
            <div className="benefit-icon">🔒</div>
            <h3>개인정보 보호</h3>
            <p>모든 통화와 건강 데이터는 암호화되어 안전하게 보관됩니다.</p>
          </Card>

          <Card className="benefit-card hover-lift">
            <div className="benefit-icon">📈</div>
            <h3>건강 트렌드 분석</h3>
            <p>장기간의 건강 데이터를 분석하여 건강 변화 추이를 제공합니다.</p>
          </Card>

          <Card className="benefit-card hover-lift">
            <div className="benefit-icon">👨‍⚕️</div>
            <h3>의료진 연계</h3>
            <p>필요시 협력 병원의 의료진과 즉시 상담할 수 있는 서비스를 제공합니다.</p>
          </Card>
        </div>
      </div>

      {/* 이용 요금 및 문의 */}
      <div className="grid grid-cols-2">
        <Card className="pricing-card hover-lift">
          <h3 className="pricing-title">💰 이용 요금</h3>
          <div className="pricing-content">
            <div className="price-item">
              <div className="price-name">기본 전화 서비스</div>
              <div className="price-value">무료</div>
              <div className="price-description">매일 안부 전화, 기본 건강 체크</div>
            </div>
            <div className="price-item">
              <div className="price-name">프리미엄 서비스</div>
              <div className="price-value">월 29,000원</div>
              <div className="price-description">음성편지, 상세 건강 분석, 24시간 응급 대응</div>
            </div>
          </div>
        </Card>

        <Card className="contact-card hover-lift">
          <h3 className="contact-title">📞 문의 및 신청</h3>
          <div className="contact-content">
            <div className="contact-item">
              <div className="contact-method">전화 문의</div>
              <div className="contact-info">1588-0000</div>
              <div className="contact-time">평일 09:00 - 18:00</div>
            </div>
            <div className="contact-item">
              <div className="contact-method">온라인 문의</div>
              <div className="contact-info">support@happyjourney.com</div>
              <div className="contact-time">24시간 접수</div>
            </div>
            <Button className="contact-button btn-full">
              📝 서비스 신청하기
            </Button>
          </div>
        </Card>
      </div>

      {/* FAQ */}
      <Card className="faq-card">
        <h3 className="faq-title">❓ 자주 묻는 질문</h3>
        <div className="faq-list">
          <details className="faq-item">
            <summary>전화를 받지 못했을 때는 어떻게 되나요?</summary>
            <p>30분 후 재시도하며, 총 3회까지 시도합니다. 모든 시도가 실패하면 등록된 보호자에게 즉시 알림이 전송됩니다.</p>
          </details>
          <details className="faq-item">
            <summary>AI가 어떻게 건강 상태를 판단하나요?</summary>
            <p>음성 톤, 응답 속도, 언어 패턴, 증상 호소 등을 종합적으로 분석하여 0-100점의 위험도 점수를 산정합니다.</p>
          </details>
          <details className="faq-item">
            <summary>개인정보는 안전한가요?</summary>
            <p>모든 통화 내용과 건강 데이터는 암호화되어 저장되며, 개인정보 보호법을 준수합니다.</p>
          </details>
        </div>
      </Card>
    </div>
  );
}