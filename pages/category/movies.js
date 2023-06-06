import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Websites.module.css'
import Category from '../../components/Category';
import Searchsec from '../../components/Searchsec';
import Cards from '../../components/Cards';

const movie = () => {
  return (
    <>
      <Head>
        <title>Code In Movie Websites</title>
      </Head>
      <Searchsec name={"Movie Websites Templates"} pera={"Introducing our latest movie website template: a sleek and modern design to showcase your films professionally."} />
      <Category />
      <section className={`${styles.websitefilter} ${styles.maxwidth}`}>
        <div className={styles.Ecommerceweb}>
          <div className={styles.header}>
            <h2>MOVIES WEBSITES</h2>
          </div>
          <div className={styles.cardswebsite}>
            <Cards title="Makmovies - Movie website design"
              imgSrc="/img/makmovies.PNG"
              viewsCount={0}
              pageHref="/category/all-website-categories"
              webHref="https://makmovies-codingstudio.netlify.app/"
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

export default movie