// 공통 로딩 컴포넌트 (src/components/common/Loading.jsx)
import React from 'react';

/**
 * 로딩 스피너 컴포넌트
 */
const Loading = ({ message = '로딩 중...', size = 'medium' }) => {
  const sizeClasses = {
    small: 'spinner-small',
    medium: 'spinner',
    large: 'spinner-large'
  };

  return (
    <div className="loading-container">
      <div className={sizeClasses[size]}></div>
      <span className="loading-text">{message}</span>
    </div>
  );
};

export default Loading;