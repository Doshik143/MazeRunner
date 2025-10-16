import { HeaderContainer, HeaderTitle } from "./Header.styles";

const Header = ({ title = "Maze Runner" }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
