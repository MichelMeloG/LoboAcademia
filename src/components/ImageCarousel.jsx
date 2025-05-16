import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ImageCarousel.css';
import useInView from '../hooks/useInView';

const ImageCarousel = () => {
    const [carouselRef, isInView] = useInView();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '0'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '0'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '0',
                    dots: true
                }
            }
        ]
    };

    const images = [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
        'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80'
    ];    return (
        <div className={`carousel-container ${isInView ? 'animate-fadeIn' : ''} initially-hidden`} ref={carouselRef}>
            <h2 className={`${isInView ? 'animate-fadeIn delay-200' : ''} initially-hidden`}>Galeria de Imagens</h2>
            <div className={`${isInView ? 'animate-fadeIn delay-300' : ''} initially-hidden`}>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="carousel-slide">
                            <img src={image} alt={`Academia imagem ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ImageCarousel;
