import Image from 'next/image'
import React from 'react'
import styles from "./Locations.module.css"


function Locations() {
    return (
        <div className={styles.location}>
            <h2 className={styles.locationHeadings}>Locations</h2>
            <ul className={styles.locationUl}>
                <li className={styles.locationLi}>
                    <Image src="logos\Layer_1locationPin2.svg" width={23} height={29} alt="" /><span
                    >Dubai</span>
                </li>
                <li className={styles.locationLi}>
                    <Image src="logos\Layer_1locationPin2.svg" width={23} height={29} alt="" /><span
                    >Abu Dhabi</span>
                </li>
                <li className={styles.locationLi}>
                    <Image src="logos\Layer_1locationPin2.svg" width={23} height={29} alt="" /><span
                    >Sharjah</span>
                </li>
                <li className={styles.locationLi}>
                    <Image src="logos\Layer_1locationPin2.svg" width={23} height={29} alt="" />
                    <span>Fujairah</span>
                </li>
                <li className={`${styles.locationLi} ${styles.locationLiEnd}`}>
                    <Image src="logos\Layer_1locationPin2.svg" width={23} height={29} alt="" /><span
                    >Ras Al Khaimah</span>
                </li>
            </ul>
        </div>
    )
}

export default Locations