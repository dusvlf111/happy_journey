// 기타 헬퍼 함수 (src/utils/helpers.js)

/**
 * 첫 글자만 대문자로 변환
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 배열을 쉼표로 연결
 */
export function joinComma(arr) {
  return Array.isArray(arr) ? arr.join(', ') : '';
}
