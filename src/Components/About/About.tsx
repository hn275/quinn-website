import "assets/stylesheets/css/About.css";
import images from 'assets/pictures/images';

const About = (): JSX.Element => {
  return (
    <section id="about">
      <div className="about-img">
        <img src={images.stocks.about} alt="" />
      </div>
      
      <article>
        <h2>About Quinn</h2>
        <p>
          Adipisicing quasi corporis eius illum quod Maiores vero
          totam enim autem amet? Eum cupiditate ratione iure quo culpa 
          temporibus? Nihil nam iste blanditiis amet assumenda itaque Dicta
          possimus nihil reprehenderit quo ad Ipsa beatae ipsam ullam nostrum et
          modi! Quis magnam nobis quis mollitia repudiandae Est nostrum illum eos eius
        </p>
      </article>

      <div className="about-picture">
        </div>


    </section>
  );
};

export default About;
