// 공통 카드 컴포넌트 (src/components/common/Card.jsx)
import React from 'react';
import PropTypes from 'prop-types';

/**
 * 재사용 가능한 카드 컴포넌트
 * @param {React.ReactNode} children - 카드 내부 내용
 * @param {string} className - 추가 스타일
 */
const Card = ({ children, className }) => (
  <div className={`bg-white shadow rounded p-4 ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

export default Card;
