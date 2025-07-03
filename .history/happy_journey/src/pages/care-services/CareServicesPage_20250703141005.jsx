// 케어 서비스 목록 페이지 (src/pages/care-services/CareServicesPage.jsx)
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCareServices } from '../../services/api/careServicesApi';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

/**
 * 케어 서비스(요양원/호스피스) 전체 목록
 */
const CareServicesPage = () => {
  const [services, setServices] = useState([]);
  const [filter, setFilter] = useState('전체');
  const [sort, setSort] = useState('기본');

  useEffect(() => {
    getCareServices().then(setServices);
  }, []);

  // 필터/정렬 적용
  const filtered = services
    .filter(s => filter === '전체' || s.type === filter)
    .sort((a, b) => {
      if (sort === '가격↑') return a.price - b.price;
      if (sort === '가격↓') return b.price - a.price;
      if (sort === '평점') return b.rating - a.rating;
      return 0;
    });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">케어 서비스 목록</h1>
      <div className="flex gap-4 mb-4">
        <select value={filter} onChange={e => setFilter(e.target.value)} className="border rounded px-2 py-1">
          <option value="전체">전체</option>
          <option value="요양원">요양원</option>
          <option value="호스피스">호스피스</option>
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)} className="border rounded px-2 py-1">
          <option value="기본">기본 정렬</option>
          <option value="가격↑">가격 낮은순</option>
          <option value="가격↓">가격 높은순</option>
          <option value="평점">평점순</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map(service => (
          <Card key={service.id} className="flex flex-col md:flex-row gap-4 items-center">
            <img src={service.image} alt={service.name} className="w-32 h-24 object-cover rounded" />
            <div className="flex-1">
              <h2 className="font-bold text-lg">{service.name}</h2>
              <div className="text-sm text-gray-600 mb-1">{service.type} | {service.location}</div>
              <div className="text-sm mb-1">월 {service.price}만원 / 평점 {service.rating}</div>
              <div className="text-xs text-gray-500 mb-2">{service.description}</div>
              <Link to={`/care-services/${service.id}`}>
                <Button className="mt-1">상세보기</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CareServicesPage;
