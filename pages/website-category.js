import { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Category.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronRight, faAngleDown, faAngleUp, faStar, faShoppingCart, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import Typed from 'typed.js';
import Head from 'next/head';

const websitecategory = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['E-commerce', 'Personal Website', 'Perfect Design', 'Responsive'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        };

        typedRef.current = new Typed('.multi-text', options);

        return () => {
            typedRef.current.destroy(); // Cleanup the Typed.js instance when the component unmounts
        };
    }, []);

    const [showAllCategories, setShowAllCategories] = useState(false);

    const handleToggleCategories = () => {
        setShowAllCategories(!showAllCategories);
    };

    const categoriesListStyle = {
        height: showAllCategories ? 'auto' : '160px'
    };

    const buttonText = showAllCategories ? 'Show less' : 'Show more';

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
                        <li>All</li>
                    </ul>
                    <h1>Website Designs and Templates | <span className="multi-text"></span></h1>
                    <p>CodingWebStudio offers free and paid website code solutions for businesses looking to establish a strong online presence.</p>
                </div>
                <form>
                    <input type="search" placeholder="e.g. responsive websites codes" name="term" />
                    <button type="submit" aria-label="Search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
            </div>
        </section>
        <section>
            <div className={styles.allcatebox}>
                <div className={styles.catebox}>
                    <div className={styles.catetitlebx}>
                        <div className={styles.cateimgbx}>
                            <img src="/img/categories.png" alt="NOIMAGE" />
                        </div>
                        <h3>All categories</h3>
                    </div>
                    <div className={styles.categorieslist} style={categoriesListStyle}>
                        <Link href="/ecommerce" legacyBehavior><a><span>E-commerce</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/entertainment" legacyBehavior><a><span>Entertainment</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/personal" legacyBehavior><a><span>Personal web</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/resume" legacyBehavior><a><span>Resume web</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/blogging" legacyBehavior><a><span>Blog web</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/gaming" legacyBehavior><a><span>Gaming web</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/bussiness" legacyBehavior><a><span>Business web</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/event" legacyBehavior><a><span>Event website</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/non-profitable" legacyBehavior><a><span>Nonprofit web</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/sitetemplates" legacyBehavior><a><span>Site Templates</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>

                    </div>
                </div>
                <button className={styles.catebtn} onClick={handleToggleCategories}>{buttonText}<FontAwesomeIcon icon={showAllCategories ? faAngleUp : faAngleDown} className={styles.chevronD} /></button>
            </div>
        </section>
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
                                    <Link href="https://clothyfly-codingstudio.netlify.app/" className={styles.liveprebtn}
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
                    <div className={styles.webcard} title="Clothyfly - Ecoomerce website design">
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
                                <a href="/">
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
                    <a href="/">View All</a>
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
                                <a href="/">
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
                                <a href="/">
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
                    <a href="/">View All</a>
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
                                    <Link href="https://clothyfly-codingstudio.netlify.app/" className={styles.liveprebtn}
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
                                <a href="/">
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
                                <a href="/">
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
                    <a href="/">View All</a>
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
                                <a href="/">
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
                                <a href="/">
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
                    <a href="/">View All</a>
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
