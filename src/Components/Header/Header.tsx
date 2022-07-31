// Hooks
import { useState } from 'react';
// Components
import Navbar from 'Features/Navbar/Navbar';
import HamburgerMenu from 'Features/Navbar/HamburgerMenu';
// asssets
import { ReactComponent as Logo } from 'assets/logo.svg';
import 'assets/stylesheets/css/Header.css';

const Header = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(true);

  return (

    <header>

      <div className="logo">
        <Logo />
      </div>

      <HamburgerMenu isOpen={open} setOpen={setOpen}/>
      <Navbar isOpen={open}/>

    </header>
  );
};

export default Header;
