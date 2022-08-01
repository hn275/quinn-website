import { BsChevronRight } from 'react-icons/bs';
import banner from 'assets/pictures/compressed/Quinn_whiteshirt_compressed.jpg';

const Hero = (): JSX.Element => {
  // codes
  return (
    <section id="hero">
      
      <div className="hero-picture" role="hero">
        <img src={banner} alt="Quinn" />
      </div>
        
      <article>

        <div className="heading">
          <h1>Quinn Dawson</h1> is a thingOne and a thingTwo here
        </div>

        <div className="introduction">
          <p>
            A really quick description would go here
            Consectetur quia repudiandae explicabo nobis suscipit. Libero sunt porro istek
          </p>
        </div>

        <aside>
          <div className="portfolio-link" role="navigation">
            View some of his work <a href="#">here</a>
            <span>
              <BsChevronRight />
            </span>
          </div>
        </aside>

      </article>
        
    </section>
  );
};

export default Hero;
