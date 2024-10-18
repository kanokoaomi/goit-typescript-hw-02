import Modal from 'react-modal'
import styles from './ImageModal.module.css'

const ImageModal = ({ isOpen, closeModal, modalData }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(144, 158, 189, 0.5)',
            border: 'none',
            padding: '0',
            maxWidth: '70%',
            maxHeight: '70%',
        }
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