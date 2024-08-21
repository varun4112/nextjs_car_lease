import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <footer>
        {/* <!-- footer mobile view --> */}
        <div className={styles.footerMobile}>
          <div className={styles.MediaLinks}>
            <Image
              src="logos\Group 1261156489alhabtoor.svg"
              height={46}
              width={113}
              alt="alhabtoor logo"
            />
            <ul>
              <li>
                <Image
                  src="logos\Social Iconsfacebook.svg"
                  alt="facebook logo"
                  height={17}
                  width={17}
                />
              </li>
              <li>
                <Image
                  src="logos\Social Iconsxtwitter.svg"
                  alt="xtwitter logo"
                  height={17}
                  width={17}
                />
              </li>
              <li>
                <Image
                  src="logos\Social Iconsinsta.svg"
                  alt="instaLogo"
                  height={17}
                  width={17}
                />
              </li>
              <li>
                <Image
                  src="logos\Social Iconslinkedin.svg"
                  alt="Linkedin Logo"
                  height={17}
                  width={17}
                />
              </li>
              <li>
                <Image
                  src="logos\Social Iconsyoutube.svg"
                  alt=" Youtube Logo"
                  height={17}
                  width={17}
                />
              </li>
            </ul>
          </div>
          <div className={styles.bottomNavigation}>
            <ul className={styles.navul}>
              <li>Home</li>
              <li>Offers</li>
              <li>Career</li>
              <li>About Us</li>
              <li className={styles.end}>Locations</li>
            </ul>
            <ul className={styles.navul}>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li className={styles.end}>Service Request</li>
            </ul>
            <ul className={styles.navul}>
              <li>Privacy Policy</li>
              <li>Services</li>
              <li className={styles.end}>Contact Us</li>
            </ul>
          </div>
          <div className={styles.groupNavigation}>
            <h3>Al Habtoor Companies</h3>
            <ul className={styles.companyUl1}>
              <li>Hospitality</li>
              <li className={styles.middle}>Real Estate</li>
              <li>Publishing</li>
            </ul>

            <ul className={styles.companyUl2}>
              <li className={styles.first}>Automotive</li>
              <li>Vehicle Leasing</li>
            </ul>
            <div className={styles.secureDiv}>
              <Image
                className={styles.secureImg}
                src="public\logos\Group 1261156497secure.svg"
                alt=""
                width={59}
                height={27}
              />
            </div>
          </div>
          <div className={styles.copyright}>
            <p>© 2023 Car rental LLC - All Rights Reserved. </p>
          </div>
        </div>

        {/* <!-- Footer Desktop View --> */}
        <div className={styles.desktop}>
          <div className={styles.row}>
            <div className={styles.col1}>
              <Image
                id="companylogoFooter"
                src="logos\companyLogo-removebg-preview.svg"
                alt=""
                width={120}
                height={140}
              />
            </div>
            <div className={styles.col2}>
              {" "}
              <div className={styles.bottomNavDesktop}>
                <ul className={styles.bottomNavList}>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                </ul>
                <ul className={styles.bottomNavList}>
                  <li>Offer</li>
                  <li>Location</li>
                  <li>Contact Us</li>
                </ul>
                <ul className={styles.bottomNavList}>
                  <li>FAQ</li>
                  <li>Privacy Policy</li>
                  <li>Service Request</li>
                </ul>
                <ul className={styles.bottomNavList}>
                  <li>Career</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div className={styles.groupNavigationDesktop}>
                <h3>Al Habtoor Companies</h3>
                <ul className={styles.companyUl1Desk}>
                  <li>Hospitality</li>
                  <li>Real Estate</li>
                  <li>Publishing</li>
                  <li>Automotive</li>
                  <li>Vehicle Leasing</li>
                </ul>
              </div>
            </div>
            <div className={styles.col3}>
              <p>Follow us on</p>
              <ul>
                <li>
                  <Image
                    src="logos\Social IconsfacebookLight.svg"
                    alt=""
                    width={17}
                    height={17}
                  />
                </li>
                <li>
                  <Image
                    src="logos\Social IconsxtwitterLight.svg"
                    alt=""
                    width={17}
                    height={17}
                  />
                </li>
                <li>
                  <Image
                    src="logos\Social IconsinstagramLight.svg"
                    alt=""
                    width={17}
                    height={17}
                  />
                </li>
                <li>
                  <Image
                    src="logos\Social IconslinkedInLight.svg"
                    alt=""
                    width={17}
                    height={17}
                  />
                </li>
                <li>
                  <Image
                    src="logos\Social IconsyoutubeLight.svg"
                    alt=""
                    width={17}
                    height={17}
                  />
                </li>
              </ul>
              <div className={styles.siteSecurityImages}>
                <Image
                  src="logos\image 270siteLock.svg"
                  alt=""
                  width={67}
                  height={38}
                />
                <Image
                  src="logos\image 273globalSign.svg"
                  alt=""
                  width={64}
                  height={24}
                />
              </div>
            </div>
          </div>

          <div className={styles.copyright}>
            <p>© 2023 Car rental LLC - All Rights Reserved. </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
