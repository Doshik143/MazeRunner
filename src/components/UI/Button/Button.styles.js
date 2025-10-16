import styled from "styled-components";

export const StyledButton = styled.button`
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

  background: ${(props) =>
    props.variant === "primary"
      ? "linear-gradient(45deg, #4ade80, #22c55e)"
      : "rgba(255, 255, 255, 0.1)"};

  color: white;
  border: ${(props) =>
    props.variant === "primary"
      ? "2px solid #4ade80"
      : "2px solid rgba(255, 255, 255, 0.3)"};

  box-shadow: ${(props) =>
    props.variant === "primary"
      ? "0 8px 25px rgba(34, 197, 94, 0.3)"
      : "0 4px 15px rgba(0, 0, 0, 0.2)"};

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: ${(props) =>
      props.variant === "primary"
        ? "0 12px 35px rgba(34, 197, 94, 0.5)"
        : "0 8px 25px rgba(255, 255, 255, 0.2)"};

    border-color: ${(props) =>
      props.variant === "primary" ? "#22c55e" : "rgba(255, 255, 255, 0.5)"};
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
