import React from 'react'
import styles from '../styles/Category.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const LandingSec = () => {
    return (
        <>

            <section className={styles.ladingpagesec}>
                <div className={`${styles.landingpage} ${styles.maxwidth}`}>
                    <Link href="/category/all-website-categories/" className={styles.hottemplate}>
                        <div className={styles.hottempimgbx}>
                            <img src="/img/layers.png" alt="flame" />
                        </div>
                        <div className={styles.hottempdetails1}>
                            <h2>Hot Html Wesbite Themes and Codes</h2>
                            <p>Browse Now <FontAwesomeIcon icon={faArrowRightLong} className={styles.faarrowrightlong} /></p>
                        </div>
                    </Link>
                    <Link href="/category/alldesigns/" className={styles.landingthemes}>
                        <div className={styles.hottempimgbx}>
                            <img src="/img/landing-page.png" alt="flame" />
                        </div>
                        <div className={styles.hottempdetails2}>
                            <h2>Top Landing Page And Themes</h2>
                            <p>Browse Now <FontAwesomeIcon icon={faArrowRightLong} className={styles.faarrowrightlong} /></p>
                        </div>
                    </Link>
                </div>
            </section>

        </>
    )
}

export default LandingSec