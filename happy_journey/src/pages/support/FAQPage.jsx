// FAQ 페이지 (src/pages/support/FAQPage.jsx)
import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';

const faqs = [
  {
    id: 1,
    category: 'service',
    question: '서비스 이용 요금이 있나요?',
    answer: '행복한 여정의 기본 전화 모니터링 서비스는 무료로 제공됩니다. 추가 케어 서비스나 프리미엄 기능은 별도 요금이 발생할 수 있습니다.'
  },
  {
    id: 2,
    category: 'service',
    question: '전화 서비스는 어떻게 신청하나요?',
    answer: '회원가입 후 대시보드에서 "전화 서비스 신청" 버튼을 클릭하여 간단히 신청할 수 있습니다. 신청 후 24시간 내에 서비스가 시작됩니다.'
  },
  {
    id: 3,
    category: 'family',
    question: '가족도 알림을 받을 수 있나요?',
    answer: '네, 가족 구성원을 등록하시면 보호자도 건강 상태 알림을 받을 수 있습니다. 내 정보 > 가족 구성원에서 등록해주세요.'
  },
  {
    id: 4,
    category: 'technical',
    question: '전화를 받지 못했을 때는 어떻게 되나요?',
    answer: '전화를 받지 못하시면 30분 후 재시도하며, 총 3회까지 시도합니다. 모든 시도가 실패하면 등록된 보호자에게 즉시 알림이 전송됩니다.'
  },
  {
    id: 5,
    category: 'technical',
    question: '음성편지는 어떻게 보내나요?',
    answer: '보호자 앱에서 "음성편지 보내기" 기능을 사용하거나, 안부 전화 중에 음성편지를 녹음할 수 있습니다. 최대 2분까지 녹음 가능합니다.'
  },
  {
    id: 6,
    category: 'health',
    question: '건강 상태는 어떻게 판단하나요?',
    answer: 'AI가 전화 통화 중 응답 내용을 분석하여 증상 유무를 판단하고, 0-100점 위험도 점수를 산정합니다. 71점 이상 시 응급상황으로 분류됩니다.'
  },
  {
    id: 7,
    category: 'health',
    question: '응급상황 시 어떻게 대응하나요?',
    answer: '위험도 71점 이상 시 5분 내로 보호자에게 즉시 알림이 전송되며, 상황에 따라 119 신고 또는 병원 연계 서비스를 제공합니다.'
  },
  {
    id: 8,
    category: 'account',
    question: '계정 정보는 어떻게 변경하나요?',
    answer: '내 정보 페이지에서 이름, 전화번호 등 기본 정보를 변경할 수 있습니다. 이메일 변경 시에는 고객센터(1588-0000)로 문의해주세요.'
  },
  {
    id: 9,
    category: 'account',
    question: '서비스 해지는 어떻게 하나요?',
    answer: '고객센터로 연락하시거나 설정 > 계정 관리에서 해지 신청이 가능합니다. 해지 시 모든 데이터는 30일 후 완전 삭제됩니다.'
  },
  {
    id: 10,
    category: 'care',
    question: '요양원 정보는 어떻게 확인하나요?',
    answer: '케어 서비스 페이지에서 지역별, 가격대별로 요양원과 호스피스 시설 정보를 확인할 수 있습니다. 실시간 예약도 가능합니다.'
  }
];

const categories = [
  { value: 'all', label: '전체', icon: '📋' },
  { value: 'service', label: '서비스 이용', icon: '🔧' },
  { value: 'technical', label: '기술 지원', icon: '💻' },
  { value: 'health', label: '건강 모니터링', icon: '💊' },
  { value: 'family', label: '가족 서비스', icon: '👨‍👩‍👧‍👦' },
  { value: 'account', label: '계정 관리', icon: '👤' },
  { value: 'care', label: '케어 서비스', icon: '🏥' }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1 className="title">자주 묻는 질문</h1>
        <p className="text-gray">행복한 여정 서비스에 대한 궁금한 점을 해결해드립니다.</p>
      </div>

      {/* 검색 및 필터 */}
      <Card>
        <div className="faq-controls">
          <div className="search-box">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="질문을 검색해보세요..."
              className="search-input"
            />
          </div>
          
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`category-filter ${selectedCategory === cat.value ? 'active' : ''}`}
              >
                <span className="category-icon">{cat.icon}</span>
                <span className="category-label">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* FAQ 목록 */}
      <div className="faq-list">
        {filteredFaqs.length === 0 ? (
          <Card>
            <div className="empty-state">
              <div className="empty-state-icon">🔍</div>
              <div className="empty-state-text">검색 결과가 없습니다</div>
              <div className="empty-state-description">
                다른 검색어나 카테고리를 선택해보세요
              </div>
            </div>
          </Card>
        ) : (
          filteredFaqs.map(faq => (
            <Card key={faq.id} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleExpanded(faq.id)}
              >
                <div className="question-content">
                  <span className="question-icon">❓</span>
                  <span className="question-text">{faq.question}</span>
                </div>
                <div className={`expand-icon ${expandedItems.has(faq.id) ? 'expanded' : ''}`}>
                  ▼
                </div>
              </div>
              
              {expandedItems.has(faq.id) && (
                <div className="faq-answer">
                  <div className="answer-content">
                    <span className="answer-icon">💡</span>
                    <span className="answer-text">{faq.answer}</span>
                  </div>
                </div>
              )}
            </Card>
          ))
        )}
      </div>

      {/* 추가 도움말 */}
      <Card>
        <div className="help-section">
          <h3>원하는 답변을 찾지 못하셨나요?</h3>
          <p className="text-gray mb-4">
            더 자세한 도움이 필요하시면 고객센터로 문의해주세요.
          </p>
          <div className="help-actions">
            <a href="/support/contact" className="btn btn-primary">
              문의하기
            </a>
            <a href="tel:1588-0000" className="btn btn-secondary">
              📞 1588-0000
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}