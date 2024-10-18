const ImageCard = ({ image, openModal }) => {
    return (
        <div>
            <img onClick={() => openModal(image)} src={image.urls.small} alt={image.description} />
            {/* <p>Username: {image.user.username}</p>
            <p>{image.likes}❤️</p> */}
            {/* <p>{image.description}</p> */}
        </div>
    )
}

export default ImageCard