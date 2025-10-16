import styled from "styled-components";

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0;
`;

export const DialogStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  animation: statsSlideIn 0.6s ease-out 0.2s both;

  @keyframes statsSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  animation: statItemAppear 0.5s ease-out;

  &:last-child {
    grid-column: 1 / -1;
    border-bottom: none;
    border-top: 2px solid rgba(255, 255, 255, 0.1);
    margin-top: 0.5rem;
    padding-top: 1rem;
  }

  &:nth-child(1) {
    animation-delay: 0.3s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.5s;
  }

  @keyframes statItemAppear {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .stat-label {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .stat-value {
    font-size: 1.1rem;
    font-weight: 600;
    color: #e0e7ff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .stat-value.success {
    background: linear-gradient(45deg, #4ade80, #22c55e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    text-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
    animation: successPulse 2s ease-in-out infinite;
  }

  @keyframes successPulse {
    0%,
    100% {
      text-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
    }
    50% {
      text-shadow: 0 0 30px rgba(34, 197, 94, 0.8);
    }
  }
`;

export const DialogMessage = styled.div`
  text-align: center;
  animation: messageAppear 0.6s ease-out 0.4s both;

  @keyframes messageAppear {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.05);
    padding: 1.2rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
  }
`;

export const DialogActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: actionsAppear 0.6s ease-out 0.6s both;

  @keyframes actionsAppear {
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
    flex-direction: column;
    align-items: center;
  }
`;
