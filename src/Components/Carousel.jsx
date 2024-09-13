import React, { useState } from 'react';
import './Carousel.css';
import slide1 from './Assets/slide1.png';
import slide2 from './Assets/slide2.png';

const Carousel = () => {
    const slides = [
      { url: slide1, 
        alt: 'Slide 1' ,
        txt:"I designed and developed the entire portfolio, focusing on creating a user-friendly and visually appealing experience. From coding the interactive components to implementing a responsive design, I've ensured that the portfolio reflects my skills and attention to detail.",
        link:'https://my-portfolio-sangbeet.netlify.app/'},

      { url: slide2, 
        alt: 'Slide 2' ,
        txt:"The Chat App is a real-time communication platform designed to facilitate seamless messaging between users. This app features a user-friendly interface, making it easy to send and receive messages in real-time.",
        link:'https://main--sangbeet-react-chat-app.netlify.app/'},
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Function to handle the next slide
    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    // Function to handle the previous slide
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    return (
    <div className='project'>
        <div className="description">
            <p>{slides[currentIndex].txt}</p>

        </div>
        <div className="carousel">
            <div className="carousel-inner">
            <button className="carousel-button prev" onClick={goToPrevious}>
                &#10094;
            </button>
            <a href={slides[currentIndex].link}>
            <img
                src={slides[currentIndex].url}
                alt={slides[currentIndex].alt}
                className="carousel-image"
            />
            </a>
            <button className="carousel-button next" onClick={goToNext}>
                &#10095;
            </button>
            </div>
        </div>
      </div>
    );
  };
  
  export default Carousel;