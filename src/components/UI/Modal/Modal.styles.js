import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: overlayAppear 0.3s ease-out;

  @keyframes overlayAppear {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(8px);
    }
  }
`;

export const ModalContent = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(74, 107, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  animation: modalSlideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center;

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: scale(0.8) translateY(-50px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(74, 107, 255, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 107, 107, 0.1) 0%,
        transparent 50%
      );
    pointer-events: none;
    z-index: -1;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4a6bff, transparent);
    border-radius: 50%;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #e0e7ff;
  margin: 0;
  background: linear-gradient(45deg, #fff, #a5b4fc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

export const ModalCloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: rgba(255, 107, 107, 0.2);
    border-color: rgba(255, 107, 107, 0.5);
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
  }

  &:active {
    transform: scale(0.95) rotate(90deg);
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem 2rem 2rem;
  max-height: calc(90vh - 100px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(74, 107, 255, 0.5) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #4a6bff, #3b82f6);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
  }
`;
