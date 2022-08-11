import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CarouselView from './CarouselView';

interface CarouselPropTypes {
    event: {
        vertical: string[];
        horizontal: string[];
    };
}
const Carousel: React.FC<CarouselPropTypes> = ({ event }): JSX.Element => {
    const images = [...event.vertical, ...event.horizontal]; // all images
    const imagesLength = images.length - 1; // length of all images
    const [topLevelImageIndex, setTopLevelImageIndex] = useState<number>(0); // image index for the carousel
    const [isAutoLooping, setIsAutoLooping] = useState<boolean>(true); // auto looping for carousel
    // handle click events
    const handleNext = (): void => {
        if (topLevelImageIndex === imagesLength) {
            // set topLevelImageIndex = 0 if the index is at max length
            setTopLevelImageIndex((currentIndex: number) => {
                return (currentIndex = 0);
            });
        } else if (
            // go forward an image
            topLevelImageIndex >= 0 &&
            topLevelImageIndex < imagesLength
        ) {
            setTopLevelImageIndex((currentIndex: number) => {
                return (currentIndex += 1);
            });
        } else {
            // in case out of range
            throw new Error('Image index out of range');
        }
        // pause autoloop to false
        setIsAutoLooping(() => false);
    };
    const handlePrev = (): void => {
        if (topLevelImageIndex === 0) {
            // set topLevelImageIndex = imagesLength if the index is at 0
            setTopLevelImageIndex((currentIndex: number) => {
                return (currentIndex = imagesLength);
            });
        } else if (
            // go back an image
            topLevelImageIndex > 0 &&
            topLevelImageIndex <= imagesLength
        ) {
            setTopLevelImageIndex((currentIndex: number) => {
                return (currentIndex -= 1);
            });
        } else {
            // in case out of range
            throw new Error('Image index out of range');
        }
        // pause auto loop
        setIsAutoLooping(() => false);
    };

    // Auto looping every 2 seconds
    useEffect(() => {
        const loopIntervalId = setInterval(() => {
            isAutoLooping && handleNext();
        }, 2000);
        return () => {
            clearInterval(loopIntervalId);
        };
        /* eslint-disable */
    }, [isAutoLooping]);
    // Resume auto looping once the user click on next/prev button after 5
    useEffect(() => {
        /**
         * If resuming to auto loop after 4 seconds, the time out would have to be
         * 4 seconds - interval second
         * for ie, in this case it is 2 seconds since it will wait 2 seconds,
         * resumes the auto looping effects, but the auto looping effect itself
         * has an interval of 2 seconds
         */
        const resumeLoopingId = setTimeout(() => {
            if (!isAutoLooping) {
                setIsAutoLooping(true);
            }
        }, 3000);
        return () => {
            clearTimeout(resumeLoopingId);
        };
    }, [isAutoLooping]);

    useEffect(() => console.log(topLevelImageIndex), [topLevelImageIndex]);
    // JSX
    return (
        <div className="carousel">
            <CarouselView topImage={topLevelImageIndex} images={images} />
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
