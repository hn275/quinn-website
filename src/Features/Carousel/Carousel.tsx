import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface CarouselPropTypes {
    event: {
        vertical: string[];
        horizontal: string[];
    };
}
const Carousel: React.FC<CarouselPropTypes> = ({ event }): JSX.Element => {
    const images = [...event.vertical, ...event.horizontal]; // all images
    const imagesLength = images.length; // length of all images
    const [imageIndex, setImageIndex] = useState<number>(0); // image index for the carousel
    // handle click events
    const handleNext = (): void => {
        if (imageIndex < imagesLength - 1) {
            setImageIndex((prevIndex) => (prevIndex += 1));
        } else {
            setImageIndex(0); // loop back to the beginning
        }
    };
    const handlePrev = (): void => {
        if (imageIndex > 0) {
            setImageIndex((prevIndex) => (prevIndex -= 1));
        } else {
            setImageIndex(imagesLength - 1); // loop forward to the end
        }
    };
    return (
        <div className="carousel">
            <div className="carousel-image">
                <img src={images[imageIndex]} alt="" />
            </div>
            <div className="pagination">
                <button onClick={handlePrev}>
                    <FiChevronLeft />
                </button>
                <button onClick={handleNext}>
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
