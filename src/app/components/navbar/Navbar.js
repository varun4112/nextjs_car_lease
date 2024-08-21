"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

function Navbar() {
  const [isSidebarActive, setSidebarActive] = useState(false);

  // Toggle sidebar visibility on burger click
  const handleBurgerClick = () => {
    // console.log("click");
    setSidebarActive(true);
  };

  // Close sidebar on close button click
  const handleCloseClick = () => {
    setSidebarActive(false);
  };

  return (
    <div className={styles.header}>
      <header>
        <div className={styles.nav}>
          {/* <!-- navbar social media links --> */}
          <div className={styles.navSocial}>
            <ul className={styles.navSocialList}>
              <li className={styles.navSocailLi}>
                <Image
                  src="\logos\Vectorfacebook.svg"
                  alt="facebook Logo"
                  className={styles.facebookNavLogo}
                  height={15}
                  width={15}
                />
              </li>
              <li className={styles.navSocailLi}>
                <Image
                  src="\logos\Vectorinsta.svg"
                  alt="instagram Logo"
                  width={15}
                  height={15}
                />
              </li>
              <li className={styles.navSocailLi}>
                <Image
                  src="\logos\layer1x-twitter.svg"
                  alt="twitter Logo"
                  width={15}
                  height={15}
                />
              </li>
              <li
                className={`${styles.navSocailLi} ${styles.linkedIn}`}
                id="linkedIn"
              >
                <Image
                  src="\logos\VectorlinkedIn.svg"
                  alt="Linkedin Logo"
                  width={15}
                  height={15}
                />
              </li>
            </ul>
          </div>
          <div className={styles.navLayer}>
            <div id="navLogo">
              <Image
                src="/logos/Layer_1logoMain.png"
                className={styles.companyLogo}
                width={370}
                height={54}
              />
            </div>
            {/* <!-- navbar navigation links --> */}
            <div className={styles.navList}>
              <ul className={styles.navLinkList}>
                <li className={styles.navLinkLi}>
                  <a href="#">About</a>
                </li>
                <li className={styles.navLinkLi}>
                  <a href="#">Offers</a>
                </li>
                <li className={styles.navLinkLi}>
                  <a href="#">Corporate</a>
                </li>
                <li className={styles.navLinkLi}>
                  <a href="#">Personal</a>
                </li>
                <li className={styles.navLinkLi}>
                  <a href="#">Location</a>
                </li>
                <li className={styles.navLinkLi}>
                  <a href="#">Contact Us</a>
                </li>
                <li
                  className={`${styles.navLinkLi} ${styles.navLinkButtonLi}`}
                  id="navLinkButtonLi"
                >
                  <button className={styles.notificationButton}>
                    <Image
                      src="\icons\Layer_1bell.svg"
                      alt="notification"
                      height={24}
                      width={24}
                    />
                  </button>
                  {/* <!-- avtar --> */}
                  <button className={styles.avatarButton}>
                    <span className={styles.avatar}>J</span>
                    <span className={styles.name}>John Doe</span>
                  </button>
                </li>
              </ul>
              <div className={styles.burger} onClick={handleBurgerClick}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
            </div>
          </div>
          <div className={styles.navDropOff}>
            <marquee>
              <p className={styles.navPara}>
                Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor
                Grand Sales Counters | All Rates inclusive of VAT. T&C’s apply |
                Follow us on Social Media for New Offers
              </p>
            </marquee>
          </div>
        </div>

        {/* <!-- sidebar in mobile view --> */}
        <div
          className={`${styles.sideBar} ${
            isSidebarActive ? styles.sideBarActive : ""
          }`}
        >
          <div>
            <Image
              src="\icons\Group 1261156498chlose.svg"
              alt="Close Icon For Side Bar"
              className={styles.closeButtonIcon}
              onClick={handleCloseClick}
              width="24"
              height="24"
            />
          </div>

          {/* <!-- Drop down nav menu --> */}
          <div className={styles.dropNavMenu}>
            <a href="" className={styles.aboutATag}>
              About
            </a>
            <div className={styles.hDivider}></div>
            <a href="">Offers</a>
            <div className={styles.hDivider}></div>
            <a href="">Coporate</a>
            <div className={styles.hDivider}></div>
            <a href="">Personal</a>
            <div className={styles.hDivider}></div>
            <a href="">Locations</a>
            <div className={styles.hDivider}></div>
            <a href="">Contact Us</a>
            <button className={styles.loginSignUpButton}>Login/Sign Up</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
