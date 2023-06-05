import React from 'react';
import Head from 'next/head'
import styles from '../../styles/Websites.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Category from '@/components/category';
import Searchsec from '@/components/Searchsec';

const ecommerce = () => {

  return (<>
    <Head>
      <title>Code In E-commerce</title>
    </Head>

    <Searchsec name={"E-commerce"} pera={"Introducing our latest e-commerce website template, designed to elevate your online store. Grab it now for Free and start selling!"} />
    <Category />
    <section className={`${styles.websitefilter} ${styles.maxwidth}`}>
      <div className={styles.Ecommerceweb}>
        <div className={styles.header}>
          <h2>E-COMMERCE</h2>
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

export default ecommerce
