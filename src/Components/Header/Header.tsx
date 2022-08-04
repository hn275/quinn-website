// Hooks
// Components
import Navbar from 'Features/Navbar/Navbar';
// asssets
import { ReactComponent as Logo } from 'assets/logo.svg';
import 'assets/stylesheets/css/Header.css';

const Header = (): JSX.Element => {
    return (
        <header id="home">
            <div className="logo">
                <Logo />
            </div>

            <Navbar />
        </header>
    );
};

export default Header;
