// 케어 서비스 상세 페이지 (src/pages/care-services/ServiceDetail.jsx)
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCareServiceById } from '../../services/api/careServicesApi';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import BookingPage from './BookingPage';

/**
 * 케어 서비스 상세 정보 페이지
 */
const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    getCareServiceById(id).then(setService);
  }, [id]);

  if (!service) return <div>로딩 중...</div>;

  return (
    <div>
      <Card className="flex flex-col md:flex-row gap-6 items-center mb-6">
        <img src={service.image} alt={service.name} className="w-48 h-36 object-cover rounded" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{service.name}</h1>
          <div className="text-gray-600 mb-1">{service.type} | {service.location}</div>
          <div className="mb-1">월 <span className="font-semibold">{service.price}만원</span> / 평점 {service.rating}</div>
          <div className="text-sm text-gray-500 mb-2">{service.description}</div>
          <Button onClick={() => setShowBooking(true)} disabled={!service.available}>
            {service.available ? '예약하기' : '예약 불가'}
          </Button>
        </div>
      </Card>
      <Modal isOpen={showBooking} onClose={() => setShowBooking(false)}>
        <BookingPage service={service} onClose={() => setShowBooking(false)} />
      </Modal>
    </div>
  );
};

export default ServiceDetail;
