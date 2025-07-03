// 알림 설정 페이지 (src/pages/profile/NotificationSettings.jsx)
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { getNotification, updateNotification } from '../../services/api/userApi';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

/**
 * 알림 설정 페이지
 */
const NotificationSettings = () => {
  const { user } = useAuth();
  const [notification, setNotification] = useState({});
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (user?.email) {
      getNotification(user.email).then(setNotification);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setNotification(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (user?.email) {
      await updateNotification(user.email, notification);
      setSuccess('설정이 저장되었습니다.');
      setTimeout(() => setSuccess(''), 1200);
    }
  };

  return (
    <Card>
      <h1 className="text-2xl font-bold mb-4">알림 설정</h1>
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="font-semibold mr-2">
            <input type="checkbox" name="push" checked={!!notification.push} onChange={handleChange} /> 푸시 알림
          </label>
          <label className="font-semibold mr-2">
            <input type="checkbox" name="sms" checked={!!notification.sms} onChange={handleChange} /> 문자 알림
          </label>
          <label className="font-semibold mr-2">
            <input type="checkbox" name="email" checked={!!notification.email} onChange={handleChange} /> 이메일 알림
          </label>
        </div>
        <div>
          <label className="block font-semibold mb-1">알림 수신 시간대</label>
          <select name="time" value={notification.time || ''} onChange={handleChange} className="border rounded px-2 py-1 w-full">
            <option>오전 9시</option>
            <option>오전 10시</option>
            <option>오후 1시</option>
            <option>오후 3시</option>
          </select>
        </div>
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <Button type="submit" className="w-full">저장하기</Button>
      </form>
    </Card>
  );
};

export default NotificationSettings;
