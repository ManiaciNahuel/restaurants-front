import "./Header.scss";
import { FaBars } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import TopButtons from "../Buttons/TopButtons";

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__left">
          <SiIfood className="header__logo" size={48} />
          <div className="header__text">
            <h1 className="header__title">MenuNo</h1>
            <p className="header__subtitle">JeNa Dev Solutions</p>
          </div>
        </div>

        <button className="header__menu">
          <FaBars size={24} />
        </button>
      </div>
      
      <TopButtons />
    </header>
  );
}
