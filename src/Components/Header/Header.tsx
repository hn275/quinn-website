// Components
import Navbar from 'Features/Navbar/Navbar';
import HamburgerMenu from 'Features/Navbar/HamburgerMenu';
import logo from 'assets/logo.svg';
import 'assets/stylesheets/css/Header.css';

const Header = (): JSX.Element => {
  // codes
  return (

    <header>
      <HamburgerMenu />

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
