import styled from "styled-components";

export const GameHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    background: linear-gradient(45deg, #fff, #a5b4fc, #4ade80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    margin: 5px 0;
  }
`;

export const GameInfo = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 25px;

  span {
    background: rgba(255, 255, 255, 0.08);
    padding: 12px 24px;
    border-radius: 15px;
    font-size: 1rem;
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    color: #e0e7ff;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
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
        rgba(255, 255, 255, 0.1),
        transparent
      );
      transition: left 0.5s ease;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.3);
    }

    &:hover::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    gap: 15px;

    span {
      padding: 10px 18px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    gap: 10px;

    span {
      padding: 8px 16px;
      font-size: 0.85rem;
    }
  }
`;

export const GameContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  margin: 30px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const ControlSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-top: 20px;

  & > div {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    animation: buttonsAppear 0.6s ease-out 0.3s both;

    @keyframes buttonsAppear {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  ${(props) =>
    props.$hasControls &&
    `
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `}
`;

export const GameWithControls = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MazeContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  min-width: 300px;

  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    max-width: 300px;
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  animation: buttonsAppear 0.6s ease-out 0.3s both;

  @keyframes buttonsAppear {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
