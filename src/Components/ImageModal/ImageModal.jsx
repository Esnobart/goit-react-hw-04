import Modal from "react-modal"

Modal.setAppElement('#root');

const stylesModal = {
    content: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        overflow: 'auto',
        outline: 'none',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'auto',
        maxWidth: 'fit-content',
        height: 'auto',
        maxHeight: 'fit-content'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        zIndex: 1000 
    }
}

export const ImageModal = ({isOpen, closeModal, img}) => {
    return (
        <Modal isOpen={isOpen} style={stylesModal} onRequestClose={closeModal}>
            <img src={img.urls.small} alt={img.alt_description} />
        </Modal>
    )
}