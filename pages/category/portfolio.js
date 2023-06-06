import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Websites.module.css'
import Category from '../../components/Category';
import Searchsec from '../../components/Searchsec';
import Cards from '../../components/Cards';

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Code In Portfolio</title>
      </Head>
      <Searchsec name={"Portfolio Websites Templates"} pera={"Elevate your professional portfolio with our cutting-edge website template. Download it for free and make a lasting impression!"} />
      <Category />
      <section className={`${styles.websitefilter} ${styles.maxwidth}`}>
        <div className={styles.Ecommerceweb}>
          <div className={styles.header}>
            <h2>PORTFOLIO WEBSITES</h2>
          </div>
          <div className={styles.cardswebsite}>
            <Cards title="Coming soon..."
              imgSrc="/img/noimage.jpg"
              viewsCount={0}
              pageHref="/category/all-website-categories"
              webHref="https://www.google.com/"
              bmoney="21"
              cost="Free" />
            <Cards title="Coming soon..."
              imgSrc="/img/noimage.jpg"
              viewsCount={0}
              pageHref="/category/all-website-categories"
              webHref="https://www.google.com/"
              bmoney="21"
              cost="Free" />
            <Cards title="Coming soon..."
              imgSrc="/img/noimage.jpg"
              viewsCount={0}
              pageHref="/category/all-website-categories"
              webHref="https://www.google.com/"
              bmoney="21"
              cost="Free" />
            <Cards title="Coming soon..."
              imgSrc="/img/noimage.jpg"
              viewsCount={0}
              pageHref="/category/all-website-categories"
              webHref="https://www.google.com/"
              bmoney="21"
              cost="Free" />
          </div>
        </div>
      </section>
    </>
  )
}

export default portfolio
