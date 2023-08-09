import "../index.css";
import headerLogo from "../images/header_logo.svg";

function Header() {
  return (
    <div className="header">
      <img src={headerLogo} alt="логотип Место" className="header__logo" />
    </div>
  );
}

export default Header;
