import React from 'react'
import styles from "./CarCard.module.css"
import Image from 'next/image'
import Booknow from '../BookNow/Booknow'

function CarCard({ car }) {
    return (
        <div className={styles.popularCarCard}>
            <div className={styles.imageDiv}><Image src={car.imgUrl} width={357} height={290} alt="" /></div>
            <div className={styles.popularCarCardInfo}>
                <h3 className={styles.popularCarCardInfoHeading}>{car.carName}</h3>
                <p className={styles.popularCarCardInfoPara}>
                    {car.description}
                </p>
                <ul className={styles.popularCarUl}>
                    <li className={styles.popularcarLi}>
                        <img src="/logos/Vector.svg" alt="" />
                        <p>{car.people} People</p>
                    </li>
                    <li className={styles.popularcarLi}>
                        <img src="/logos/Vectorgear.svg" alt="" />
                        <p>Automatic</p>
                    </li>
                    <li className={styles.popularcarLi}>
                        <img src="/logos/Vectordoor.svg" alt="" />
                        <p>5 Doors</p>
                    </li>
                    <li className={styles.popularcarLi}>
                        <img src="/logos/Groupac.svg" alt="" />
                        <p>AC</p>
                    </li>
                </ul>
                <div className={styles.popularCarCardInfo2}>
                    <p className={styles.popularCardCost}>AED {car.price}/ Monthly</p>
                    <Booknow />
                </div>
            </div>
        </div>

    )
}

export default CarCard