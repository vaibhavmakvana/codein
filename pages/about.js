import React from 'react'
import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const about = () => {
  return (<>
    <div className={styles.container}>
      <h1>Feel Free To Contact Us!</h1>
      <img src="/img/profilepic.jpg" alt="Profile Picture" className={styles.profilePic} />
      <h1>vaibhav mak</h1>
      <div className={styles.socialLinks}>
        <a href="https://www.instagram.com/it.s__venom" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://t.me/your_telegram_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://www.youtube.com/@codingwebstudio" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>

  </>
  )
}

export default about
