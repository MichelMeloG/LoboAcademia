import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ImageCarousel.css';

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const images = [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', // modern gym equipment
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80', // weights area
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80', // cardio area
        'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80'  // yoga/stretching area
    ];

    return (
        <div className="carousel-container">
            <h2>Galeria de Imagens</h2>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image} alt={`Academia imagem ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
