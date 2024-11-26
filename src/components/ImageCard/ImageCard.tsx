import { Image, ModalData } from "../ImageGallery/ImageGallery";
import styles from "./ImageCard.module.css"

interface ImageGalleryProps {
  image: Image;
  openModal: (data: ModalData) => void;
}

const ImageCard: React.FC<ImageGalleryProps> = ({ image, openModal }) => {

    const modalData: ModalData = {
        id: image.id,
        imageSrc: image.urls.regular, 
        imageAlt: image.description || '', 
        description: image.description || '',  
        imageUrl: image.urls.regular,
        urls: image.urls, 
    };

    return (
        <div className={styles.imgContainer}>
            <img className={styles.img} onClick={() => openModal(modalData)} src={image.urls.small} alt={image.description} />
            {/* <p>Username: {image.user.username}</p>
            <p>{image.likes}❤️</p> */}
            {/* <p>{image.description}</p> */}
        </div>
    )
}

export default ImageCard