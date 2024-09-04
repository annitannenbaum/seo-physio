import './Review.scss';

interface Props {
    starNum: number;
    text: string;
}

const ReviewCard = ({ starNum, text }: Props) => {

    const stars = [];
    for (let i = 1; i <= starNum; i++) {
        stars.push(
            <span>
            <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_99_123)">
            <path d="M4.29369 4.11798L5.59245 1.50188C5.75915 1.16604 6.24085 1.16604 6.40755 1.50188L7.7063 4.11798L10.6108 4.54008C10.9834 4.59424 11.1319 5.0497 10.8622 5.31095L8.76085 7.3459L9.25675 10.2207C9.32045 10.5899 8.9307 10.8714 8.59725 10.6971L6 9.339L3.40274 10.6971C3.0693 10.8714 2.67955 10.5899 2.74323 10.2207L3.23913 7.3459L1.13788 5.31095C0.868086 5.0497 1.01661 4.59424 1.38926 4.54008L4.29369 4.11798Z" fill="#FDFBF8" stroke="#FDFBF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_99_123">
            <rect width="12" height="12" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </span>
        )
    }
    return (
        <div className="seo-review-card">
            {...stars}
            <div className='seo-review-text__container'>
                <p className="seo-review-text">
                    {text}
                </p>
            </div>
        </div>)}

export default ReviewCard;