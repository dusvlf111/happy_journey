// 포맷 유틸리티 함수 (src/utils/formatUtils.js)

/**
 * 숫자 3자리 콤마 포맷
 */
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 전화번호 하이픈 포맷
 */
export function formatPhone(phone) {
  return phone.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
}

/**
 * 이메일 마스킹
 */
export function maskEmail(email) {
  return email.replace(/(.{2}).+(@.+)/, '$1***$2');
}
