// 로그인 페이지 (src/pages/auth/LoginPage.jsx)
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Loading from '../../components/common/Loading';

/**
 * 로그인 폼 페이지
 */
const LoginPage = () => {
  const { login, user, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // 이미 로그인 상태면 대시보드로 이동
  React.useEffect(() => {
    if (!loading && user) navigate('/dashboard');
  }, [user, loading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const res = await login(email, password);
    if (res.success) {
      navigate('/dashboard');
    } else {
      setError(res.message);
    }
    setSubmitting(false);
  };

  if (loading) return <Loading />;

  return (
    <div className="max-w-md mx-auto mt-16 bg-white shadow rounded p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="이메일"
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? '로그인 중...' : '로그인'}
        </Button>
      </form>
      <div className="flex justify-between mt-4 text-sm">
        <Link to="/auth/register" className="text-blue-600 hover:underline">회원가입</Link>
        <Link to="/auth/forgot" className="text-blue-600 hover:underline">비밀번호 찾기</Link>
      </div>
    </div>
  );
};

export default LoginPage;
