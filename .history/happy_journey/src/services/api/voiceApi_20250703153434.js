// 전화 서비스 API (src/services/api/voiceApi.js)
import { callHistory } from '../mockData/voiceMessages';

/**
 * 통화 기록 전체 조회
 */
export const getCallHistory = async () => {
  return callHistory;
};

export default callHistory;
