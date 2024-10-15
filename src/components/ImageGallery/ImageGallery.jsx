import ImageModule from "../ImageModule/ImageModule"
import styles from './ImageGallery.module.css'
import Masonry from "react-responsive-masonry"

const ImageGallery = ({ images }) => {
    return (
        <Masonry className={styles.masonryContainer} columnsCount={3} gutter="25px">
            {images.map((image) => {
                return (
                    <div className={styles.masonryItem} key={image.id}>
                        <ImageModule image={image} />
                    </div>
                )
            })}
        </Masonry>
    )
}

export default ImageGallery