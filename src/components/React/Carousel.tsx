import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import reviews from '../../content/reviews/reviews.json';
import ReviewCard from "./Review";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

const CarouselComponent = () => {
    return (
        <div className="seo-review-container">
        <div className="seo-headline-card">
            <h1>Was dich bei uns <span className="seo-headline seo-headline--red seo-headline--inline">erwartet</span>.</h1>
        </div>
        {reviews.map((review, i) => {
            return (
                <ReviewCard starNum={review.starNum} text={review.text} key={i}></ReviewCard>
            )
        })}
        <div className="seo-headline-card">
            <img className="seo-headline-card__image" src="assets/images/google-logo.png" alt="Google Logo" />
            <div className="seo-headline-card-rating-text">
                <h3>5.0</h3>
                <span>Aus 19 Bewertungen</span>
                <img className="seo-review-stars" src="assets/images/red-stars.png" alt="5 rote Sterne" />
            </div>
        </div>
        </div>
    )
}
export default CarouselComponent;