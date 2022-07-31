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

  // accessing a tag to style active state
  useEffect(() => {
    /**
      * when user click it should remove the 
      * `active` className from the current a tag 
      * then add the `active` class name to the 
      * selected tags
      */

    const handleMouseDown = (event: React.ChangeEvent<HTMLAnchorElement>):void => {
      /**
        * @param {event} event: selected anchor tag
        * adding `active` class to selected element
        */
      event.target.classList.add("active");
    };
    // current active tag
    const activeTag: any | null = document.querySelector(".nav-item a.active"); // BUG: type Element | null doesnt work???
    // removing `active` class from the activeTag
    activeTag?.classList.remove('active');
    
    const anchorTags = Array.from(document.querySelectorAll(".nav-item a"));
    // for ( let i = 0; i < anchorTags.length; i++ ) {
    //   anchorTags[i].addEventListener("click", handleMouseDown);
    // }
    // TODO : finish this useEffect

  })

  return (
    <nav className="nav">

      <ul className="nav-links">
        <li className="nav-item">
          <a href="#">
            <div className="has-focus"></div>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <div className="has-focus"></div>
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
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
