import styled from "styled-components";

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: slideUp 0.6s ease-out 0.4s both;
  max-width: 300px;
  margin: 0 auto;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ControlsTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #e0e7ff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0;
  text-align: center;
  letter-spacing: 1px;
`;

export const ControlsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  gap: 1px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;

  button {
    width: 30px;
    height: 30px;
    border-radius: 12px;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:nth-child(1) {
    grid-column: 2;
    grid-row: 2;
  }

  button:nth-child(2) {
    grid-column: 1;
    grid-row: 3;
  }

  button:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
  }

  button:nth-child(4) {
    grid-column: 2;
    grid-row: 3;
  }

  @media (max-width: 480px) {
    button {
      width: 30px;
      height: 30px;
      font-size: 1rem;
    }
    gap: 1px;
  }
`;

export const ControlButton = styled.button`
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 15px;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);

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

  /* Grid positioning */
  &:nth-child(1) {
    grid-column: 2;
    grid-row: 1;
  }

  &:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
  }

  &:nth-child(3) {
    grid-column: 2;
    grid-row: 3;
  }

  &:nth-child(4) {
    grid-column: 3;
    grid-row: 2;
  }
`;

export const ControlsHint = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  font-style: italic;
  animation: fadeIn 0.8s ease-out 0.6s both;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
