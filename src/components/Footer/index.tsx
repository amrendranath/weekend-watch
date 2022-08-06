import "./footer.css";
import whiteLogo from "../../assets/images/logo_white.svg";
import indianFlag from "../../assets/images/indian-flag.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container d-flex mt-3">
        <div>
          <img src={whiteLogo} alt="white logo" />
          <div className="d-flex mt-5">
            <span className="d-block mr-1">
              <i className="bi bi-geo-alt-fill" />
            </span>
            <p>
              24, Vaishnavi Centre, Raja Park, <br /> 51, Dhanana, Panipat, Haryana, <br /> Pincode-154419
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-around w-100">
          <div>
            <h6 className="text-uppercase">The Basics</h6>
            <ul className="footer-list">
              <li>About Weekend watch</li>
              <li>Contact Us</li>
              <li>Support</li>
              <li>API</li>
            </ul>
          </div>
          <div>
            <h6 className="text-uppercase">GET INVOLVED</h6>
            <ul className="footer-list">
              <li>Contribution Guidelines</li>
              <li>Add New Movie</li>
              <li>Add New TV Show</li>
            </ul>
          </div>
          <div>
            <h6 className="text-uppercase">COMMUNITY</h6>
            <ul className="footer-list">
              <li>Guidelines</li>
              <li>Discussions</li>
              <li>Leaderboard</li>
              <li>Tweeter</li>
            </ul>
          </div>
          <div>
            <h6 className="text-uppercase">LEGAL</h6>
            <ul className="footer-list">
              <li>Terms of use</li>
              <li>API Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <div className="container d-flex justify-content-between align-items-center">
          <p>© 2022 STAR. All Rights Reserved. Weekend watch’s all related Movies and TV Shoes are part of copyright.</p>
          <div>
            <img className="flag" src={indianFlag} alt="country flag" />
            <span className="ml-1">
              India <i className="bi bi-caret-down-fill" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
