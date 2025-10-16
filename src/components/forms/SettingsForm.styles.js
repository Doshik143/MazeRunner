import styled from "styled-components";

export const SettingsForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 0.3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: formAppear 0.6s ease-out;

  @keyframes formAppear {
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

export const FormSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #e0e7ff;
    text-align: center;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #fff, #a5b4fc);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.8rem;
  position: relative;

  label {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: #e0e7ff;
    margin-bottom: 0.8rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transition: color 0.3s ease;
  }

  &:focus-within label {
    color: #4ade80;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #4ade80;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.2),
      inset 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.12);
  }

  &.error {
    border-color: #ff6b6b;
    background: rgba(255, 107, 107, 0.1);
  }

  option {
    background-color: rgba(20, 20, 30, 0.95);
    color: white;
  }

  option:hover,
  option:checked {
    background-color: #2563eb; /* синій при наведенні/виборі */
    color: white;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: #ff6b6b;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  animation: errorShake 0.4s ease;

  @keyframes errorShake {
    0%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    75% {
      transform: translateX(5px);
    }
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;
  flex: 1;
  border: 1px solid transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.1);
  }

  input {
    display: none;
  }
`;

export const RadioMark = styled.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  transition: all 0.3s ease;

  input:checked + & {
    border-color: #3b82f6;
    background: #3b82f6;
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
  }

  input:checked + &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
  }

  input:checked ~ & {
    color: #3b82f6;
    font-weight: 600;
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
