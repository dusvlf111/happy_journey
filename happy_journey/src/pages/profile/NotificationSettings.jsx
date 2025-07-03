// 알림 설정 페이지 (src/pages/profile/NotificationSettings.jsx)
import React, { useState, useEffect } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    push: true,
    sms: false,
    email: true,
    time: '오전 10시'
  });
  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // localStorage에서 현재 사용자 정보 가져오기
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUser(currentUser);
      // 사용자의 알림 설정 불러오기
      if (currentUser.notification) {
        setSettings(currentUser.notification);
      }
    }
  }, []);

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleTimeChange = (e) => {
    setSettings(prev => ({ ...prev, time: e.target.value }));
  };

  const handleSave = () => {
    if (user) {
      // 사용자 정보 업데이트
      const updatedUser = { ...user, notification: settings };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setUser(updatedUser);
      
      setSuccess('알림 설정이 저장되었습니다.');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  if (!user) {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <div>
      <h1 className="title mb-4">알림 설정</h1>
      <Card>
        <div className="notification-settings">
          <div className="setting-item">
            <div className="setting-info">
              <h3>푸시 알림</h3>
              <p>앱 푸시 알림을 받습니다</p>
            </div>
            <div className="setting-control">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.push}
                  onChange={() => handleToggle('push')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>SMS 알림</h3>
              <p>문자 메시지로 알림을 받습니다</p>
            </div>
            <div className="setting-control">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.sms}
                  onChange={() => handleToggle('sms')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>이메일 알림</h3>
              <p>이메일로 알림을 받습니다</p>
            </div>
            <div className="setting-control">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.email}
                  onChange={() => handleToggle('email')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>알림 시간</h3>
              <p>안부 전화 알림을 받을 시간을 설정합니다</p>
            </div>
            <div className="setting-control">
              <select
                value={settings.time}
                onChange={handleTimeChange}
                className="input"
              >
                <option value="오전 9시">오전 9시</option>
                <option value="오전 10시">오전 10시</option>
                <option value="오전 11시">오전 11시</option>
                <option value="오후 2시">오후 2시</option>
                <option value="오후 3시">오후 3시</option>
              </select>
            </div>
          </div>

          {success && (
            <div className="notification notification-success">
              {success}
            </div>
          )}

          <div className="setting-actions">
            <Button onClick={handleSave}>설정 저장</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}