import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';

const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles.ModalOverlay} />
          <div
            className={styles.ModalWrapper}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={styles.Modal}>{children}</div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
