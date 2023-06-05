import  React ,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import styles from '../styles/Category.module.css'

const Category = () => {
    const [showAllCategories, setShowAllCategories] = useState(false);

    const handleToggleCategories = () => {
        setShowAllCategories(!showAllCategories);
    };

    const categoriesListStyle = {
        height: showAllCategories ? 'auto' : '160px'
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
                        <Link href="/category/ecommerce" legacyBehavior><a><span>E-commerce</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/category/movies" legacyBehavior><a><span>Movies site</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/category/personal" legacyBehavior><a><span>Personal web</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/category/resume" legacyBehavior><a><span>Resume web</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/category/blogging" legacyBehavior><a><span>Blog web</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/category/gaming" legacyBehavior><a><span>Gaming web</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/category/bussiness" legacyBehavior><a><span>Business web</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/category/event" legacyBehavior><a><span>Event website</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/category/non-profitable" legacyBehavior><a><span>Nonprofit web</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>
                        <Link href="/category/sitetemplates" legacyBehavior><a><span>Site Templates</span><span><FontAwesomeIcon
                            icon={faChevronRight} className={styles.chevronR} /></span></a></Link>

                    </div>
                </div>
                <button className={styles.catebtn} onClick={handleToggleCategories}>{buttonText}<FontAwesomeIcon icon={showAllCategories ? faAngleUp : faAngleDown} className={styles.chevronD} /></button>
            </div>
        </section>
    )
}

export default Category