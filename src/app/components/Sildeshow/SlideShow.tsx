"use client"
import React, { useEffect, useState } from 'react'
import styles from "./Slideshow.module.css"


function SlideShow() {

    const [slideIndex, setSlideIndex] = useState<number>(0);

    const slides = [
        { id: 'slide1', imageUrl: '/logos/Mitsubishi.svg' },
        { id: 'slide2', imageUrl: '/logos/blue-car-speed-motion-stretch-style.jpg' },
        { id: 'slide3', imageUrl: '/logos/Mitsubishi.svg' },
        { id: 'slide4', imageUrl: '/logos/blue-car-speed-motion-stretch-style.jpg' },
    ];


    // useEffect to change Slide
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);

    return (

        // SlideShow Slides
        <div className={styles.slideshowContainer}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.mySlides} ${index === slideIndex ? styles.show : ''}`}
                    style={{ backgroundImage: `url(${slide.imageUrl})` }}
                >
                </div>
            ))}

            {/* SlideShow Dot*/}
            <div className={styles.dotContainer}>
                {slides.map((_, index) => (
                    <span
                        key={`dot-${index}`}
                        className={`${styles.dot} ${index === slideIndex ? styles.active : ''}`}
                    ></span>
                ))}
            </div>

            <div className={styles.summerPromotionDiv}>
                <div id="giftVoucher">
                    Recieve guarnteed
                    <button className={styles.giftVoucherButton}>Gift Voucher</button>
                </div>
                <div>on a monthly hire or lease</div>
            </div>
        </div>
    )
}

export default SlideShow