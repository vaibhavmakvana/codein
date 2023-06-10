import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../../styles/Websites.module.css'
import Category from '../../components/Category';
import Searchsec from '../../components/Searchsec';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const Alldesigns = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        })
            .then((parsed) => {
                console.log(parsed)
                setBlogs(parsed)
            })
    }, [])


    return (
        <>
            <Head>
                <title>Code In all designs</title>
            </Head>
            <Searchsec title={"designs"} name={"All designs Websites Templates"} pera={"Ignite your blog's success with our powerful website template. Download it for free and inspire your readers with captivating content!"} />
            <Category />
            <section className={`${styles.websitefilter} ${styles.maxwidth}`}>
                <div className={styles.Ecommerceweb}>
                    <div className={styles.header}>
                        <h2>All Templates and Themes Designs</h2>
                    </div>
                    <div className={styles.cardswebsite}>
                        {blogs.map((blogitem) => {
                            return <div className={styles.webcard} title={blogitem.title} key={blogitem.slug}>
                                <Link href={`../webpages/${blogitem.slug}`}>
                                    <div className={styles.webimg}>
                                        <img src={blogitem.imgSrc} alt="/img/noimage.jpg" />
                                        <div className={styles.cardoverlay}></div>
                                    </div>
                                </Link>
                                <div className={styles.webdetails}>
                                    <Link href={`../webpages/${blogitem.slug}`}>
                                        <div className={styles.webtitle}>
                                            <h3>{blogitem.title}</h3>
                                            <p>by Coding Web Studio | Fully Responsive Design.</p>
                                        </div>
                                    </Link>
                                    <div className={styles.porl}>
                                        <Link href={`../webpages/${blogitem.slug}`}>
                                            <div className={styles.price}>
                                                <p className={styles.nmoney}>{blogitem.priceAfter} <span className={styles.bmoney}>{blogitem.pricebefore}</span></p>
                                                <div className={styles.rating}>
                                                    <span><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                                </div>
                                                <p className={styles.sales}>{blogitem.views} <span>views</span></p>
                                            </div>
                                        </Link>

                                        <div className={styles.cartlive}>
                                            <Link href={`../webpages/${blogitem.slug}`}>
                                                <button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button>
                                            </Link>
                                            <a href={blogitem.href} className={styles.liveprebtn} target="_blank">
                                                Live Preview
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Alldesigns