import Modal from "react-modal"
import css from './ImageModal.module.css'

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
        height: 'auto',
        maxHeight: 'fit-content',
        width: 'auto',
        maxWidth: 'fit-content'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        zIndex: 1000 
    }
}

export const ImageModal = ({isOpen, closeModal, img}) => {
    return (
        <Modal isOpen={isOpen} style={stylesModal} onRequestClose={closeModal}>
            <img src={img?.urls?.regular} alt={img?.alt_description} className={css.image} />
        </Modal>
    )
}