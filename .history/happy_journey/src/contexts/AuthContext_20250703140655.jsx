// 인증 컨텍스트 (src/contexts/AuthContext.jsx)
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as authApi from '../services/api/authApi';

export const AuthContext = createContext();

/**
 * 인증 상태 및 함수 제공 컨텍스트
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 로그인 상태 유지(로컬스토리지)
  useEffect(() => {
    const saved = localStorage.getItem('hj_user');
    if (saved) setUser(JSON.parse(saved));
    setLoading(false);
  }, []);

  // 로그인
  const login = async (email, password) => {
    const res = await authApi.login(email, password);
    if (res.success) {
      setUser(res.user);
      localStorage.setItem('hj_user', JSON.stringify(res.user));
    }
    return res;
  };

  // 로그아웃
  const logout = () => {
    setUser(null);
    localStorage.removeItem('hj_user');
  };

  // 회원가입
  const register = async (userInfo) => {
    const res = await authApi.register(userInfo);
    return res;
  };

  // 비밀번호 찾기(이메일 전송 시뮬레이션)
  const forgotPassword = async (email) => {
    return await authApi.forgotPassword(email);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
