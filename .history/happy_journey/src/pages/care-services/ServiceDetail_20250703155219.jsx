// 케어 서비스 상세 페이지 (src/pages/care-services/ServiceDetail.jsx)
import React from 'react';
import { useParams } from 'react-router-dom';
import careServices from '../../services/mockData/careServices';
import Card from '../../components/common/Card';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = careServices.find(s => String(s.id) === String(id));
  if (!service) return <div>서비스를 찾을 수 없습니다.</div>;
  return (
    <Card>
      <h2 className="title mb-2">{service.name}</h2>
      <div className="mb-2">{service.description}</div>
      <div className="mb-2">위치: {service.location}</div>
      <div className="mb-2">가격: <b>{service.price?.toLocaleString()}원</b></div>
      <div className="mb-2">평점: {service.rating}</div>
      <img src={service.image} alt={service.name} style={{maxWidth:300, borderRadius:8}} />
    </Card>
  );
}
