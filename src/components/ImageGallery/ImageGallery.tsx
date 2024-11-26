import ImageCard from "../ImageCard/ImageCard";
import styles from './ImageGallery.module.css';

export interface Image {
  id: string;
  imageSrc: string;
  imageAlt: string;
  description: string; 
  imageUrl: string; 
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

export interface ModalData {
  id: string;
  imageSrc: string;
  imageAlt: string;
  description: string; 
  imageUrl: string; 
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (data: ModalData) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={styles.container}>
      {images.map((image) => {
        return (
          <li className={styles.item} key={image.id}>
            <div className={styles.masonryItem}>
              <ImageCard
                image={image}
                openModal={(data: ModalData) => openModal({
                  id: String(image.id), 
                  imageSrc: image.urls.regular,
                  imageAlt: image.description, 
                  description: image.description,
                  imageUrl: image.urls.regular,
                  urls: image.urls
                })}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
