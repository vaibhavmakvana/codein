import React from 'react'
import Styles from '../styles/Footer.module.css'
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footersec}>
                <div className={Styles.finfo}>
                    <div className={Styles.shop}>
                        <ul>
                            <h4>CODING STUDIO</h4>
                            <li><Link href='/category/alldesigns/' legacyBehavior><a>New In</a></Link></li>
                            <li><Link href='/category/ecommerce/' legacyBehavior><a>E-commerce</a></Link></li>
                            <li><Link href='/category/gaming/' legacyBehavior><a>Gaming</a></Link></li>
                            <li><Link href='/category/ecommerce/' legacyBehavior><a>Marketing</a></Link></li>
                            <li><Link href='/category/portfolio/' legacyBehavior><a>Portfolio</a></Link></li>
                            <li><Link href='/category/blogging/' legacyBehavior><a>Blogging</a></Link></li>
                            <li><Link href='/category/alldesigns/' legacyBehavior><a>Sale & Special Themes</a></Link></li>
                        </ul>
                    </div>
                    <div className={Styles.information}>
                        <ul>
                            <h4>INFORMATION</h4>
                            <li><Link href='/about/' legacyBehavior><a>About</a></Link></li>
                            <li><Link href='/about/' legacyBehavior><a>Contact Us</a></Link></li>
                            <li><Link href='/' legacyBehavior><a>Comming soon</a></Link></li>
                            <li><Link href='/' legacyBehavior><a>Comming soon</a></Link></li>
                            <li><Link href='/category/blogging/' legacyBehavior><a>Blog</a></Link></li>
                            <li><Link href='/' legacyBehavior><a>Privacy Policy</a></Link></li>
                            <li><Link href='/' legacyBehavior><a>Terms & Conditions</a></Link></li>
                        </ul>
                    </div>
                    <div className={Styles.customerService}>
                        <ul>
                            <h4>CUSTOMER SERVICE</h4>
                            <li><Link href='/' legacyBehavior><a>Search Terms</a></Link></li>
                            <li><Link href='/category/all-website-categories/' legacyBehavior><a>Advanced Search</a></Link></li>
                            <li><Link href='/about/' legacyBehavior><a>Contact Us</a></Link></li>
                            <li><Link href='/' legacyBehavior><a>Comming soon</a></Link></li>
                            <li><Link href='/category/alldesigns/' legacyBehavior><a>Websites</a></Link></li>
                            <li><Link href='/' legacyBehavior><a>Website FAQs</a></Link></li>
                            <li><Link href='/sitemap.xml/' legacyBehavior><a>Site Map</a></Link></li>
                        </ul>
                    </div>
                    <div className={Styles.signup}>
                        <h4>NEWUSER SIGN UP</h4>
                        <p>Sign up for exclusive updates, new arrivals & insider only discounts</p>
                        <form id="email-form">
                            <label className={Styles.label} htmlFor="email-input">Email Address:</label>
                            <input className={Styles.inputemail} type="email" id="email-input" name="email"
                                placeholder="Enter your email address" required />
                            <button type="submit" className={Styles.submit}>Submit</button>
                        </form>
                        <div className={Styles.socialicon}>
                            <Link href='/' legacyBehavior><a><img className={Styles.sicon} src="/img/instagram.png" /></a></Link>
                            <Link href='/' legacyBehavior><a><img className={Styles.sicon} src="/img/facebook.png" /></a></Link>
                            <Link href='/' legacyBehavior><a><img className={Styles.sicon} src="/img/telegram.png" /></a></Link>
                            <Link href='/' legacyBehavior><a><img className={Styles.sicon} src="/img/youtube.png" /></a></Link>
                        </div>
                    </div>
                </div>
                <div className={Styles.copyright}>
                    <div className={Styles.rights}>
                        <p>All Rights Reserved. Powered By <Link href='/' legacyBehavior><a title="Coding Web Studio">Coding Web Studio</a></Link>.</p>
                        <p>Copyright | &copy; <Link href='/' legacyBehavior><a>Coding Web Studio</a></Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
