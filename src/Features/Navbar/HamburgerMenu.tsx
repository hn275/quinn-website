import { useState, useEffect } from 'react';

import "assets/stylesheets/css/HamburgerMenu.css";

const HamburgerMenu = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const timeout = 300; // transition time for menu toggling
  const menu = (): JSX.Element => {
    return (
      <div className="bar-wrapper">
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>
    );
  };

  const closeMenu = (): JSX.Element => {
    return (
      <div className="x-wrapper">
        <span className="stroke stroke1"></span>
        <span className="stroke stroke2"></span>
      </div>
    );
  };

  return <div
    className="hamburger"
    role="button"
    onClick={() => setOpen(prevOpenState => !prevOpenState)}
  >
    {open ? closeMenu() : menu()}
  </div>;
};

export default HamburgerMenu;

// TODO: CSSTransition with typescript
