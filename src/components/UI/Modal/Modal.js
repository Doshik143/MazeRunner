import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from "./Modal.styles";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27 && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {(title || showCloseButton) && (
          <ModalHeader>
            {title && <ModalTitle>{title}</ModalTitle>}
            {showCloseButton && (
              <Button
                variant="secondary"
                onClick={onClose}
                className="modal-close-btn"
              >
                ×
              </Button>
            )}
          </ModalHeader>
        )}
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")
  );
};

export default Modal;
