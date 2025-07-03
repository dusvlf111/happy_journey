// 내 정보 페이지 (src/pages/profile/ProfilePage.jsx)
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { getUserByEmail } from '../../services/api/userApi';
import Card from '../../components/common/Card';

/**
 * 내 정보(프로필) 페이지
 */
const ProfilePage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user?.email) {
      getUserByEmail(user.email).then(setProfile);
    }
  }, [user]);

  if (!profile) return <div>로딩 중...</div>;

  return (
    <Card>
      <h1 className="text-2xl font-bold mb-4">내 정보</h1>
      <div className="mb-2"><span className="font-semibold">이름:</span> {profile.name}</div>
      <div className="mb-2"><span className="font-semibold">이메일:</span> {profile.email}</div>
      <div className="mb-2"><span className="font-semibold">연락처:</span> {profile.phone}</div>
      <div className="mb-2"><span className="font-semibold">역할:</span> {profile.role === 'user' ? '고령자' : '보호자'}</div>
    </Card>
  );
};

export default ProfilePage;
