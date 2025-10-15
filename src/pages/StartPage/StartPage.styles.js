import styled from "styled-components";

export const StartPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(74, 107, 255, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 107, 107, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 40%,
        rgba(86, 207, 225, 0.1) 0%,
        transparent 50%
      );
    animation: floatBackground 8s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes floatBackground {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(-15px, 10px) scale(1.02);
    }
    66% {
      transform: translate(10px, -10px) scale(0.98);
    }
  }
`;

export const WelcomeSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: welcomeAppear 0.8s ease-out;

  @keyframes welcomeAppear {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 25px;
    background: linear-gradient(45deg, #fff, #a5b4fc, #4ade80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    font-weight: 800;
    letter-spacing: 1px;
    animation: titleGlow 3s ease-in-out infinite alternate;

    @keyframes titleGlow {
      from {
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
      }
      to {
        text-shadow: 0 4px 30px rgba(74, 107, 255, 0.6);
      }
    }
  }

  p {
    font-size: 1.3rem;
    margin: 15px 0;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    line-height: 1.6;

    &:nth-child(3) {
      background: rgba(255, 255, 255, 0.08);
      padding: 12px 20px;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      margin-top: 20px;
      font-weight: 600;
      color: #4ade80;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h1 {
      font-size: 2.8rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  animation: buttonsAppear 0.8s ease-out 0.3s both;

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
    gap: 15px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;
