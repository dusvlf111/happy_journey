// 가족 관리 페이지 (src/pages/profile/FamilyMembers.jsx)
import React, { useState, useEffect } from 'react';
import Card from '../../components/common/Card';

/**
 * 가족 구성원 관리 페이지
 */
export default function FamilyMembers() {
  const [family, setFamily] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // localStorage에서 현재 사용자 정보 가져오기
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUser(currentUser);
      setFamily(currentUser.family || []);
    }
  }, []);

  if (!user) {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <div>
      <h1 className="title mb-4">가족 구성원</h1>
      {family.length === 0 ? (
        <Card>
          <div className="empty-state">
            <div className="empty-state-icon">👥</div>
            <div className="empty-state-text">등록된 가족이 없습니다</div>
            <div className="empty-state-description">가족을 등록하여 건강 상태를 공유하세요</div>
          </div>
        </Card>
      ) : (
        <div className="family-list">
          {family.map((member, idx) => (
            <Card key={idx}>
              <div className="family-member">
                <div className="member-avatar">{member.name.charAt(0)}</div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <div className="member-details">
                    <div className="detail-item">
                      <span className="detail-label">관계:</span>
                      <span className="detail-value">{member.relation}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">전화번호:</span>
                      <span className="detail-value">{member.phone}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">이메일:</span>
                      <span className="detail-value">{member.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}