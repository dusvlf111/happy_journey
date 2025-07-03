// 로그인 페이지 (src/pages/auth/LoginPage.jsx)
import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useSimpleAuth } from '../../hooks/useSimpleAuth';
import users from '../../services/mockData/users';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

/**
 * 로그인 폼 페이지
 */
const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, login } = useSimpleAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // 이미 로그인된 상태라면 리다이렉트
  useEffect(() => {
    if (user) {
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    }
  }, [user, navigate, location]);

  // 저장된 로그인 정보 불러오기
  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';
    
    if (savedEmail && savedRememberMe) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    // 목데이터에서 사용자 찾기
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      // 로그인 성공
      login(foundUser);
      
      // 로그인 정보 저장 여부에 따라 처리
      if (rememberMe) {
        localStorage.setItem('savedEmail', email);
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('savedEmail');
        localStorage.removeItem('rememberMe');
      }
      
      // 원래 가려던 페이지로 이동 (없으면 대시보드)
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
    
    setSubmitting(false);
  };

  // 이미 로그인된 상태라면 로딩 표시
  if (user) {
    return <div>리다이렉트 중...</div>;
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">로그인</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <Input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="아이디 (test)"
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="비밀번호 (test)"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
              />
              <span className="checkmark"></span>
              로그인 정보 저장
            </label>
          </div>

          {error && <div className="form-error">{error}</div>}
          
          <Button type="submit" disabled={submitting} className="btn-full">
            {submitting ? '로그인 중...' : '로그인'}
          </Button>
        </form>
        
        <div className="auth-links">
          <Link to="/auth/register">회원가입</Link>
          <Link to="/auth/forgot">비밀번호 찾기</Link>
        </div>
        
        <div className="demo-info">
          <p><strong>데모 계정:</strong></p>
          <p>아이디: test</p>
          <p>비밀번호: test</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;