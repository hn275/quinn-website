import { CSSTransition } from 'react-transition-group';
// Stylesheets
import 'assets/stylesheets/css/HamburgerMenu.css';

interface HamburgerMenuPropTypes {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<HamburgerMenuPropTypes> = ({
    isOpen,
    setOpen,
}): JSX.Element => {
    const timeout = 300; // CSSTransition timeout variable
    // hamburger menu
    const menu = (): JSX.Element => {
        return (
            <CSSTransition
                in={!isOpen}
                timeout={timeout}
                unmountOnExit
                classNames="hamburger-bars"
            >
                <div className="bar-wrapper">
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                </div>
            </CSSTransition>
        );
    };

    // x button to close hamburger menu
    const closeMenu = (): JSX.Element => {
        return (
            <CSSTransition
                in={isOpen}
                timeout={timeout}
                unmountOnExit
                classNames="hamburger-x"
            >
                <div className="x-wrapper">
                    <span className="stroke stroke1"></span>
                    <span className="stroke stroke2"></span>
                </div>
            </CSSTransition>
        );
    };

    return (
        <div
            className="hamburger"
            role="button"
            onClick={() => setOpen((prevOpenState) => !prevOpenState)}
        >
            {/* two functions are called here 
       but one is replaced by another 
       as the user toggle the hamburger  
       menu button in mobile size */}
            {closeMenu()}
            {menu()}
        </div>
    );
};

export default HamburgerMenu;

// TODO: CSSTransition with typescript
