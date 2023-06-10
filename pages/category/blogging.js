import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../../styles/Websites.module.css'
import Category from '../../components/Category';
import Searchsec from '../../components/Searchsec';
import Cards from '../../components/Cards';

const blogging = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("useeffect is running");
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json();
    }).then((parsed) => {
      console.log(parsed)
      setBlogs(parsed)
    })
  }, [])


  return (
    <>
      <Head>
        <title>Code In Blogging</title>
      </Head>
      <Searchsec title={"blogging"} name={"Blogging Websites Templates"} pera={"Ignite your blog's success with our powerful website template. Download it for free and inspire your readers with captivating content!"} />
      <Category />
      <section className={`${styles.websitefilter} ${styles.maxwidth}`}>
        <div className={styles.Ecommerceweb}>
          <div className={styles.header}>
            <h2>BLOGGING</h2>
          </div>
          <div className={styles.cardswebsite}>
            {blogs.map((blogitem)=>{
              return 
              
            })}
           
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