import css from "./ImageCard.module.css";

const ImageCard = ({ url, description, openModal }) => {
  return (
    <div className={css.photoContainer}>
      <img
        src={url.small}
        alt={description}
        className={css.photo}
        onClick={() => openModal(url.regular)}
      />
    </div>
  );
};

export default ImageCard;
