import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Websites.module.css'
import Category from '../../components/Category';
import Searchsec from '../../components/Searchsec';
import Cards from '../../components/Cards';

const gaming = () => {
  return (
    <>
      <Head>
        <title>Code In Gaming</title>
      </Head>
      <Searchsec title={"gaming"} name={"Gaming Websites Templates"} pera={"Embark on an epic gaming adventure with our state-of-the-art website template. Download it for free and level up your website today!"} />
      <Category />
      <section className={`${styles.websitefilter} ${styles.maxwidth}`}>
        <div className={styles.Ecommerceweb}>
          <div className={styles.header}>
            <h2>GAMING</h2>
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

export default gaming
