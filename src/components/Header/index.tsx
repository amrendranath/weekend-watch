import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={logo} alt="logo" />
            <ul className="left-navigation">
              <li>Movies</li>
              <li>TV Show</li>
              <li>People</li>
              <li>More</li>
            </ul>
          </div>
          <ul className="right-navigation">
            <li>Log In</li>
            <li>Joine Us</li>
            <li>
              <img src={search} alt="search" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
