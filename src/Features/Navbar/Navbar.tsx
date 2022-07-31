import React from 'react';
import { useEffect } from 'react';
import "assets/stylesheets/css/Header.css";

interface NavbarPropTypes {
  isOpen: boolean;
}

const Navbar: React.FC<NavbarPropTypes> = ({ isOpen }): JSX.Element => {
  useEffect(() => {
    const navItems = document.getElementsByClassName("nav-item");
    if (isOpen) {
      for ( let i = 0; i < navItems.length; i++ ) {
        setTimeout((): void => {
          navItems[i].classList.add("active");
        }, 150 * i)
      }
    } else {
      for ( let i = 0; i < navItems.length; i++ ) {
        setTimeout((): void => {
          navItems[i].classList.remove("active");
        }, 150 * i)
      }
    }
    return // cleanup
  }, [isOpen])

  return (
    <nav className="nav">
      <ul className="nav-links">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">Portfolio</a></li>
        <li className="nav-item"><a href="#">About</a></li>
      </ul>
      <div className="contact-button" role="button">
        Contact
      </div>
    </nav>
  );
};

export default Navbar;
