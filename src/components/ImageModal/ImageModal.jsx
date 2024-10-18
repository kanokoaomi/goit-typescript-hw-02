import Modal from 'react-modal'
import styles from './ImageModal.module.css'

const ImageModal = ({ isOpen, closeModal, modalData }) => {
    const customStyles = {
        content: {
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0",
            padding: 0,
            width: "500px",
            height: "fit-content",
            opacity: 1,
            backgroundColor: "black",
            color: "white",
            inset: 0,
        },

    }

    return (
        <>
            <Modal
                style={customStyles}
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Image modal"
                overlayClassName={styles.modalOverlay}
            >
                <img src={modalData.urls.regular} alt={modalData.description} />
            </Modal>
        </>
    )
}

export default ImageModal