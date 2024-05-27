import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ pictures, openModal }) => {
  return (
    <ul className={css.container}>
      {pictures.map(({ id, urls, alt_description }) => (
        <li
          key={id}
          className={css.item}
        >
          <ImageCard
            url={urls}
            description={alt_description}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
