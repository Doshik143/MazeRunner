import { StyledButton } from "./Button.styles";

const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <StyledButton variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
