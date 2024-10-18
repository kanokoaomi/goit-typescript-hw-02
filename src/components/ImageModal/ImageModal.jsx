import Modal from 'react-modal'
// import styles from './ImageModal.module.css'

const ImageModal = ({ isOpen, closeModal, modalData }) => {
    // const customStyles = {
    //     content: {
    //         display: "flex",
    //         position: "relative",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         borderRadius: "0",
    //         padding: 0,
    //         width: "500px",
    //         height: "fit-content",
    //         opacity: 1,
    //         backgroundColor: "rgba(144, 158, 189, 0.5)",
    //         color: "white",
    //         inset: 0,
    //     },

    // }

    return (
        <>
            <Modal
                style={{
                    overlay: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: "999999",
                        backgroundColor: "rgba(144, 158, 189, 0.5)",
                        backdropFilter: "blur(5px)",
                    },
                    content: {
                        display: "flex",
                        position: "relative",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "0",
                        border: "none",
                        padding: "0",
                        width: "700px",
                        height: "700px",
                        overflow: "hidden",
                        // height: "fit-content",
                        opacity: 1,
                        backgroundColor: "transparent",
                        color: "white",
                        inset: 0,
                    },
                }}
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Image modal"
            >
                <img src={modalData.urls.regular} alt={modalData.description} />
            </Modal>
        </>
    )
}

export default ImageModal