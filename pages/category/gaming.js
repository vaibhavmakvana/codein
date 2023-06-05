import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Websites.module.css'
import Link from 'next/link'
import Category from '@/components/category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Searchsec from '@/components/Searchsec';

const gaming = () => {
  return (
    <>
      <Head>
        <title>Code In Gaming</title>
      </Head>
      <Searchsec name={"Gaming"} pera={"Embark on an epic gaming adventure with our state-of-the-art website template. Download it for free and level up your website today!"} />
      <Category />
      <section className={`${styles.websitefilter} ${styles.maxwidth}`}>
        <div className={styles.Ecommerceweb}>
          <div className={styles.header}>
            <h2>GAMING</h2>
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

    </>
  )
}

export default gaming
