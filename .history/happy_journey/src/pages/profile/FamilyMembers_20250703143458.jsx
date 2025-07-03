// 가족 관리 페이지 (src/pages/profile/FamilyMembers.jsx)
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { getFamily } from '../../services/api/userApi';
import Card from '../../components/common/Card';

/**
 * 가족 구성원 관리 페이지
 */
const FamilyMembers = () => {
  const { user } = useAuth();
  const [family, setFamily] = useState([]);

  useEffect(() => {
    if (user?.email) {
      getFamily(user.email).then(setFamily);
    }
  }, [user]);

  return (
    <Card>
      <h1 className="text-2xl font-bold mb-4">가족 구성원</h1>
      {family.length === 0 && <div className="text-gray-500">가족 정보가 없습니다.</div>}
      <ul className="space-y-2">
        {family.map((f, idx) => (
          <li key={idx} className="border-b pb-2">
            <div><span className="font-semibold">이름:</span> {f.name}</div>
            <div><span className="font-semibold">관계:</span> {f.relation}</div>
            <div><span className="font-semibold">이메일:</span> {f.email}</div>
            <div><span className="font-semibold">연락처:</span> {f.phone}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default FamilyMembers;
