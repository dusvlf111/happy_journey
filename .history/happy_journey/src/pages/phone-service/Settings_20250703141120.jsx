// 전화 서비스 설정 페이지 (src/pages/phone-service/Settings.jsx)
import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

/**
 * 전화 서비스 설정 페이지 (알림, 수신 시간대, 추가 연락처 등)
 */
const Settings = () => {
  const [time, setTime] = useState('오전 10시');
  const [contact, setContact] = useState('010-1234-5678');
  const [success, setSuccess] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    setSuccess('설정이 저장되었습니다.');
    setTimeout(() => setSuccess(''), 1200);
  };

  return (
    <Card>
      <h1 className="text-2xl font-bold mb-4">전화 서비스 설정</h1>
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">전화 수신 시간대</label>
          <select value={time} onChange={e => setTime(e.target.value)} className="border rounded px-2 py-1 w-full">
            <option>오전 9시</option>
            <option>오전 10시</option>
            <option>오후 1시</option>
            <option>오후 3시</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">추가 연락처(응급시)</label>
          <Input value={contact} onChange={e => setContact(e.target.value)} placeholder="연락처 입력" />
        </div>
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <Button type="submit" className="w-full">저장하기</Button>
      </form>
    </Card>
  );
};

export default Settings;
