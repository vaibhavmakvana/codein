import Head from 'next/head'
// import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Frontend Developer', 'Coder', 'Web Designer', 'Programmer'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 500,
      loop: true
    };

    typedRef.current = new Typed('.multi-text', options);

    return () => {
      typedRef.current.destroy(); // Cleanup the Typed.js instance when the component unmounts
    };
  }, []);

  const cardsContainer = useRef(null);
  const slidePrev = useRef(null);
  const slideNext = useRef(null);
  let scrollPosition = 0;

  const handlePrevClick = () => {
    if (scrollPosition > 0) {
      scrollPosition -= 900;
      cardsContainer.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNextClick = () => {
    if (
      scrollPosition <
      cardsContainer.current.scrollWidth - cardsContainer.current.clientWidth
    ) {
      scrollPosition += 900;
      cardsContainer.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (<>

    <Head>
      <title>CodeIn</title>
    </Head>
    <main>
      <section className={styles.banner}>
        <div className={styles.homecontent}>
          <h3>Welcome to...</h3>
          <h1>Coding Web Studio</h1>
          <h3>And I'm a <span className="multi-text"></span></h3>
          <p>Explore, download, and delight in a vast array of offerings available on our website. Enjoy the
            experience!</p>
          <div className={styles.social}>
            <a href="/"><img
              src="/img/instagram.png"
              width={20}
              height={20}
              alt="Picture of the author"
            /></a>
            <a href="/"><img
              src="/img/youtube.png"
              width={20}
              height={20}
              alt="Picture of the author"
            /></a>
            <a href="/"><img
              src="/img/facebook.png"
              width={20}
              height={20}
              alt="Picture of the author"
            /></a>
          </div>
          <div className={styles.topGbtn}>
            <Link href="#website" className="website" legacyBehavior>
              <a>
                <svg>
                  <rect></rect>
                </svg>
                WEBSITES
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.moreBtn}>
          <Link href="/website-category" legacyBehavior><a><button className={styles.animatedbutton}>Explore More</button></a></Link>
        </div>

      </section>

      <div className={styles.herosection}>
        <div className={styles.herocont}>
          <div className={styles.herocontent}>
            <h1>Professional Website Themes With Codes &amp; Website Templates For Any Project</h1>
            <p>Discover thousands of easy-to-customize themes, templates &amp; CMS products, made by vaibhav
              (Developer).</p>
            <form role="search" method="get" action="/search" className={styles.searchform}>
              <input className={styles.searchinput} placeholder="e.g. responsive Websites codes" name="term"
                type="search" aria-label="search" />
              <button className={styles.searchbutton} type="submit">Search</button>
            </form>
          </div>
          <div className={styles.heroimage}>
            <img src="/img/hcjnav.png"
              alt="ThemeForest: Professional Website Themes &amp; Website Templates for any project" />
          </div>
        </div>

      </div>

      <section className={styles.webcategory}>
        <div className={styles.webcateCont}>
          <div className={styles.catecard} title="Html Websites Templates">
            <a href="/" className={styles.titlecard}>
              <h1>E-Commerce Websites</h1>
              <h3>Thousands of WordPress themes</h3>
            </a>
            <div className={styles.newthemes}>
              <a href="/">Newest</a>
              <a href="/">View</a>
            </div>
            <div className={styles.cateImg}>
              <img src="/img/Clothyfly.PNG" alt="" />
              <img src="/img/html.png" alt="" />
            </div>
          </div>
          <div className={styles.catecard} title="Html Websites Templates">
            <a href="/" className={styles.titlecard}>
              <h1>Blog Websites</h1>
              <h3>Thousands of WordPress themes</h3>
            </a>
            <div className={styles.newthemes}>
              <a href="/">Newest</a>
              <a href="/">View</a>
            </div>
            <div className={styles.cateImg}>
              <img src="/img/trishaenterprise.PNG" alt="" />
              <img src="/img/php.png" alt="" />
            </div>
          </div>
          <div className={styles.catecard} title="Html Websites Templates">
            <a href="/" className={styles.titlecard}>
              <h1>Fathion Websites</h1>
              <h3>Thousands of WordPress themes</h3>
            </a>
            <div className={styles.newthemes}>
              <a href="/">Newest</a>
              <a href="/">View</a>
            </div>
            <div className={styles.cateImg}>
              <img src="/img/noimage.jpg" alt="" />
              <img src="/img/html.png" alt="" />
            </div>
          </div>
          <div className={styles.catecard} title="Html Websites Templates">
            <a href="/" className={styles.titlecard}>
              <h1>Gaming Websites</h1>
              <h3>Thousands of WordPress themes</h3>
            </a>
            <div className={styles.newthemes}>
              <a href="/">Newest</a>
              <a href="/">View</a>
            </div>
            <div className={styles.cateImg}>
              <img src="/img/noimage.jpg" alt="" />
              <img src="/img/html.png" alt="" />
            </div>
          </div>
          <div className={styles.catecard} title="Html Websites Templates">
            <a href="/" className={styles.titlecard}>
              <h1>Entertainment Websites</h1>
              <h3>Thousands of WordPress themes</h3>
            </a>
            <div className={styles.newthemes}>
              <a href="/">Newest</a>
              <a href="/">View</a>
            </div>
            <div className={styles.cateImg}>
              <img src="/img/makmovies.PNG" alt="" />
              <img src="/img/html.png" alt="" />
            </div>
          </div>
          <div className={styles.catecard} title="Html Websites Templates">
            <a href="/" className={styles.titlecard}>
              <h1>Health & Beauty Websites</h1>
              <h3>Thousands of WordPress themes</h3>
            </a>
            <div className={styles.newthemes}>
              <a href="/">Newest</a>
              <a href="/">View</a>
            </div>
            <div className={styles.cateImg}>
              <img src="/img/noimage.jpg" alt="" />
              <img src="/img/html.png" alt="" />
            </div>
          </div>


        </div>
        <div className={styles.viewcate}>
          <Link href="/website-category" legacyBehavior><a><button className={styles.animatedbutton}>View More Categories</button></a></Link>
        </div>
      </section>

      <section className={styles.uniqweb}>
        <div className={styles.uniqimgbx}>
          <img src="/img/makmovies.PNG" alt="" />
        </div>
        <div className={styles.uniqtext}>
          <h2>Unique themes and templates for every budget and every project.</h2>
          <Link href="/website-category" legacyBehavior><a><button className={styles.animatedbutton}>VIEW MORE</button></a></Link>
        </div>
      </section>

      <section id="website" className={styles.website}>
        <h2>LETEST WEBSITES WITH CODES</h2>
        <div className={styles.cardscontainer} ref={cardsContainer}>
          <div className={styles.card}>
            <a href="/">
              <img src="/img/Clothyfly.PNG" alt="Movie 1" />
              <span>VIEW LIVE</span>
            </a>
          </div>
          <div className={styles.card}>
            <a href="/">
              <img src="/img/makmovies.PNG" alt="Movie 2" />
              <span>VIEW LIVE</span>
            </a>
          </div>
          <div className={styles.card}>
            <a href="/">
              <img src="/img/trishaenterprise.PNG" alt="Movie 3" />
              <span>VIEW LIVE</span>
            </a>
          </div>
          <div className={styles.card}>
            <a href="/">
              <img src="/img/noimage.jpg" alt="Movie 4" />
              <span>VIEW LIVE</span>
            </a>
          </div>
          <div className={styles.card}>
            <a href="/">
              <img src="/img/noimage.jpg" alt="Movie 5" />
              <span>VIEW LIVE</span>
            </a>
          </div>
          <div className={styles.card}>
            <a href="/">
              <img src="/img/noimage.jpg" alt="Movie 6" />
              <span>VIEW LIVE</span>
            </a>
          </div>
          <div className={styles.card}>
            <a href="/">
              <img src="/img/noimage.jpg" alt="Movie 6" />
              <span>VIEW LIVE</span>
            </a>
          </div>
          <div className={styles.card}>
            <a href="/">
              <img src="/img/noimage.jpg" alt="Movie 6" />
              <span>VIEW LIVE</span>
            </a>
          </div>
          <div className={styles.card}>
            <a href="/">
              <img src="/img/noimage.jpg" alt="Movie 6" />
              <span>VIEW LIVE</span>
            </a>
          </div>
          <div className={styles.card}>
            <Link href="/website-category" legacyBehavior>
              <a>
                <img src="/img/noimage.jpg" alt="Movie 6" />
                <span>VIEW LIVE</span>
              </a>
            </Link>
          </div>

        </div>
        <div className={styles.prev} ref={slidePrev} onClick={handlePrevClick}><img src="/img/back.png" className={styles.fasolid} /></div>
        <div className={styles.next} ref={slideNext} onClick={handleNextClick}><img src="/img/next.png" className={styles.fasolid} /></div>
      </section>
    </main>
  </>
  )
}
