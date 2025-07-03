// 내 정보 페이지 (src/pages/profile/ProfilePage.jsx)
import React, { useState, useEffect } from 'react';
import Card from '../../components/common/Card';

/**
 * 내 정보(프로필) 페이지
 */
export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // localStorage에서 현재 사용자 정보 가져오기
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  if (!user) {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">{user.name.charAt(0)}</div>
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      
      <Card>
        <h2 className="title mb-4">내 정보</h2>
        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-label">이름:</span>
            <span className="detail-value">{user.name}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">이메일:</span>
            <span className="detail-value">{user.email}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">전화번호:</span>
            <span className="detail-value">{user.phone}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">역할:</span>
            <span className="detail-value">{user.role === 'user' ? '사용자' : '보호자'}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}