// 케어 서비스 상세 페이지 (src/pages/care-services/ServiceDetail.jsx)
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import careServices from '../../services/mockData/careServices';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';

export default function ServiceDetail() {
  const { id } = useParams();
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const service = careServices.find(s => String(s.id) === String(id));
  
  if (!service) {
    return (
      <div className="service-not-found">
        <h2>서비스를 찾을 수 없습니다</h2>
        <p>요청하신 케어 서비스 정보가 존재하지 않습니다.</p>
        <Link to="/care-services" className="btn btn-primary">
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setShowBookingModal(false);
      setBookingSuccess(false);
      setBookingData({ name: '', phone: '', date: '', message: '' });
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="service-detail-container">
      {/* 뒤로 가기 */}
      <div className="breadcrumb mb-4">
        <Link to="/care-services" className="breadcrumb-link">
          ← 케어 서비스 목록
        </Link>
      </div>

      {/* 서비스 헤더 */}
      <div className="service-header">
        <div className="service-main-info">
          <div className="service-image-large">
            <div className="service-image-placeholder-large">
              {service.type === '요양원' && '🏥'}
              {service.type === '호스피스' && '🏠'}
              {service.type === '실버타운' && '🏢'}
            </div>
            <div className="service-badge-large">
              {service.type}
            </div>
          </div>
          
          <div className="service-info">
            <h1 className="service-name">{service.name}</h1>
            <div className="service-meta">
              <div className="meta-item">
                <span className="meta-icon">📍</span>
                <span>{service.location}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">⭐</span>
                <span>{service.rating} ({service.reviewCount}개 후기)</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">👥</span>
                <span>정원 {service.capacity}명</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📅</span>
                <span>{service.established}년 설립</span>
              </div>
            </div>
            
            <div className="service-price-large">
              <span className="price-amount-large">{service.price}만원</span>
              <span className="price-unit-large">/월</span>
            </div>
            
            <div className="service-status-large">
              {service.available ? (
                <span className="status-available-large">예약 가능</span>
              ) : (
                <span className="status-unavailable-large">예약 마감</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="detail-main">
          {/* 서비스 설명 */}
          <Card>
            <h2 className="section-title">시설 소개</h2>
            <p className="service-description-full">{service.description}</p>
          </Card>

          {/* 주요 특징 */}
          <Card>
            <h2 className="section-title">주요 특징</h2>
            <div className="features-grid">
              {service.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* 평가 정보 */}
          <Card>
            <h2 className="section-title">시설 평가</h2>
            <div className="grades-container">
              <div className="grade-item">
                <div className="grade-label">시설</div>
                <div className={`grade-value grade-${service.grades.facility.toLowerCase()}`}>
                  {service.grades.facility}
                </div>
              </div>
              <div className="grade-item">
                <div className="grade-label">서비스</div>
                <div className={`grade-value grade-${service.grades.service.toLowerCase().replace('+', '-plus')}`}>
                  {service.grades.service}
                </div>
              </div>
              <div className="grade-item">
                <div className="grade-label">의료</div>
                <div className={`grade-value grade-${service.grades.medical.toLowerCase().replace('+', '-plus')}`}>
                  {service.grades.medical}
                </div>
              </div>
            </div>
          </Card>

          {/* 위치 정보 */}
          <Card>
            <h2 className="section-title">위치 정보</h2>
            <div className="location-info">
              <div className="address">
                <span className="address-icon">📍</span>
                <span className="address-text">{service.address}</span>
              </div>
              <div className="contact">
                <span className="contact-icon">📞</span>
                <span className="contact-text">{service.contact}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* 사이드바 */}
        <div className="detail-sidebar">
          <Card>
            <h3 className="sidebar-title">예약 문의</h3>
            <div className="booking-info">
              <div className="price-info">
                <div className="price-label">월 이용료</div>
                <div className="price-value">{service.price}만원</div>
              </div>
              <div className="availability-info">
                <div className="availability-label">예약 가능 여부</div>
                <div className="availability-value">
                  {service.available ? '가능' : '마감'}
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => setShowBookingModal(true)}
              className="btn-full"
              disabled={!service.available}
            >
              {service.available ? '예약 문의하기' : '예약 마감'}
            </Button>
            
            <div className="contact-info">
              <div className="contact-item">
                <span>📞 전화 문의</span>
                <a href={`tel:${service.contact}`} className="contact-link">
                  {service.contact}
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* 예약 모달 */}
      <Modal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)}
        title="예약 문의"
      >
        {bookingSuccess ? (
          <div className="booking-success">
            <div className="success-icon">✅</div>
            <h3>예약 문의가 완료되었습니다!</h3>
            <p>담당자가 곧 연락드릴 예정입니다.</p>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="booking-form">
            <div className="form-group">
              <label className="form-label">이름 *</label>
              <input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleInputChange}
                className="input"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">연락처 *</label>
              <input
                type="tel"
                name="phone"
                value={bookingData.phone}
                onChange={handleInputChange}
                className="input"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">희망 입소 날짜</label>
              <input
                type="date"
                name="date"
                value={bookingData.date}
                onChange={handleInputChange}
                className="input"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">문의 내용</label>
              <textarea
                name="message"
                value={bookingData.message}
                onChange={handleInputChange}
                className="input textarea"
                rows="4"
                placeholder="궁금한 점이나 요청사항을 입력해주세요"
              />
            </div>
            
            <Button type="submit" className="btn-full">
              예약 문의 보내기
            </Button>
          </form>
        )}
      </Modal>
    </div>
  );
}