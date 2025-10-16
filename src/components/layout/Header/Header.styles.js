import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 100;
  animation: slideDown 0.6s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
    z-index: -1;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin: 0;
  background: linear-gradient(45deg, #fff, #e0e7ff, #a5b4fc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite,
    textGlow 2s ease-in-out infinite alternate;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px;
  text-transform: uppercase;

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
      filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
    }
    to {
      filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
    }
  }
`;
