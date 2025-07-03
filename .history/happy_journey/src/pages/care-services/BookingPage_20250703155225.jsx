// 케어서비스 예약 페이지 (src/pages/care-services/BookingPage.jsx)
import React, { useState } from 'react';
import Card from '../../components/common/Card';

export default function BookingPage() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <Card>
      <h2 className="title mb-2">서비스 예약</h2>
      {success ? (
        <div className="text-center">예약이 완료되었습니다!</div>
      ) : (
        <form onSubmit={handleSubmit} className="text-center">
          <input
            className="input mb-2"
            placeholder="이름"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          /><br />
          <input
            className="input mb-2"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          /><br />
          <button className="btn" type="submit">예약하기</button>
        </form>
      )}
    </Card>
  );
}
