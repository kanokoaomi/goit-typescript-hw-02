import ImageCard from "../ImageCard/ImageCard"
import styles from './ImageGallery.module.css'
// import Masonry from "react-responsive-masonry"

const ImageGallery = ({ images, openModal }) => {
    return (
        <ul className={styles.container}>
            {images.map((image) => {
                return (
                    <li className={styles.item} key={image.id}>
                        <div className={styles.masonryItem}>
                            <ImageCard
                                image={image}
                                openModal={openModal} />
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default ImageGallery