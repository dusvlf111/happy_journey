// 공통 인풋 컴포넌트 (src/components/common/Input.jsx)
import React from 'react';
import PropTypes from 'prop-types';

/**
 * 재사용 가능한 인풋 컴포넌트
 * @param {string} value - 입력값
 * @param {function} onChange - 값 변경 이벤트
 * @param {string} placeholder - 플레이스홀더
 * @param {string} type - 인풋 타입
 * @param {string} className - 추가 스타일
 */
const Input = ({ value, onChange, placeholder, type, className }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
  />
);

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  type: 'text',
  className: '',
};

export default Input;
