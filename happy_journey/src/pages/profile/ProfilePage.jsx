// 내 정보 페이지 (src/pages/profile/ProfilePage.jsx)
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useSimpleAuth } from '../../hooks/useSimpleAuth';

/**
 * 내 정보(프로필) 페이지 - 수정 가능
 */
export default function ProfilePage() {
  const navigate = useNavigate();
  const { logout } = useSimpleAuth();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  useEffect(() => {
    // localStorage에서 현재 사용자 정보 가져오기
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUser(currentUser);
      setEditData({
        name: currentUser.name,
        phone: currentUser.phone,
        address: currentUser.address || '',
        emergencyContact: currentUser.emergencyContact || ''
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    try {
      // 사용자 정보 업데이트
      const updatedUser = {
        ...user,
        name: editData.name,
        phone: editData.phone,
        address: editData.address,
        emergencyContact: editData.emergencyContact
      };

      // localStorage 업데이트
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIsEditing(false);
      setSuccess('정보가 성공적으로 업데이트되었습니다.');
      setError('');
      
      // 성공 메시지 3초 후 제거
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('정보 업데이트 중 오류가 발생했습니다.');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({
      name: user.name,
      phone: user.phone,
      address: user.address || '',
      emergencyContact: user.emergencyContact || ''
    });
    setError('');
  };

  if (!user) {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar pulse">{user.name.charAt(0)}</div>
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p className="user-role-badge">
            {user.role === 'user' ? '👤 사용자' : '👥 보호자'}
          </p>
        </div>
        <div className="profile-actions">
          {!isEditing ? (
            <Button 
              onClick={() => setIsEditing(true)}
              className="btn-secondary"
            >
              ✏️ 정보 수정
            </Button>
          ) : (
            <div className="edit-actions">
              <Button onClick={handleSave} className="btn-primary">
                💾 저장
              </Button>
              <Button onClick={handleCancel} className="btn-secondary">
                ❌ 취소
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Card className="hover-lift">
        <h2 className="title mb-4">📋 내 정보</h2>
        
        {success && (
          <div className="notification notification-success slide-up">
            ✅ {success}
          </div>
        )}
        
        {error && (
          <div className="notification notification-error slide-up">
            ❌ {error}
          </div>
        )}

        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-label">👤 이름:</span>
            {isEditing ? (
              <Input
                name="name"
                value={editData.name}
                onChange={handleInputChange}
                className="detail-input"
              />
            ) : (
              <span className="detail-value">{user.name}</span>
            )}
          </div>
          
          <div className="detail-item">
            <span className="detail-label">📧 이메일:</span>
            <span className="detail-value">{user.email}</span>
            <span className="detail-note">(변경 불가)</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">📞 전화번호:</span>
            {isEditing ? (
              <Input
                name="phone"
                value={editData.phone}
                onChange={handleInputChange}
                className="detail-input"
                placeholder="전화번호를 입력하세요"
              />
            ) : (
              <span className="detail-value">{user.phone}</span>
            )}
          </div>
          
          <div className="detail-item">
            <span className="detail-label">🏠 주소:</span>
            {isEditing ? (
              <Input
                name="address"
                value={editData.address}
                onChange={handleInputChange}
                className="detail-input"
                placeholder="주소를 입력하세요"
              />
            ) : (
              <span className="detail-value">{user.address || '미입력'}</span>
            )}
          </div>
          
          <div className="detail-item">
            <span className="detail-label">🚨 긴급 연락처:</span>
            {isEditing ? (
              <Input
                name="emergencyContact"
                value={editData.emergencyContact}
                onChange={handleInputChange}
                className="detail-input"
                placeholder="긴급 연락처를 입력하세요"
              />
            ) : (
              <span className="detail-value">{user.emergencyContact || '미입력'}</span>
            )}
          </div>
          
          <div className="detail-item">
            <span className="detail-label">👥 역할:</span>
            <span className="detail-value">
              {user.role === 'user' ? '사용자' : '보호자'}
            </span>
          </div>
          
          {user.joinDate && (
            <div className="detail-item">
              <span className="detail-label">📅 가입일:</span>
              <span className="detail-value">{user.joinDate}</span>
            </div>
          )}
          
          {user.age && (
            <div className="detail-item">
              <span className="detail-label">🎂 나이:</span>
              <span className="detail-value">{user.age}세</span>
            </div>
          )}
          
          {user.medicalHistory && user.medicalHistory.length > 0 && (
            <div className="detail-item">
              <span className="detail-label">🏥 병력:</span>
              <span className="detail-value">
                {user.medicalHistory.map((condition, index) => (
                  <span key={index} className="medical-badge">
                    {condition}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>
      </Card>

      {/* 추가 정보 카드 */}
      <div className="grid grid-cols-2 mt-6">
        <Card className="hover-lift">
          <h3 className="font-semibold mb-3">🔗 빠른 링크</h3>
          <div className="quick-links">
            <a href="/profile/family" className="quick-link">
              👨‍👩‍👧‍👦 가족 구성원 관리
            </a>
            <a href="/profile/notification" className="quick-link">
              🔔 알림 설정
            </a>
            <a href="/dashboard/health" className="quick-link">
              💊 건강 기록 보기
            </a>
            <a href="/phone-service" className="quick-link">
              📞 전화 서비스 설정
            </a>
          </div>
        </Card>

        <Card className="hover-lift">
          <h3 className="font-semibold mb-3">📊 활동 요약</h3>
          <div className="activity-summary">
            <div className="activity-item">
              <span className="activity-icon">📞</span>
              <span className="activity-text">이번 달 안부 전화: 15회</span>
            </div>
            <div className="activity-item">
              <span className="activity-icon">💌</span>
              <span className="activity-text">받은 음성편지: {user.role === 'user' ? '5개' : '0개'}</span>
            </div>
            <div className="activity-item">
              <span className="activity-icon">🏥</span>
              <span className="activity-text">건강 체크: 정상</span>
            </div>
          </div>
        </Card>
      </div>

      {/* 로그아웃 버튼 */}
      <Card className="logout-card">
        <div className="logout-section">
          <h3 className="logout-title">🚪 계정 관리</h3>
          <p className="logout-description">
            서비스를 종료하시려면 로그아웃 버튼을 클릭해주세요.
          </p>
          <Button 
            onClick={handleLogout}
            className="btn-danger logout-button"
          >
            🚪 로그아웃
          </Button>
        </div>
      </Card>
    </div>
  );
}