// 건강 데이터 API (src/services/api/healthApi.js)
import healthData from '../mockData/healthData';

/**
 * 건강 데이터 전체 조회
 */
export const getHealthData = async () => {
  // 실제 API라면 fetch/axios 등을 사용하지만, 여기선 목데이터 반환
  return healthData;
};

/**
 * 특정 유저의 최신 건강 데이터 조회
 */
export const getLatestHealthStatus = async (userId) => {
  // userId에 해당하는 데이터 중 가장 최근(마지막) 데이터 반환
  const userHealth = healthData.filter(d => d.userId === userId);
  return userHealth.length > 0 ? userHealth[userHealth.length - 1] : null;
};
