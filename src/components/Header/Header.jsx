import "./Header.scss";
import logo from "../../assets/logo.svg";
import iconMenu from "../../assets/icon-menu.svg";
import TopButtons from "../Buttons/TopButtons";

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__left">
          <img src={logo} alt="Logo" className="header__logo" />
          <div className="header__text">
            <h1 className="header__title">MenuNo</h1>
            <p className="header__subtitle">JeNa Dev Solutions</p>
          </div>
        </div>

        <button className="header__menu">
          <img src={iconMenu} alt="Menu" />
        </button>
      </div>
      
      <TopButtons />
    </header>
  );
}
