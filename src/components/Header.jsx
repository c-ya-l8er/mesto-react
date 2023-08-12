import "../index.css";
import headerLogo from "../images/header_logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="логотип Место" className="header__logo" />
    </header>
  );
}

export default Header;
