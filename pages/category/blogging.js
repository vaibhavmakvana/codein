import React from 'react';
import Head from 'next/head'
import styles from '../../styles/Websites.module.css'
import Category from '../../components/Category';
import Searchsec from '../../components/Searchsec';
import Cards from '../../components/Cards';

const blogging = () => {

  return (
    <>
      <Head>
        <title>Code In Blogging</title>
      </Head>
      <Searchsec name={"Blogging Websites Templates"} pera={"Ignite your blog's success with our powerful website template. Download it for free and inspire your readers with captivating content!"} />
      <Category />
      <section className={`${styles.websitefilter} ${styles.maxwidth}`}>
        <div className={styles.Ecommerceweb}>
          <div className={styles.header}>
            <h2>BLOGGING</h2>
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

export default blogging