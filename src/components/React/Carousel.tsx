import { useRef } from 'react';
import reviews from '../../content/reviews/reviews.json';
import ReviewCard from "./Review";
import './Carousel.scss';

const CarouselComponent = () => {
  const slideWidth = 368;

  const sliderContainer = useRef(null);
  const slide = useRef(null);

  const handleCarouselMouseMove = (forwards = true) => {
    const scrollWidth = slideWidth * 2;
    //@ts-ignore
    sliderContainer.current.scrollLeft = forwards ? sliderContainer.current.scrollLeft + scrollWidth : sliderContainer.current.scrollLeft - scrollWidth;
  }
  
    return (
        <div className="seo-review-container">
            <h1>Was dich bei uns <span className="seo-headline seo-headline--red seo-headline--inline">erwartet</span>.</h1>
            <div className="seo-review__container">
            <button className="seo-carousel__nav-button seo-carousel__nav-button--left" onClick={() => handleCarouselMouseMove(false)}></button>
            <div className="seo-review__carousel-container" ref={sliderContainer}>
            {reviews.map((review, i) => {
                return (
                    <ReviewCard starNum={review.starNum} text={review.text} key={i}></ReviewCard>
                )
            })}
            </div>
        <button className="seo-carousel__nav-button seo-carousel__nav-button--right" onClick={() => handleCarouselMouseMove()}></button>
            </div>
        {/* <div className="seo-headline-card">
            <img className="seo-headline-card__image" src="assets/images/google-logo.png" alt="Google Logo" />
            <div className="seo-headline-card-rating-text">
                <h3>5.0</h3>
                <span>Aus 19 Bewertungen</span>
                <img className="seo-review-stars" src="assets/images/red-stars.png" alt="5 rote Sterne" />
            </div>
        </div> */}
        </div>
    )
}
export default CarouselComponent;