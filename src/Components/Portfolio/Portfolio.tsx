import Carousel from 'Features/Carousel/Carousel';
import images from 'assets/pictures/images';
import 'assets/stylesheets/css/Portfolio.css';

const Portfolio = (): JSX.Element => {
    const { event1 } = images;
    return (
        <section id="portfolio">
            <div className="event1 event-header">
                <aside>
                    <div>Latest shot</div>
                    <h2>Location1: Event1</h2>
                </aside>
            </div>
            <div className="container">
                <Carousel event={event1} />
            </div>
        </section>
    );
};

export default Portfolio;
