// 가족 관리 페이지 (src/pages/profile/FamilyMembers.jsx)
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Card from '../../components/common/Card';

/**
 * 가족 구성원 관리 페이지
 */
export default function FamilyMembers() {
  const { user } = useAuth();
  if (!user || !user.family) return <div>가족 정보가 없습니다.</div>;
  return (
    <Card>
      <h2 className="mb-2">가족 구성원</h2>
      <ul>
        {user.family.map((member, idx) => (
          <li key={idx} className="mb-2">
            {member.name} ({member.relation}) - {member.phone}
          </li>
        ))}
      </ul>
    </Card>
  );
}
