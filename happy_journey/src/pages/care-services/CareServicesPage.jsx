// 케어서비스 목록 페이지 (src/pages/care-services/CareServicesPage.jsx)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import careServices from '../../services/mockData/careServices';
import Card from '../../components/common/Card';

export default function CareServicesPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  // 필터 옵션
  const typeOptions = [
    { value: 'all', label: '전체' },
    { value: '요양원', label: '요양원' },
    { value: '호스피스', label: '호스피스' },
    { value: '실버타운', label: '실버타운' }
  ];

  const locationOptions = [
    { value: 'all', label: '전국' },
    { value: '서울', label: '서울' },
    { value: '경기', label: '경기' },
    { value: '부산', label: '부산' },
    { value: '대구', label: '대구' },
    { value: '인천', label: '인천' },
    { value: '광주', label: '광주' },
    { value: '울산', label: '울산' },
    { value: '세종', label: '세종' },
    { value: '강원', label: '강원' },
    { value: '충북', label: '충북' },
    { value: '충남', label: '충남' },
    { value: '전북', label: '전북' },
    { value: '전남', label: '전남' },
    { value: '경북', label: '경북' },
    { value: '경남', label: '경남' },
    { value: '제주', label: '제주' }
  ];

  const priceOptions = [
    { value: 'all', label: '전체 가격' },
    { value: '100-150', label: '100-150만원' },
    { value: '150-200', label: '150-200만원' },
    { value: '200-250', label: '200-250만원' },
    { value: '250+', label: '250만원 이상' }
  ];

  const sortOptions = [
    { value: 'rating', label: '평점순' },
    { value: 'price-low', label: '가격 낮은순' },
    { value: 'price-high', label: '가격 높은순' },
    { value: 'name', label: '이름순' }
  ];

  // 필터링 로직
  const filteredServices = careServices.filter(service => {
    const typeMatch = selectedType === 'all' || service.type === selectedType;
    const locationMatch = selectedLocation === 'all' || service.location.includes(selectedLocation);
    
    let priceMatch = true;
    if (priceRange !== 'all') {
      if (priceRange === '100-150') {
        priceMatch = service.price >= 100 && service.price <= 150;
      } else if (priceRange === '150-200') {
        priceMatch = service.price >= 150 && service.price <= 200;
      } else if (priceRange === '200-250') {
        priceMatch = service.price >= 200 && service.price <= 250;
      } else if (priceRange === '250+') {
        priceMatch = service.price >= 250;
      }
    }
    
    return typeMatch && locationMatch && priceMatch;
  });

  // 정렬 로직
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="care-services-container">
      <div className="services-header">
        <h1 className="title mb-4">케어 서비스</h1>
        <p className="text-gray mb-6">
          전국의 요양원, 호스피스, 실버타운 정보를 확인하고 비교해보세요.
        </p>
      </div>

      {/* 필터 및 정렬 */}
      <Card className="mb-6">
        <div className="filters-container">
          <div className="filter-row">
            <div className="filter-group">
              <label className="filter-label">시설 유형</label>
              <select 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                className="filter-select"
              >
                {typeOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">지역</label>
              <select 
                value={selectedLocation} 
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="filter-select"
              >
                {locationOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">가격대</label>
              <select 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="filter-select"
              >
                {priceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">정렬</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* 결과 수 표시 */}
      <div className="results-info mb-4">
        <span className="text-gray">
          총 {sortedServices.length}개의 시설이 있습니다.
        </span>
      </div>

      {/* 서비스 목록 */}
      <div className="services-grid">
        {sortedServices.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🏥</div>
            <div className="empty-state-text">검색 결과가 없습니다</div>
            <div className="empty-state-description">
              다른 조건으로 검색해보세요
            </div>
          </div>
        ) : (
          sortedServices.map(service => (
            <Link 
              key={service.id} 
              to={`/care-services/${service.id}`} 
              className="service-link"
            >
              <Card className="service-card">
                <div className="service-image-container">
                  <div className="service-image-placeholder">
                    {service.type === '요양원' && '🏥'}
                    {service.type === '호스피스' && '🏠'}
                    {service.type === '실버타운' && '🏢'}
                  </div>
                  <div className="service-badge">
                    {service.type}
                  </div>
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.name}</h3>
                  <div className="service-location">
                    📍 {service.location}
                  </div>
                  <div className="service-description">
                    {service.description}
                  </div>
                  
                  <div className="service-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="service-footer">
                    <div className="service-rating">
                      ⭐ {service.rating} ({service.reviewCount}개 후기)
                    </div>
                    <div className="service-price">
                      <span className="price-amount">{service.price}만원</span>
                      <span className="price-unit">/월</span>
                    </div>
                  </div>
                  
                  <div className="service-status">
                    {service.available ? (
                      <span className="status-available">예약 가능</span>
                    ) : (
                      <span className="status-unavailable">예약 마감</span>
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}