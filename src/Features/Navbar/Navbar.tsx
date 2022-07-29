import React from 'react';

interface NavbarPropTypes {
}

const Navbar: React.FC<NavbarPropTypes> = (): JSX.Element => {
  // codes
  return (
    <nav className="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <div className="contact-button" role="button">
        Contact
      </div>
  </nav>
  );
};

export default Navbar;
