import React from 'react';

interface NavbarPropTypes {
  open: boolean;
}

const Navbar: React.FC<NavbarPropTypes> = ({ open }): JSX.Element => {
  // codes
  const navLinks = (): JSX.Element => {
    return (
      <>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <div className="contact-button" role="button">
          Contact
        </div>
      </>
    );
  }

  return (
    <nav className="nav">
      {open && navLinks()}
    </nav>
  );
};

export default Navbar;
