import React from 'react'
import Styles from '../styles/Footer.module.css'


const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footersec}>
                <div className={Styles.finfo}>
                    <div className={Styles.shop}>
                        <ul>
                            <h4>CODING STUDIO</h4>
                            <li><a href="/">New In</a></li>
                            <li><a href="/">E-commerce</a></li>
                            <li><a href="/">Gaming</a></li>
                            <li><a href="/">Marketing</a></li>
                            <li><a href="/">Accessories</a></li>
                            <li><a href="/">Blogging</a></li>
                            <li><a href="/">Sale & Special Offers</a></li>
                        </ul>
                    </div>
                    <div className={Styles.information}>
                        <ul>
                            <h4>INFORMATION</h4>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Customer Service</a></li>
                            <li><a href="/">Reward Program</a></li>
                            <li><a href="/">Shipping & Returns</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </div>
                    <div className={Styles.customerService}>
                        <ul>
                            <h4>CUSTOMER SERVICE</h4>
                            <li><a href="/">Search Terms</a></li>
                            <li><a href="/">Advanced Search</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Sale & Special Offers</a></li>
                            <li><a href="/">Website FAQs</a></li>
                            <li><a href="/">Websites</a></li>
                            <li><a href="/">Orders And Returns</a></li>
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
                            <a href="/"><img className={Styles.sicon} src="/img/instagram.png" /></a>
                            <a href="/"><img className={Styles.sicon} src="/img/facebook.png" /></a>
                            <a href="/"><img className={Styles.sicon} src="/img/telegram.png" /></a>
                            <a href="/"><img className={Styles.sicon} src="/img/youtube.png" /></a>
                        </div>
                    </div>
                </div>
                <div className={Styles.copyright}>
                    <div className={Styles.rights}>
                        <p>All Rights Reserved. Powered By <a href="/">Coding Web Studio</a>.</p>
                        <p>Copyright | &copy; <a href="/">Coding Web Studio</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
