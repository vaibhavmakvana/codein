import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/Websites.module.css'
import Category from '../../components/Category';
import Searchsec from '../../components/Searchsec';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import * as fs from 'fs';

const portfolio = (props) => {
  const [portfolio, setSectionBlogs] = useState(props.allBlogs.filter((blogitem) => blogitem.type === 'portfolio'));
  return (
    <>
      <Head>
        <title>Empowering Your Portfolio Online | Codingwebstudio</title>
      </Head>
      <Searchsec title={"protfolio"} name={"Portfolio Websites Templates"} pera={"Elevate your professional portfolio with our cutting-edge website template. Download it for free and make a lasting impression!"} />
      <Category />
      <section className={`${styles.websitefilter} ${styles.maxwidth}`}>
        <div className={styles.Ecommerceweb}>
          <div className={styles.header}>
            <h2>PORTFOLIO WEBSITES</h2>
          </div>
          <div className={styles.cardswebsite}>
            {portfolio.map((blogitem) => {
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
export default portfolio
