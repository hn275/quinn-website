// Hooks
import { useState } from 'react';
// Components
import Navbar from 'Features/Navbar/Navbar';
import HamburgerMenu from 'Features/Navbar/HamburgerMenu';
import logo from 'assets/logo.svg';
import 'assets/stylesheets/css/Header.css';

const Header = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(true);

  return (

    <header>
      <HamburgerMenu isOpen={open} setOpen={setOpen}/>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <Navbar isOpen={open}/>
    </header>
  );
};

export default Header;
