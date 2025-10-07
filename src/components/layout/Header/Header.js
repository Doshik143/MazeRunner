import "./Header.css";

const Header = ({ title = "Maze Runner" }) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
  );
};

export default Header;
