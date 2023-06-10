import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Category.module.css'
import Link from 'next/link'

const Searchsec = (props) => {
    const { title, name, pera , btitle = 'category'} = props;
    return (
        <section className={styles.searchsec}>
            <div className={`${styles.websearch} ${styles.maxwidth}`}>
                <div className={styles.pagelist}>
                    <ul>
                        <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
                        <li>/</li>
                        <li><Link href='/category/all-website-categories'>{btitle}</Link></li>
                        <li>/</li>
                        <li>{title}</li>
                    </ul>
                    <h1>{name}</h1>
                </div>
                <form>
                    <input type="search" placeholder="e.g. responsive websites codes" name="term" />
                    <button type="submit" aria-label="Search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
                <p className={styles.pagelistpera}>{pera}</p>
            </div>
        </section>
    )
}

export default Searchsec