import Modal from 'react-modal'
// import styles from './ImageModal.module.css'
import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContextProvider"

const ImageModal = ({ isOpen, closeModal, modalData }) => {

    Modal.setAppElement('#root')
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Modal
                style={{
                    overlay: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: "999999",
                        backgroundColor: theme === "dark"
                            ? "rgba(36, 36, 36, 0.8)"
                            : theme === "light"
                                ? "rgba(255, 255, 255, 0.8)"
                                : "rgba(144, 158, 189, 0.8)",
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