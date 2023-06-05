import { React, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("nav");
            header.classList.toggle("sticky", window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setClicked(false);
    };

    useEffect(() => {
        // Update active link state when the page is reloaded
        setActiveLink(router.pathname);
    }, [router.pathname]);


    return (
        <nav className="header">
            <div className="logo">
                <Link href="/" passHref legacyBehavior>
                    <a>
                        <img src="/c.png" />
                    </a>
                </Link>
                <Link href="/" passHref legacyBehavior>
                    <a>ODING WEB STUDIO</a>
                </Link>
            </div>
            <div>
                <ul id="navbar" className={clicked ? 'navbar active' : 'navbar'}>
                    <li>
                        <Link href="/" passHref legacyBehavior>
                            <a
                                className={activeLink === '/' ? 'active' : ''}
                                onClick={() => handleLinkClick('/')}
                            >
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/ecommerce" passHref legacyBehavior>
                            <a
                                className={activeLink === '/category/ecommerce' ? 'active' : ''}
                                onClick={() => handleLinkClick('/category/ecommerce')}
                            >
                                E-commerce
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/portfolio" passHref legacyBehavior>
                            <a
                                className={activeLink === '/category/portfolio' ? 'active' : ''}
                                onClick={() => handleLinkClick('/category/portfolio')}
                            >
                                Portfolio
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/movies" passHref legacyBehavior>
                            <a
                                className={activeLink === '/category/movies' ? 'active' : ''}
                                onClick={() => handleLinkClick('/category/movies')}
                            >
                                Movies
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/all-website-categories" passHref legacyBehavior>
                            <a
                                className={activeLink === '/category/all-website-categories' ? 'active' : ''}
                                onClick={() => handleLinkClick('/category/all-website-categories')}
                            >
                                Category
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" passHref legacyBehavior>
                            <a
                                className={activeLink === '/about' ? 'active' : ''}
                                onClick={() => handleLinkClick('/about')}
                            >
                                About
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div id="mobile" onClick={handleClick}>
                <FontAwesomeIcon className="bar" icon={clicked ? faTimes : faBars} />
            </div>
        </nav>
    )
}

export default Navbar
