import styled from "styled-components";

export const ResultsContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  font-family: "Arial", sans-serif;
  color: white;
  position: relative;
  overflow: hidden; /* ключове! */

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(74, 107, 255, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 107, 107, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 40%,
        rgba(86, 207, 225, 0.05) 0%,
        transparent 50%
      );
    animation: floatParticles 8s ease-in-out infinite;
    will-change: transform; /* для плавності і без стрибків */
  }

  @keyframes floatParticles {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(-5px, 3px) scale(1.02);
    }
    66% {
      transform: translate(5px, -3px) scale(0.98);
    }
  }
`;

export const ResultsContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
  padding: 1rem;
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;
  gap: 3rem;
`;

export const ResultsStats = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 3rem 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 50px rgba(74, 107, 255, 0.2);
  animation: statsAppear 0.8s ease-out 0.2s both;
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
    animation: shine 3s ease-in-out infinite;
  }

  @keyframes shine {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  @keyframes statsAppear {
    from {
      opacity: 0;
      transform: translateY(50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #fff, #e0e7ff, #a5b4fc);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite,
      textGlow 2s ease-in-out infinite alternate;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes textGlow {
    from {
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
    }
    to {
      filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6));
    }
  }
`;

export const StatsGrid = styled.div`
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

  .stat-value.result {
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

export const Actions = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  animation: actionsAppear 0.8s ease-out 0.6s both;

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
    gap: 1rem;
    width: 100%;
    max-width: 300px;
  }
`;

export const ErrorMessage = styled.div`
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

  h2 {
    font-size: 1.8rem;
    color: #ff6b6b;
    margin-bottom: 1rem;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 2rem 0;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.05);
    padding: 1.2rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
  }
`;
