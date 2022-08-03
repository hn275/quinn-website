import { BsInstagram } from "react-icons/bs";
import { HiOutlineInbox } from "react-icons/hi";
import "assets/stylesheets/css/Footer.css";


const Footer = (): JSX.Element => {
  return (
    <section id="footer">
      <div className="tag-handle" aria-labelledby="handle">
        @CapturedByQuinn
      </div>
      <div className="icons" aria-labelledby="external links">
        <div className="icon" aria-labelledby="instagram">
          <BsInstagram />
        </div>
        <div className="icon" aria-labelledby="email">
          <HiOutlineInbox />
        </div>
      </div>
    </section>
  );
};

export default Footer;
