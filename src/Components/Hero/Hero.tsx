import { BsChevronRight } from 'react-icons/bs';
import banner from 'assets/pictures/compressed/Quinn_whiteshirt_compressed.jpg';
import "assets/stylesheets/css/Hero.css";

const Hero = (): JSX.Element => {
  // codes
  return (
    <section id="hero">
      <article>
        <h1>Quinn Dawson</h1> is a thingOne and a thingTwo here
        <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
        <div className="portfolio-links" role="navigation">
          View some of his work <a href="#">here</a>
          <span>
            <BsChevronRight />
          </span>
        </div>
      </article>
      <div className="hero-picture" role="hero">
        <img src={banner} alt="Quinn" />
      </div>
    </section>
  );
};

export default Hero;
