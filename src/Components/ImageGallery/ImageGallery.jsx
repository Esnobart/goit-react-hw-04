import { useState } from "react"
import { ImageModal } from "../ImageModal/ImageModal";
import { ImageCard } from "../ImageCard/ImageCard";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import css from "./ImageGallery.module.css"

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
        console.log(items),
        <div className={css.container}>
                <ul className={css.list}>
                    {items.map((item => (
                        <li key={item.id} onClick={() => openModal(item)}>
                            <ImageCard data={item} />
                        </li>
                    )))}
                    {img && (<ImageModal isOpen={modal} closeModal={closeModal} img={img} />)}
                </ul>
                {items.length > 0 && <LoadMoreBtn loadMore={loadMore} />}
            </div>
    )
}