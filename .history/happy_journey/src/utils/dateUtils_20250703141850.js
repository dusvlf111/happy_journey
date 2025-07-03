// 날짜 유틸리티 함수 (src/utils/dateUtils.js)

/**
 * yyyy-mm-dd 형식으로 날짜 포맷
 */
export function formatDate(date) {
  const d = new Date(date);
  return d.toISOString().slice(0, 10);
}

/**
 * 오늘 날짜 반환 (yyyy-mm-dd)
 */
export function today() {
  return formatDate(new Date());
}

/**
 * 날짜 차이(일) 계산
 */
export function diffDays(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.floor((d1 - d2) / (1000 * 60 * 60 * 24));
}
