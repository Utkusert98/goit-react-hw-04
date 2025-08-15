import style from "./ImageCard.module.css";
const ImageCard = ({ image, onClick }) => {
  return (
    <div className={style.imageDiv}>
      <img
        onClick={() => onClick(image)}
        className={style.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
