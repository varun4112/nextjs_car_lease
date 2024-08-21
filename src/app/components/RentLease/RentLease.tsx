import React from 'react'
import styles from "./RentLease.module.css"
import Image from 'next/image'

function RentLease() {
  return (
    <div className={styles.rentSteps}>
      <h2 className={styles.rentStepsHeading}>Rent/Lease In three easy steps</h2>
      <div className={styles.rentStepsRow}>
        <div className={styles.rentStepCols}>
          <h3 className={styles.rentSteph3}>01</h3>
          <div className={styles.rentStepSubdiv}>
            <Image
              className={styles.rentStepSubdivImg}
              src="logos/Frame 1171274971locationPin.svg"
              alt=""
              width={64}
              height={64}
            />
            <p className={styles.rentDivPara}>
              Select the location. Browse through our available options and
              find the perfect car to suit your needs
            </p>
          </div>
        </div>

        <div className={styles.rentStepCols}>
          <h3 className={styles.rentSteph3}>02</h3>
          <div className={styles.rentStepSubdiv}>
            <Image
              className={styles.rentStepSubdivImg}
              src="logos/Frame 1171274970calender.svg"
              alt=""
              width={64}
              height={64}
            />
            <p className={styles.rentDivPara}>
              Choose your desired Pick-Up date and time.
            </p>
          </div>
        </div>

        <div className={styles.rentStepCols}>
          <h3 className={styles.rentSteph3}>03</h3>
          <div className={styles.rentStepSubdiv}>
            <Image className={styles.rentStepSubdivImg} src="logos/Frame 1171274969car.svg" alt="" width={64}
              height={64} />
            <p className={styles.rentDivPara}>
              Make payment and book the car. Select an option to either have
              the car delivered to your location or pick it up directly from
              us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RentLease