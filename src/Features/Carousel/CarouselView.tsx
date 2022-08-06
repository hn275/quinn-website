import React from 'react';

interface CarouselviewPropTypes {
    images: string[];
    topImage: number;
}

const Carouselview: React.FC<CarouselviewPropTypes> = ({
    images,
    topImage,
}): JSX.Element => {
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
                        index === topImage
                            ? 'carousel-image top-level'
                            : 'carousel-image'
                    }
                >
                    <img src={image} alt="" />
                </div>
            );
        });
    };
    // JSX
    return <>{getImages()}</>;
};

export default Carouselview;
