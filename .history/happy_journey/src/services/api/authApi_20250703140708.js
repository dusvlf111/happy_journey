// 인증 관련 API (src/services/api/authApi.js)
import users from '../mockData/users';

/**
 * 로그인 (목데이터 기반)
 */
export const login = async (email, password) => {
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    return { success: true, user };
  }
  return { success: false, message: '이메일 또는 비밀번호가 올바르지 않습니다.' };
};

/**
 * 회원가입 (목데이터에 추가, 실제로는 메모리상만)
 */
export const register = async (userInfo) => {
  const exists = users.find(u => u.email === userInfo.email);
  if (exists) {
    return { success: false, message: '이미 존재하는 이메일입니다.' };
  }
  const newUser = {
    ...userInfo,
    id: users.length + 1,
    role: 'user',
    family: [],
  };
  users.push(newUser);
  return { success: true, user: newUser };
};

/**
 * 비밀번호 찾기 (이메일 존재 여부만 체크)
 */
export const forgotPassword = async (email) => {
  const user = users.find(u => u.email === email);
  if (user) {
    return { success: true, message: '비밀번호 재설정 링크가 이메일로 전송되었습니다.' };
  }
  return { success: false, message: '존재하지 않는 이메일입니다.' };
};
