// 공통 모달 컴포넌트 (src/components/common/Modal.jsx)
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * 재사용 가능한 모달 컴포넌트
 * @param {boolean} isOpen - 모달 열림 여부
 * @param {function} onClose - 닫기 이벤트
 * @param {React.ReactNode} children - 모달 내용
 * @param {string} title - 모달 제목
 * @param {boolean} showCloseButton - 닫기 버튼 표시 여부
 */
const Modal = ({ isOpen, onClose, children, title, showCloseButton = true }) => {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // 배경 스크롤 방지
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {showCloseButton && (
          <button className="modal-close" onClick={onClose} aria-label="모달 닫기">
            ×
          </button>
        )}
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  showCloseButton: PropTypes.bool,
};

export default Modal;