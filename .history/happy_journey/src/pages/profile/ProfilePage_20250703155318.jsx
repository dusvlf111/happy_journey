// 내 정보 페이지 (src/pages/profile/ProfilePage.jsx)
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Card from '../../components/common/Card';

/**
 * 내 정보(프로필) 페이지
 */
export default function ProfilePage() {
  const { user } = useAuth();
  if (!user) return <div>로그인 필요</div>;
  return (
    <Card>
      <h2 className="title mb-2">내 정보</h2>
      <div className="mb-2">이름: {user.name}</div>
      <div className="mb-2">이메일: {user.email}</div>
      <div className="mb-2">전화번호: {user.phone}</div>
      <div>역할: {user.role}</div>
    </Card>
  );
}
