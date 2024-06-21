import { useState } from 'react';
import './accordionCard.scss';

interface Props {
    title: string;
    text: string;
    buttonText: string;
    href?: string;
}

const AccordionCard = ({ title, text, buttonText, href }: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    const onToggleArrow = () => {
        setIsVisible(!isVisible);
    }

    return (
            <div className="seo-card seo-card--red">
                <div className="seo-card__title">
                    <h1>{ title }</h1>
                    <button 
                        className={`seo-card__arrow ${isVisible ? 'seo-card__arrow--open' : 'seo-card__arrow--closed'}`} 
                        onClick={onToggleArrow}
                        aria-label="Karte aufklappen und mehr Informationen anzeigen"></button>
                </div>
                { isVisible && (<div className="seo-card__content">
                    <p className="seo-card__text">
                        { text }
                    </p>
                    <div className="seo-card__footer">
                        {
                            href ? (<a 
                                        className='seo-card__button seo-button--secondary' 
                                        href={href} 
                                        target='_blank'
                                        aria-label={buttonText}>
                                { buttonText }
                            </a>) : (<button 
                                        className="seo-card__button seo-button--secondary"
                                        aria-label={buttonText}>
                            { buttonText }
                        </button>)
                        }
    
                    </div>
                </div>)}
            </div>)
}

export default AccordionCard;