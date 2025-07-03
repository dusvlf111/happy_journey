// 비밀번호 찾기 페이지 (src/pages/auth/ForgotPasswordPage.jsx)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

/**
 * 비밀번호 찾기 폼 페이지
 */
const ForgotPasswordPage = () => {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');
    const res = await forgotPassword(email);
    if (res.success) {
      setSuccess(res.message);
    } else {
      setError(res.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white shadow rounded p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">비밀번호 찾기</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="이메일"
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? '처리 중...' : '비밀번호 찾기'}
        </Button>
      </form>
      <div className="flex justify-between mt-4 text-sm">
        <Link to="/auth/login" className="text-blue-600 hover:underline">로그인</Link>
        <Link to="/auth/register" className="text-blue-600 hover:underline">회원가입</Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
