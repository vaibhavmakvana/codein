import React,{ useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import Searchsec from '@/components/Searchsec'
import styles from '../../styles/Webpage.module.css'
import * as fs from 'fs';

const Post = (props) => {

    const [blog, setBlog] = useState(props.myBlog);
    // const router = useRouter();

    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = router.query;
    //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
    //         return a.json();
    //     })
    //         .then((parsed) => {
    //             setBlog(parsed)
    //         })
    // }, [router.isReady])

    const metaData = {
        lastUpdate: '08 june 2023',
        published: '21 January 2023',
        highResolution: 'Yes',
        compatibleBrowsers: ['IE10', 'IE11', 'Firefox', 'Safari', 'Opera', 'Chrome', 'Edge'],
        compatibleWith: ['handwritten Css'],
        software: ['Visual Studio Code'],
        pages: 1,
        owner: 'Coding Web Studio',
        layout: 'Responsive',
        tags: ['clothes', 'drink', 'fashion', 'fashion store templates', 'food', 'furniture template', 'opencart', 'opencart template', 'opencart theme', 'responsive', 'responsive opencart theme', 'wine'],
    };

    return <>

        <Searchsec btitle={"webpages"} title={blog && blog.slug} name={blog && blog.title} pera='website page for every page need website page for every page need website page for every page need website page for every page need' />

        <div className={styles.container}>
            <div className={styles.leftData}>
                <div className={styles.webTitle}>
                    <h1>{blog && blog.title}</h1>
                </div>
                <div className={styles.webdatacard}>
                    <div className={styles.webdatamainimg}>
                        <img src={blog && blog.imgSrc} alt="" />
                        <a href={blog && blog.href} target="_blank">
                            <div className={styles.uiverse}>
                                <span className={styles.tooltip}>Visit Website</span>
                                <span className={styles.spanName}>
                                    View Live
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className={styles.webdatamainpera}>
                        <p>{blog && blog.content}</p>
                    </div>
                </div>
            </div>
            <div className={styles.rightsidebar}>
                <div className={styles.priceBox}>
                    <div className={styles.topprice}>
                        <span className={styles.priceLabel}>Total Cost :</span>
                        <div className={styles.priceContainer}>
                            <span className={styles.pricebefore}>{blog && blog.pricebefore}</span>
                            <span className={styles.priceAfter}>{blog && blog.priceAfter}</span>
                        </div>
                    </div>

                    <ul className={styles.features}>
                        <li className={styles.featureItem}>&#9989; &nbsp;   Responsive website design</li>
                        <li className={styles.featureItem}>&#9989;  &nbsp;  Only 1 page included</li>
                        <li className={styles.featureItem}>&#9989;  &nbsp;   Basic SEO optimization</li>
                        <li className={styles.featureItem}>&#9989;  &nbsp;  Mobile Friendly</li>
                        <li className={styles.featureItem}>&#10150; &nbsp; &nbsp;  Contact via email</li>
                        <li className={styles.featureItem}>&#10150; &nbsp; &nbsp; Full website pages available ($25)</li>
                        <li className={styles.featureItem}>&#10150;  &nbsp; &nbsp; This Project available in next.js($25)</li>
                    </ul>
                    <div className={styles.buttons}>
                        <a href="https://makmovies-codingstudio.netlify.app/" className={`${styles.btn} ${styles.addToCart}`} target="_blank">Visit Website</a>
                        <a href="/img/noimage.jpg" download className={`${styles.btn} ${styles.download}`}>Download Now</a>
                    </div>
                </div>
                <div className={styles.webdetailesbox}>
                    <div>
                        <table>
                            <tbody>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>Last Update :</td>
                                    <td className={styles.td2}>{metaData.lastUpdate}</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>Published :</td>
                                    <td className={styles.td2}>{metaData.published}</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>High Resolution :</td>
                                    <td className={styles.td2}>{metaData.highResolution}</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>Compatible Browsers :</td>
                                    <td className={styles.td2}>{metaData.compatibleBrowsers.join(', ')}</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>Compatible With :</td>
                                    <td className={styles.td2}>{metaData.compatibleWith.join(', ')}</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>Software :</td>
                                    <td className={styles.td2}>{metaData.software.join(', ')}</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>Pages :</td>
                                    <td className={styles.td2}>{metaData.pages}</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>Owner :</td>
                                    <td className={styles.td2}>{metaData.owner}</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>Layout :</td>
                                    <td className={styles.td2}>{metaData.layout}</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>Tags :</td>
                                    <td className={styles.td2}>{metaData.tags.join(', ')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export async function getStaticPaths() {
    const jsonFiles = fs.readdirSync('websitedata');
    const paths = jsonFiles.map((file) => {
        const jsonData = fs.readFileSync(`websitedata/${file}`);
        const slug = JSON.parse(jsonData).slug;
        return { params: { slug } };
    });

    return {
        paths,
        fallback: true // false or 'blocking'
    };
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { slug: 'ecommece-website-template-1' } },
//             { params: { slug: 'ecommece-website-template-1' } },
//             { params: { slug: 'movie-download-website-template-1' } },
//             { params: { slug: 'our-ek-page' } },
//         ],
//         fallback: true // false or 'blocking'
//     };
// }

export async function getStaticProps(context) {
    const { slug } = context.params;


    let myBlog = await fs.promises.readFile(`websitedata/${slug}.json`, 'utf-8')

    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
}
export default Post