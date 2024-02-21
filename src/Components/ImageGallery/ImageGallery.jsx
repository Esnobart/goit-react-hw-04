import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export const ImageGallery = ({ items, openModal }) => {
    

    return (
        console.log(items),
        <div className={css.container}>
                <ul className={css.list}>
                    {items.map((item => (
                        <li key={item.id} onClick={() => openModal(item)}>
                            <ImageCard data={item} />
                        </li>
                    )))}
                </ul>
            </div>
    )
}