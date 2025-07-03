// 유효성 검사 유틸리티 (src/utils/validationUtils.js)

/**
 * 이메일 유효성 검사
 */
export function isValidEmail(email) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

/**
 * 비밀번호(8자 이상, 영문/숫자/특수문자) 검사
 */
export function isValidPassword(pw) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=]).{8,}$/.test(pw);
}
