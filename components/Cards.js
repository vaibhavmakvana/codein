import React from 'react';
import styles from '../styles/Websites.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cards = (props) => {
    const { title, imgSrc, viewsCount, cost, bmoney, webHref, pageHref = '/' } = props;

    return (
        <>
            <div className={styles.webcard} title={title}>
                <Link href={pageHref}>
                    <div className={styles.webimg}>
                        <img src={imgSrc} alt="/img/noimage.jpg" />
                        <div className={styles.cardoverlay}></div>
                    </div>
                </Link>
                <div className={styles.webdetails}>
                    <Link href={pageHref}>
                        <div className={styles.webtitle}>
                            <h3>{title}</h3>
                            <p>by Coding Web Studio | Fully Responsive Design.</p>
                        </div>
                    </Link>
                    <div className={styles.porl}>
                        <Link href={pageHref}>
                            <div className={styles.price}>
                                <p className={styles.nmoney}>{cost} <span className={styles.bmoney}>${bmoney}</span></p>
                                <div className={styles.rating}>
                                    <span><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                    <span><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                    <span><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                    <span><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                    <span><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                </div>
                                <p className={styles.sales}>{viewsCount} <span>views</span></p>
                            </div>
                        </Link>

                        <div className={styles.cartlive}>
                            <Link href={pageHref}>
                                <button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button>
                            </Link>
                            <a href={webHref} className={styles.liveprebtn} target="_blank">
                                Live Preview
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards