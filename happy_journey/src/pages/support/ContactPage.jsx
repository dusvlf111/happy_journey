// 고객지원 문의 페이지 (src/pages/support/ContactPage.jsx)
import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

/**
 * 고객지원 문의 폼 페이지
 */
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'general',
    subject: '',
    message: ''
  });
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const categories = [
    { value: 'general', label: '일반 문의' },
    { value: 'technical', label: '기술 지원' },
    { value: 'service', label: '서비스 문의' },
    { value: 'billing', label: '요금 문의' },
    { value: 'complaint', label: '불만/건의' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // 실제로는 API 호출
    setTimeout(() => {
      setSuccess('문의가 접수되었습니다. 빠른 시일 내 답변드리겠습니다.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: 'general',
        subject: '',
        message: ''
      });
      setSubmitting(false);
      setTimeout(() => setSuccess(''), 5000);
    }, 1000);
  };

  return (
    <div className="support-container">
      <h1 className="title mb-4">고객지원 문의</h1>
      
      <div className="grid grid-cols-2 gap-6">
        {/* 문의 폼 */}
        <Card>
          <h2 className="font-semibold mb-4">문의하기</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">이름 *</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름을 입력하세요"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">이메일 *</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="이메일을 입력하세요"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">전화번호</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="전화번호를 입력하세요"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">문의 유형 *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input"
                required
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">제목 *</label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="문의 제목을 입력하세요"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">문의 내용 *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="문의 내용을 자세히 입력하세요"
                className="input textarea"
                rows="6"
                required
              />
            </div>
            
            {success && (
              <div className="notification notification-success">
                {success}
              </div>
            )}
            
            <Button type="submit" disabled={submitting} className="btn-full">
              {submitting ? '전송 중...' : '문의하기'}
            </Button>
          </form>
        </Card>
        
        {/* 연락처 정보 */}
        <div className="contact-info">
          <Card>
            <h2 className="font-semibold mb-4">연락처 정보</h2>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>고객센터</h4>
                  <p>1588-0000</p>
                  <p className="text-gray">평일 09:00 - 18:00</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>이메일</h4>
                  <p>support@happyjourney.com</p>
                  <p className="text-gray">24시간 접수</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🏢</div>
                <div>
                  <h4>본사</h4>
                  <p>서울특별시 강남구 테헤란로 123</p>
                  <p className="text-gray">행복한 여정 빌딩 10층</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div>
                  <h4>응급상황</h4>
                  <p>24시간 긴급 지원</p>
                  <p className="text-gray">위험도 높음 시 즉시 대응</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card>
            <h2 className="font-semibold mb-4">서비스 시간</h2>
            <div className="service-hours">
              <div className="hour-item">
                <span className="day">평일</span>
                <span className="time">09:00 - 18:00</span>
              </div>
              <div className="hour-item">
                <span className="day">토요일</span>
                <span className="time">09:00 - 13:00</span>
              </div>
              <div className="hour-item">
                <span className="day">일요일/공휴일</span>
                <span className="time">휴무</span>
              </div>
              <div className="hour-item emergency">
                <span className="day">응급상황</span>
                <span className="time">24시간</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;