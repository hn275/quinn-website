import { useEffect, useState } from 'react';
import "assets/stylesheets/css/Header.css";
import HamburgerMenu from './HamburgerMenu';


const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false); // state for toggling menu
  useEffect(() => { // staggering effect for dropdown menu on mobile view
    const navItems = document.getElementsByClassName("nav-item");
    if (open) {
      for ( let i = 0; i < navItems.length; i++ ) {
        setTimeout((): void => {
          navItems[i].classList.add("active");
        }, 150 * i)
      }
    } else {
      for ( let i = 0; i < navItems.length; i++ ) {
        setTimeout((): void => {
          navItems[i].classList.remove("active");
        }, 150 * i);
      }
    }
  }, [open]);

  // Handle click for anchor tags
  const handleClick = (event: any): void => {
    /**
      * @param {event} event: selected anchor tag
      * adding `active` class to selected element
      */
    // current active tag
    const activeTag: Element | null = document.getElementsByClassName("focus")[0];
    // removing `active` class from the activeTag
    activeTag?.classList.remove("focus");
    // adding active class to the right tag
    event.target.classList.add("focus");
  };

  return (
    <nav className="nav">

      <ul className="nav-links">
        <li className="nav-item">
          <a href="#home" onClick={handleClick}>
            <div className="has-focus"></div>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" onClick={handleClick}>
            <div className="has-focus"></div>
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" onClick={handleClick}>
            <div className="has-focus"></div>
            About
          </a>
        </li>
      </ul>

      <div className="contact-button" role="button">
        Contact
      </div>
      <HamburgerMenu isOpen={open} setOpen={setOpen}/>
    </nav>
  );
};

export default Navbar;
