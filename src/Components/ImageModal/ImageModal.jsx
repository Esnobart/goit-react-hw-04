import Modal from "react-modal"

Modal.setAppElement('#root');

export const ImageModal = ({isOpen, closeModal, img}) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
            <img src={img.urls.regular || img.urls.small} alt={img.alt_description} />
            <button onClick={() => closeModal()}>Close</button>
        </Modal>
    )
}