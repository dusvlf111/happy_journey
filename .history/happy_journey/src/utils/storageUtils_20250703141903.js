// localStorage 유틸리티 (src/utils/storageUtils.js)

/**
 * localStorage에 값 저장
 */
export function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * localStorage에서 값 가져오기
 */
export function getStorage(key, defaultValue = null) {
  const v = localStorage.getItem(key);
  try {
    return v ? JSON.parse(v) : defaultValue;
  } catch {
    return defaultValue;
  }
}

/**
 * localStorage에서 값 삭제
 */
export function removeStorage(key) {
  localStorage.removeItem(key);
}
