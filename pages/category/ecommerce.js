import React from 'react';
import Head from 'next/head'
import styles from '../../styles/Websites.module.css'
import Category from '../../components/Category';
import Searchsec from '../../components/Searchsec';
import Cards from '../../components/Cards';


const ecommerce = () => {

  return (<>
    <Head>
      <title>Code In E-commerce</title>
    </Head>

    <Searchsec name={"E-commerce Websites Templates"} pera={"Introducing our latest e-commerce website template, designed to elevate your online store. Grab it now for Free and start selling!"} />
    <Category />
    <section className={`${styles.websitefilter} ${styles.maxwidth}`}>
      <div className={styles.Ecommerceweb}>
        <div className={styles.header}>
          <h2>E-COMMERCE</h2>
        </div>
        <div className={styles.cardswebsite}>
          <Cards title="Clothyfly - Ecoomerce website design"
            imgSrc="/img/Clothyfly.PNG"
            viewsCount={10}
            pageHref="/category/all-website-categories"
            webHref="https://clothyfly-codingwebstudio.netlify.app/"
            bmoney="21"
            cost="Paid $20" />
          <Cards title="Trishaenterprise - Ecoomerce website design"
            imgSrc="/img/trishaenterprise.PNG"
            viewsCount={10}
            pageHref="/category/all-website-categories"
            webHref="https://trishaenterprise.co.in/"
            bmoney="21"
            cost="Paid $20" />
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

export default ecommerce
