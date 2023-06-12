import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import styles from '../../styles/Category.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Typed from 'typed.js';
import Head from 'next/head';
import Category from '../../components/Category';
import * as fs from 'fs';

const websitecategory = (props) => {
    const [section1Blogs, setSection1Blogs] = useState(props.allBlogs.filter((blogitem) => blogitem.latest === 'latest').slice(0,3));
    const [section2Blogs, setSection2Blogs] = useState(props.allBlogs.filter((blogitem) => blogitem.type === 'blogging').slice(0,4));
    const [section3Blogs, setSection3Blogs] = useState(props.allBlogs.filter((blogitem) => blogitem.type === 'ecommece').slice(0,4));
    const [section4Blogs, setSection4Blogs] = useState(props.allBlogs.filter((blogitem) => blogitem.type === 'gaming').slice(0,4));
    const [section5Blogs, setSection5Blogs] = useState(props.allBlogs.filter((blogitem) => blogitem.type === 'portfolio').slice(0,4));
  

    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['E-commerce', 'Personal', 'Gaming', 'Blogging', 'Portfolio'],
            typeSpeed: 40,
            backSpeed: 40,
            backDelay: 1200,
            loop: true
        };

        typedRef.current = new Typed('.multi-text', options);

        return () => {
            typedRef.current.destroy(); // Cleanup the Typed.js instance when the component unmounts
        };
    }, []);

    return (<>
        <Head>
            <title>Code In Category</title>
        </Head>
        <section className={styles.searchsec}>
            <div className={`${styles.websearch} ${styles.maxwidth}`}>
                <div className={styles.pagelist}>
                    <ul>
                        <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
                        <li>/</li>
                        <li><Link href='/webpages/codedemo'>category</Link></li>
                        <li>/</li>
                        <li>all-website-categories</li>
                    </ul>
                    <h1>All Website Categories & Designs | <span className="multi-text"></span></h1>
                </div>
                <form>
                    <input type="search" placeholder="e.g. responsive websites codes" name="term" />
                    <button type="submit" aria-label="Search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
                <p className={styles.pagelistpera}>CodingWebStudio offers free and paid website code solutions for businesses looking to establish a strong online presence.</p>
            </div>
        </section>
        <Category />
        <section className={styles.latestsec}>
            <div className={styles.letestcards}>
                <div className={styles.letesttitle}>
                    <h2>Save On Latest Website.</h2>
                    <a href="/">Browse On Sale Website</a>
                </div>
                <div className={styles.cardswebsite}>
                    {section1Blogs.map((blogitem) => {
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
            </div >
        </section >

        <section className={`${styles.websitefilter} ${styles.maxwidth}`}>
            <div className={styles.blogging}>
                <div className={styles.header}>
                    <h2>Blogging</h2>
                    <Link href="/category/blogging" legacyBehavior><a>View All</a></Link>
                </div>
                <div className={styles.cardswebsite}>
                {section2Blogs.map((blogitem) => {
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
            <div className={styles.Ecommerceweb}>
                <div className={styles.header}>
                    <h2>Ecommerce</h2>
                    <Link href="/category/ecommerce" legacyBehavior><a>View All</a></Link>
                </div>
                <div className={styles.cardswebsite}>
                    {section3Blogs.map((blogitem) => {
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
            <div className={styles.gamingweb}>
                <div className={styles.header}>
                    <h2>Gaming & Entertainment</h2>
                    <Link href="/category/gaming" legacyBehavior><a>View All</a></Link>
                </div>
                <div className={styles.cardswebsite}>
                {section4Blogs.map((blogitem) => {
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
            <div className={styles.portfolioweb}>
                <div className={styles.header}>
                    <h2>Portfolio</h2>
                    <Link href="/category/portfolio" legacyBehavior><a>View All</a></Link>
                </div>
                <div className={styles.cardswebsite}>
                {section5Blogs.map((blogitem) => {
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

        <section className={styles.ladingpagesec}>
            <div className={`${styles.landingpage} ${styles.maxwidth}`}>
                <Link href="/" className={styles.hottemplate}>
                    <div className={styles.hottempimgbx}>
                        <img src="/img/layers.png" alt="flame" />
                    </div>
                    <div className={styles.hottempdetails1}>
                        <h2>Hot Html Wesbite Themes and Codes</h2>
                        <p>Browse Now <FontAwesomeIcon icon={faArrowRightLong} className={styles.faarrowrightlong} /></p>
                    </div>
                </Link>
                <Link href="/" className={styles.landingthemes}>
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
export async function getStaticProps(context) {
    let data = await fs.promises.readdir("websitedata");
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item)
        myfile = await fs.promises.readFile(('websitedata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }

    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
    
}
export default websitecategory
