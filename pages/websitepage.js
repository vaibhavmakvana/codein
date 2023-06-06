import Searchsec from '@/components/Searchsec'
import React from 'react'
import styles from '../styles/Webpage.module.css'

const websitepage = () => {
    return (
        <>
            <Searchsec name={"websitepage edit pending"} pera='website page for every page need website page for every page need website page for every page need website page for every page need' />

            <div className={styles.container}>
                <div className={styles.leftData}>
                    <div className={styles.webTitle}>
                        <h1>Webpage data edit panding</h1>
                    </div>
                    <div className={styles.webdatacard}>
                        <div className={styles.webdatamainimg}>
                            <img src="/img/makmovies.png" alt="" />
                            <a href="/">
                                <div className={styles.uiverse}>
                                    <span className={styles.tooltip}>Visit Website</span>
                                    <span className={styles.spanName}>
                                        View Live
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className={styles.webdatamainpera}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reiciendis
                            expedita architecto necessitatibus suscipit, at, officiis molestias officia voluptate earum
                            voluptatum. Recusandae repellendus sunt optio cupiditate nemo dolore iure nisi quis nostrum, culpa
                            assumenda quam delectus architecto quae repudiandae sequi illum sed molestias ratione quidem
                            voluptates labore doloremque quibusdam accusamus. Nostrum dolorem ex natus et aperiam aut fugit
                            ipsum laudantium. Architecto maxime animi corrupti atque sint, voluptate quos illum distinctio nobis
                            qui fugit, nisi doloribus doloremque. Autem praesentium, odio officiis eveniet quisquam inventore
                            doloremque numquam ea laboriosam in. Aliquam aspernatur ratione rerum tenetur, dolores pariatur
                            voluptas, harum quibusdam quas molestiae laudantium sint totam debitis delectus facere perspiciatis.
                            Eum corrupti repellat nisi rerum laboriosam distinctio ex commodi, nostrum, optio natus ratione
                            quisquam est temporibus debitis inventore aut corporis consequuntur impedit reiciendis voluptate
                        </div>
                    </div>
                </div>
                <div className={styles.rightsidebar}>
                    <h1>Right Side bar edit panding</h1>
                </div>
            </div>
        </>
    )
}

export default websitepage