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
    const [topLevelImageIndex, setTopLevelImageIndex] = useState<number>(0); // image index for the carousel
    // const [isAutoLooping, setIsAutoLooping] = useState<boolean>(true); // auto looping for carousel
    // handle click events
    const handleNext = (): void => {
        // setting top level image index
        if (topLevelImageIndex < imagesLength - 1) {
            setTopLevelImageIndex((prevIndex) => (prevIndex += 1));
        } else {
            setTopLevelImageIndex(0); // loop back to the beginning
        }
        // set autoloop to false
        // setIsAutoLooping(false);
    };
    const handlePrev = (): void => {
        // set top level image index
        if (topLevelImageIndex > 0) {
            setTopLevelImageIndex((prevIndex) => (prevIndex -= 1));
        } else {
            setTopLevelImageIndex(imagesLength - 1); // loop forward to the end
        }
        // set autoloop to false
        // setIsAutoLooping(false);
    };
    // auto loop
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         console.log(topLevelImageIndex);
    //         if (isAutoLooping) {
    //             if (topLevelImageIndex < imagesLength - 1) {
    //                 setTopLevelImageIndex((prevIndex) => (prevIndex += 1));
    //             } else {
    //                 setTopLevelImageIndex(0); // loop back to the beginning
    //             }
    //         }
    //     }, 2500);
    // }, [isAutoLooping]);
    // resume auto loop

    // dump images on dom
    const getImages = () => {
        return images.map((image: string, index: number) => {
            /**
             * the carousel length is defined by `imagesLength`
             * the top level image will be defined either by user clicking pagination button
             * or by recursion within useEffect
             * the images are stacked on top of each other
             * the front displayed image will have a class `top-image`
             */
            return (
                <div
                    key={index}
                    className={
                        index === topLevelImageIndex
                            ? 'carousel-image top-level'
                            : 'carousel-image'
                    }
                >
                    <img src={image} alt="" />
                </div>
            );
        });
    };
    return (
        <div className="carousel">
            {getImages()}
            {/* <div className="carousel-image"> */}
            {/*     <img src={images[imageIndex]} alt="" /> */}
            {/* </div> */}
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
