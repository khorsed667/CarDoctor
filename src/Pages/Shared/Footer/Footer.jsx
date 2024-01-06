import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/logo.svg"
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <aside>
        <img src={logo} alt="" />
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
        <div className="card-actions pb-3">
              <FontAwesomeIcon
                className="text-2xl cursor-pointer mx-1"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="text-2xl cursor-pointer mx-1"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className="text-2xl cursor-pointer mx-1"
                icon={faLinkedin}
              />
              <FontAwesomeIcon
                className="text-2xl cursor-pointer mx-1"
                icon={faInstagram}
              />
            </div>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
