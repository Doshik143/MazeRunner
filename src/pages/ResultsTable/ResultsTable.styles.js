import styled from "styled-components";

export const LeaderboardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const LeaderboardHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);

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
    margin: 0;
  }
`;

export const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

export const TableHeader = styled.thead`
  background: rgba(255, 255, 255, 0.1);

  th {
    padding: 1.2rem 1rem;
    text-align: center;
    font-weight: 600;
    color: #e0e7ff;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  }
`;

export const TableRow = styled.tr`
  transition: all 0.3s ease;
  background: ${(props) =>
    props.$isCurrent ? "rgba(74, 222, 128, 0.1)" : "transparent"};

  border-left: ${(props) =>
    props.$isCurrent ? "4px solid #4ade80" : "4px solid transparent"};

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const UserCell = styled.td`
  padding: 1rem;
  text-align: left;
  font-weight: ${(props) => (props.$isCurrent ? "600" : "400")};
  color: ${(props) => (props.$isCurrent ? "#4ade80" : "#e0e7ff")};
  text-shadow: ${(props) =>
    props.$isCurrent ? "0 0 10px rgba(74, 222, 128, 0.5)" : "none"};
`;

export const StatCell = styled.td`
  padding: 1rem;
  text-align: center;
  color: #e0e7ff;
  font-weight: 500;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;

  background: ${(props) => {
    switch (props.$rank) {
      case 1:
        return "linear-gradient(45deg, #FFD700, #FFA500)";
      case 2:
        return "linear-gradient(45deg, #C0C0C0, #A0A0A0)";
      case 3:
        return "linear-gradient(45deg, #CD7F32, #8B4513)";
      default:
        return "rgba(255, 255, 255, 0.1)";
    }
  }};

  color: ${(props) => (props.$rank <= 3 ? "#000" : "#e0e7ff")};
  border: ${(props) =>
    props.$rank <= 3
      ? "2px solid rgba(255, 255, 255, 0.3)"
      : "1px solid rgba(255, 255, 255, 0.2)"};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #e0e7ff;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.5rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

export const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: #e0e7ff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.5);
  }

  &.active {
    background: rgba(74, 222, 128, 0.2);
    border-color: #4ade80;
    color: #4ade80;
  }
`;
