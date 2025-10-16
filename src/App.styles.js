import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  font-family: "Arial", sans-serif;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;

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
      ),
      radial-gradient(
        circle at 40% 40%,
        rgba(86, 207, 225, 0.05) 0%,
        transparent 50%
      );
    animation: float 8s ease-in-out infinite;
    pointer-events: none;
    overflow: hidden;
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0);
    }
    33% {
      transform: translate(-5px, 5px);
    }
    66% {
      transform: translate(5px, -5px);
    }
  }
`;

export const Button = styled.button`
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  min-width: 120px;

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

  background-color: ${(props) =>
    props.variant === "primary"
      ? "transparent"
      : props.variant === "secondary"
      ? "transparent"
      : "rgba(255, 255, 255, 0.1)"};

  color: white;
  border: ${(props) =>
    props.variant === "primary"
      ? "2px solid #4ade80"
      : props.variant === "secondary"
      ? "2px solid #3b82f6"
      : "2px solid rgba(255, 255, 255, 0.3)"};

  background: ${(props) =>
    props.variant === "primary"
      ? "linear-gradient(45deg, #4ade80, #22c55e)"
      : props.variant === "secondary"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(255, 255, 255, 0.05)"};

  box-shadow: ${(props) =>
    props.variant === "primary"
      ? "0 8px 25px rgba(34, 197, 94, 0.3)"
      : props.variant === "secondary"
      ? "0 4px 15px rgba(0, 0, 0, 0.2)"
      : "0 4px 15px rgba(0, 0, 0, 0.1)"};

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: ${(props) =>
      props.variant === "primary"
        ? "0 12px 35px rgba(34, 197, 94, 0.5)"
        : props.variant === "secondary"
        ? "0 8px 25px rgba(255, 255, 255, 0.2)"
        : "0 8px 25px rgba(0, 0, 0, 0.3)"};

    border-color: ${(props) =>
      props.variant === "primary"
        ? "#22c55e"
        : props.variant === "secondary"
        ? "rgba(255, 255, 255, 0.5)"
        : "rgba(255, 255, 255, 0.4)"};
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.4);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 50px rgba(74, 107, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
  animation: cardAppear 0.6s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 20%,
      transparent 80%,
      rgba(255, 255, 255, 0.05) 100%
    );
    pointer-events: none;
  }

  @keyframes cardAppear {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "1rem"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};

  @media (max-width: 768px) {
    flex-direction: ${(props) => props.mobileDirection || "column"};
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns || "repeat(auto-fit, minmax(250px, 1fr))"};
  gap: ${(props) => props.gap || "1.5rem"};

  @media (max-width: 768px) {
    grid-template-columns: ${(props) => props.mobileColumns || "1fr"};
    gap: ${(props) => props.mobileGap || "1rem"};
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
