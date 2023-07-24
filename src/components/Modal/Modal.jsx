import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.Overlay} onClick={handleBackDropClick}>
      <div className={styles.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

