// 사용자 정보/가족/알림 API (src/services/api/userApi.js)
import users from '../mockData/users';

/**
 * 내 정보 조회
 */
export const getUserByEmail = async (email) => {
  return users.find(u => u.email === email);
};

/**
 * 가족 정보 조회
 */
export const getFamily = async (email) => {
  const user = users.find(u => u.email === email);
  return user ? user.family : [];
};

/**
 * 알림 설정 조회
 */
export const getNotification = async (email) => {
  const user = users.find(u => u.email === email);
  return user ? user.notification : {};
};

/**
 * 알림 설정 수정 (목데이터에만 반영)
 */
export const updateNotification = async (email, notification) => {
  const user = users.find(u => u.email === email);
  if (user) {
    user.notification = { ...user.notification, ...notification };
    return { success: true };
  }
  return { success: false };
};
