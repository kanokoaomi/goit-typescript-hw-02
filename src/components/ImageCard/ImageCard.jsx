import styles from "./ImageCard.module.css"

const ImageCard = ({ image, openModal }) => {
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