// 케어 서비스 예약 폼 (src/pages/care-services/BookingPage.jsx)
import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { bookCareService } from '../../services/api/careServicesApi';

/**
 * 케어 서비스 예약 폼
 * @param {object} service - 예약할 서비스 정보
 * @param {function} onClose - 모달 닫기 함수
 */
const BookingPage = ({ service, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');
    if (!name || !phone || !date) {
      setError('모든 정보를 입력해 주세요.');
      setSubmitting(false);
      return;
    }
    const res = await bookCareService({ serviceId: service.id, userName: name, phone, date });
    if (res.success) {
      setSuccess(res.message);
      setTimeout(() => {
        setSuccess('');
        onClose();
      }, 1200);
    } else {
      setError(res.message || '예약에 실패했습니다.');
    }
    setSubmitting(false);
  };

  return (
    <div className="w-80">
      <h2 className="text-lg font-bold mb-4">{service.name} 예약</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="이름" />
        <Input value={phone} onChange={e => setPhone(e.target.value)} placeholder="연락처" />
        <Input type="date" value={date} onChange={e => setDate(e.target.value)} placeholder="방문 희망일" />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? '예약 중...' : '예약하기'}
        </Button>
      </form>
    </div>
  );
};

export default BookingPage;
