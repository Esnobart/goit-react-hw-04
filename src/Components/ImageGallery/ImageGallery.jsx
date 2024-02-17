import { useState } from "react"
import { ImageModal } from "../ImageModal/ImageModal";
import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ items, loadMore }) => {
    const [modal, setModal] = useState(false);
    const [img, setImg] = useState(null);

    const openModal = (image) => {
        setImg(image);
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <ul>
            {items.map((item => (
                <li key={item.id} onClick={() => openModal(item)}> 
                    <ImageCard data={item} />
                </li>
            )))}
            {img && (<ImageModal isOpen={modal} closeModal={closeModal} img={img} />)}
            {items.length > 20 && <button onClick={loadMore}>Load More</button>} 
        </ul>
    )
}