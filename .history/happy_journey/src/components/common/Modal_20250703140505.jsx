// 공통 모달 컴포넌트 (src/components/common/Modal.jsx)
import React from 'react';
import PropTypes from 'prop-types';

/**
 * 재사용 가능한 모달 컴포넌트
 * @param {boolean} isOpen - 모달 열림 여부
 * @param {function} onClose - 닫기 이벤트
 * @param {React.ReactNode} children - 모달 내용
 */
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded shadow-lg p-6 min-w-[300px] relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
