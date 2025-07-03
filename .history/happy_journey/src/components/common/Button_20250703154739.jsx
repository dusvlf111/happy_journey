// 공통 버튼 컴포넌트 (src/components/common/Button.jsx)
import React from 'react';
import PropTypes from 'prop-types';

/**
 * 재사용 가능한 버튼 컴포넌트
 * @param {string} children - 버튼 텍스트
 * @param {string} type - 버튼 타입 (button, submit 등)
 * @param {function} onClick - 클릭 이벤트
 * @param {string} className - 추가 스타일
 */
export default function Button({ children, className = '', ...props }) {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  onClick: undefined,
  className: '',
};
