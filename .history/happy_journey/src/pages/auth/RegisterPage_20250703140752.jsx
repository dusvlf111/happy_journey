// 회원가입 페이지 (src/pages/auth/RegisterPage.jsx)
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

/**
 * 회원가입 폼 페이지
 */
const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');
    const res = await register({ name, email, password, phone });
    if (res.success) {
      setSuccess('회원가입이 완료되었습니다. 로그인 해주세요.');
      setTimeout(() => navigate('/auth/login'), 1200);
    } else {
      setError(res.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white shadow rounded p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">회원가입</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="이름"
        />
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
        <Input
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="휴대폰 번호"
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? '가입 중...' : '회원가입'}
        </Button>
      </form>
      <div className="flex justify-between mt-4 text-sm">
        <Link to="/auth/login" className="text-blue-600 hover:underline">로그인</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
