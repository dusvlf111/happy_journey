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
 * @param {boolean} required - 필수 입력 여부
 * @param {boolean} disabled - 비활성화 여부
 */
const Input = ({ value, onChange, placeholder, type, className, required, disabled, ...props }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`input ${className}`}
    required={required}
    disabled={disabled}
    {...props}
  />
);

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  type: 'text',
  className: '',
  required: false,
  disabled: false,
};

export default Input;