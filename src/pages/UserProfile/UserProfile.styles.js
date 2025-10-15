import styled from "styled-components";

export const ProfileHeader = styled.div`
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
    margin-bottom: 10px;
    background: linear-gradient(45deg, #fff, #a5b4fc, #4ade80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    font-weight: 700;
  }

  h2 {
    font-size: 1.8rem;
    margin: 15px 0;
    color: #e0e7ff;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #4ade80, #22c55e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 8px 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

export const ProfileInfo = styled.div`
  margin: 30px 0;

  .preferences {
    margin-top: 30px;
    padding: 25px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);

    h3 {
      margin-bottom: 20px;
      color: #e0e7ff;
      font-size: 1.4rem;
      font-weight: 600;
      text-align: center;
      background: linear-gradient(45deg, #3b82f6, #1d4ed8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    p {
      margin: 12px 0;
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.9);
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

      strong {
        color: #4ade80;
        font-weight: 600;
      }
    }
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;

  .stat {
    background: rgba(255, 255, 255, 0.08);
    padding: 25px 20px;
    border-radius: 15px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
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
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4),
        0 0 20px rgba(74, 107, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
    }

    &:hover::before {
      left: 100%;
    }

    .stat-value {
      display: block;
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 10px;
      background: linear-gradient(45deg, #4ade80, #22c55e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      animation: pulse 2s ease-in-out infinite;
    }

    .stat-label {
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.8);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 500;
    }
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

export const EditForm = styled.form`
  .form-group {
    margin-bottom: 25px;

    label {
      display: block;
      margin-bottom: 10px;
      font-weight: 600;
      color: #e0e7ff;
      font-size: 1rem;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    input,
    select {
      width: 100%;
      padding: 14px 16px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      color: white;
      font-size: 1rem;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);

      &:focus {
        outline: none;
        border-color: #4ade80;
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.2),
          inset 0 1px 3px rgba(0, 0, 0, 0.2);
      }

      &.error {
        border-color: #ff6b6b;
        background: rgba(255, 107, 107, 0.1);
      }
    }

    .error-message {
      color: #ff6b6b;
      font-size: 0.85rem;
      margin-top: 6px;
      display: block;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      animation: errorShake 0.4s ease;
    }

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
  }

  .form-actions {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }
`;
