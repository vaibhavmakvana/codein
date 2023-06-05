import { React, useEffect, useRef } from 'react';
import Link from 'next/link'
import styles from '../../styles/Category.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faStar, faShoppingCart, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import Typed from 'typed.js';
import Head from 'next/head';
import Category from '@/components/category';

const websitecategory = () => {
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
                        <li><Link href='/category/all-website-categories'>category</Link></li>
                        <li>/</li>
                        <li>all-website-categories</li>
                    </ul>
                    <h1>All Website Categories & Designs | <span className="multi-text"></span></h1>
                    <p>CodingWebStudio offers free and paid website code solutions for businesses looking to establish a strong online presence.</p>
                </div>
                <form>
                    <input type="search" placeholder="e.g. responsive websites codes" name="term" />
                    <button type="submit" aria-label="Search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
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
                    <div className={styles.webcard} title="Clothyfly - Ecoomerce website design">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/Clothyfly.PNG" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Clothyfly - Ecoomerce Website Design And Responsive Design</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://clothyfly-codingwebstudio.netlify.app/" className={styles.liveprebtn}
                                        target="_blank">Live Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Makmovies - Movie website design">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/makmovies.PNG" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Makmovies - Movie Website Design And Responsive Design</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://makmovies-codingstudio.netlify.app/" className={styles.liveprebtn}
                                        target="_blank">Live Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Trishaenterprise - Ecoomerce website design">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/trishaenterprise.PNG" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Trishaenterprise - Ecoomerce Website Design And Responsive Design</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/" legacyBehavior>
                                    <a>
                                        <div className={styles.price}>
                                            <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                            <div className={styles.rating}>
                                                <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                                <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                                <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                                <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                                <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                                <span className={styles.starp}>(0)</span>
                                            </div>
                                            <p className={styles.sales}>0 <span>Sales</span></p>
                                        </div>
                                    </a>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://trishaenterprise.co.in/" className={styles.liveprebtn} target="_blank">Live
                                        Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
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
                    <div className={styles.webcard} title="Clothyfly - Ecoomerce website design">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://clothyfly-codingstudio.netlify.app/" className={styles.liveprebtn}
                                        target="_blank">Live Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Makmovies - Movie website design">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://makmovies-codingstudio.netlify.app/" className={styles.liveprebtn}
                                        target="_blank">Live Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Clothyfly - Ecoomerce website design">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://trishaenterprise.co.in/" className={styles.liveprebtn} target="_blank">Live
                                        Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Clothyfly - Ecoomerce website design">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://trishaenterprise.co.in/" className={styles.liveprebtn} target="_blank">Live
                                        Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.Ecommerceweb}>
                <div className={styles.header}>
                    <h2>Ecommerce</h2>
                    <Link href="/category/ecommerce" legacyBehavior><a>View All</a></Link>
                </div>
                <div className={styles.cardswebsite}>
                    <div className={styles.webcard} title="Clothyfly - Ecoomerce website design">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/Clothyfly.PNG" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Clothyfly - Ecoomerce Website Design And Responsive Design</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://clothyfly-codingwebstudio.netlify.app/" className={styles.liveprebtn}
                                        target="_blank">Live Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Trishaenterprise - Ecoomerce website design">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/trishaenterprise.PNG" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Trishaenterprise - Ecoomerce Website Design And Responsive Design</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://trishaenterprise.co.in/" className={styles.liveprebtn} target="_blank">Live
                                        Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Coming soon..">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://makmovies-codingwebstudio.netlify.app/" className={styles.liveprebtn}
                                        target="_blank">Live Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Coming soon..">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://trishaenterprise.co.in/" className={styles.liveprebtn} target="_blank">Live
                                        Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.gamingweb}>
                <div className={styles.header}>
                    <h2>Gaming & Entertainment</h2>
                    <Link href="/category/gaming" legacyBehavior><a>View All</a></Link>
                </div>
                <div className={styles.cardswebsite}>
                    <div className={styles.webcard} title="Makmovies - Movie website design">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/makmovies.PNG" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Makmovies - Movie Website Design And Responsive Design</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://makmovies-codingstudio.netlify.app/" className={styles.liveprebtn}
                                        target="_blank">Live Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Coming soon..">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://clothyfly-codingstudio.netlify.app/" className={styles.liveprebtn}
                                        target="_blank">Live Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Coming soon..">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://trishaenterprise.co.in/" className={styles.liveprebtn} target="_blank">Live
                                        Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Coming soon..">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://trishaenterprise.co.in/" className={styles.liveprebtn} target="_blank">Live
                                        Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.portfolioweb}>
                <div className={styles.header}>
                    <h2>Portfolio</h2>
                    <Link href="/category/portfolio" legacyBehavior><a>View All</a></Link>
                </div>
                <div className={styles.cardswebsite}>
                    <div className={styles.webcard} title="Coming soon..">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://clothyfly-codingstudio.netlify.app/" className={styles.liveprebtn}
                                        target="_blank">Live Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Coming soon..">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://makmovies-codingstudio.netlify.app/" className={styles.liveprebtn}
                                        target="_blank">Live Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Coming soon..">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://trishaenterprise.co.in/" className={styles.liveprebtn} target="_blank">Live
                                        Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.webcard} title="Coming soon..">
                        <Link href="/">
                            <div className={styles.webimg}>
                                <img src="/img/noimage.jpg" alt="" />
                                <div className={styles.cardoverlay}></div>
                            </div>
                        </Link>
                        <div className={styles.webdetails}>
                            <Link href="/">
                                <div className={styles.webtitle}>
                                    <h3>Comming soon...</h3>
                                    <p>by Coding Studio | Fully Responsive Design.</p>
                                </div>
                            </Link>
                            <div className={styles.porl}>
                                <Link href="/">
                                    <div className={styles.price}>
                                        <p className={styles.nmoney}>Free <span className={styles.bmoney}>₹9999</span></p>
                                        <div className={styles.rating}>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.checked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span ><FontAwesomeIcon icon={faStar} className={`${styles.fastar} ${styles.unchecked}`} /></span>
                                            <span className={styles.starp}>(0)</span>
                                        </div>
                                        <p className={styles.sales}>0 <span>Sales</span></p>
                                    </div>
                                </Link>

                                <div className={styles.cartlive}>
                                    <Link href='/'><button><FontAwesomeIcon icon={faShoppingCart} className={styles.facartshopping} /></button></Link>
                                    <Link href="https://trishaenterprise.co.in/" className={styles.liveprebtn} target="_blank">Live
                                        Preview</Link>
                                </div>
                            </div>
                        </div>

                    </div>
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

export default websitecategory
