// 알림 설정 페이지 (src/pages/profile/NotificationSettings.jsx)
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Card from '../../components/common/Card';

export default function NotificationSettings() {
  const { user } = useAuth();
  if (!user || !user.notification) return <div>알림 설정 정보가 없습니다.</div>;
  const n = user.notification;
  return (
    <Card>
      <h2 className="mb-2">알림 설정</h2>
      <div className="mb-2">푸시: {n.push ? 'ON' : 'OFF'}</div>
      <div className="mb-2">SMS: {n.sms ? 'ON' : 'OFF'}</div>
      <div className="mb-2">이메일: {n.email ? 'ON' : 'OFF'}</div>
      <div>시간: {n.time}</div>
    </Card>
  );
}
