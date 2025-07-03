// 케어 서비스 API (src/services/api/careServicesApi.js)
import careServices from '../mockData/careServices';

/**
 * 케어 서비스 전체 목록 조회
 */
export const getCareServices = async () => {
  return careServices;
};

/**
 * 케어 서비스 상세 조회
 */
export const getCareServiceById = async (id) => {
  return careServices.find(s => s.id === Number(id));
};

/**
 * 예약 요청 (실제 저장은 안됨, 성공 메시지 반환)
 */
export const bookCareService = async ({ serviceId, userName, phone, date }) => {
  // 실제로는 예약 DB에 저장해야 함
  return {
    success: true,
    message: '예약이 완료되었습니다. 담당자가 곧 연락드릴 예정입니다.',
  };
};
