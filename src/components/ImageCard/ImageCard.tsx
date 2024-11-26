import { Image, ModalData } from "../ImageGallery/ImageGallery";
import styles from "./ImageCard.module.css"

interface ImageGalleryProps {
  images: Image[];
  openModal: (data: ModalData) => void;
}

const ImageCard: React.FC<ImageGalleryProps> = ({ image, openModal }) => {
    return (
        <div className={styles.imgContainer}>
            <img className={styles.img} onClick={() => openModal(image)} src={image.urls.small} alt={image.description} />
            {/* <p>Username: {image.user.username}</p>
            <p>{image.likes}❤️</p> */}
            {/* <p>{image.description}</p> */}
        </div>
    )
}

export default ImageCard