import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import styles from '../styles/Category.module.css'

const Category = () => {
    const router = useRouter();
    const [showAllCategories, setShowAllCategories] = useState(false);

    const handleToggleCategories = () => {
        setShowAllCategories(!showAllCategories);
    };

    const categoriesListStyle = {
        height: showAllCategories ? 'auto' : '160px',
    };

    const isActiveCategory = (pathname) => {
        return router.pathname === pathname ? styles.active : '';
    };

    const handleCategoryClick = (pathname) => {
        if (router.pathname === pathname) {
            router.push(pathname);
        }
    };

    const buttonText = showAllCategories ? 'Show less' : 'Show more';

    return (
        <section>
            <div className={styles.allcatebox}>
                <div className={styles.catebox}>
                    <div className={styles.catetitlebx}>
                        <div className={styles.cateimgbx}>
                            <img src="/img/categories.png" alt="NOIMAGE" />
                        </div>
                        <h3>All categories</h3>
                    </div>
                    <div className={styles.categorieslist} style={categoriesListStyle}>
                        <Link href="/category/ecommerce" legacyBehavior>
                            <a
                                className={`${isActiveCategory('/category/ecommerce')}`}
                                onClick={() => handleCategoryClick('/category/ecommerce')}
                            >
                                <span>E-commerce</span>
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronR} />
                                </span>
                            </a>
                        </Link>
                        <Link href="/category/movies" legacyBehavior>
                            <a
                                className={`${isActiveCategory('/category/movies')}`}
                                onClick={() => handleCategoryClick('/category/movies')}
                            >
                                <span>Movies site</span>
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronR} />
                                </span>
                            </a>
                        </Link>
                        <Link href="/category/portfolio" legacyBehavior>
                            <a
                                className={`${isActiveCategory('/category/portfolio')}`}
                                onClick={() => handleCategoryClick('/category/portfolio')}
                            >
                                <span>Portfolio web</span>
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronR} />
                                </span>
                            </a>
                        </Link>
                        <Link href="/category/resume" legacyBehavior>
                            <a
                                className={`${isActiveCategory('/category/resume')}`}
                                onClick={() => handleCategoryClick('/category/resume')}
                            >
                                <span>Resume web</span>
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronR} />
                                </span>
                            </a>
                        </Link>
                        <Link href="/category/blogging" legacyBehavior>
                            <a
                                className={`${isActiveCategory('/category/blogging')}`}
                                onClick={() => handleCategoryClick('/category/blogging')}
                            >
                                <span>Blog web</span>
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronR} />
                                </span>
                            </a>
                        </Link>
                        <Link href="/category/gaming" legacyBehavior>
                            <a
                                className={`${isActiveCategory('/category/gaming')}`}
                                onClick={() => handleCategoryClick('/category/gaming')}
                            >
                                <span>Gaming web</span>
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronR} />
                                </span>
                            </a>
                        </Link>
                        <Link href="/category/bussiness" legacyBehavior>
                            <a
                                className={`${isActiveCategory('/category/bussiness')}`}
                                onClick={() => handleCategoryClick('/category/bussiness')}
                            >
                                <span>Business web</span>
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronR} />
                                </span>
                            </a>
                        </Link>
                        <Link href="/category/event" legacyBehavior>
                            <a
                                className={`${isActiveCategory('/category/event')}`}
                                onClick={() => handleCategoryClick('/category/event')}
                            >
                                <span>Event website</span>
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronR} />
                                </span>
                            </a>
                        </Link>
                        <Link href="/category/non-profitable" legacyBehavior>
                            <a
                                className={`${isActiveCategory('/category/non-profitable')}`}
                                onClick={() => handleCategoryClick('/category/non-profitable')}
                            >
                                <span>Nonprofit web</span>
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronR} />
                                </span>
                            </a>
                        </Link>
                        <Link href="/category/sitetemplates" legacyBehavior>
                            <a
                                className={`${isActiveCategory('/category/sitetemplates')}`}
                                onClick={() => handleCategoryClick('/category/sitetemplates')}
                            >
                                <span>Site Templates</span>
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronR} />
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
                <button className={styles.catebtn} onClick={handleToggleCategories}>{buttonText}<FontAwesomeIcon icon={showAllCategories ? faAngleUp : faAngleDown} className={styles.chevronD} /></button>
            </div>
        </section>
    )
}

export default Category