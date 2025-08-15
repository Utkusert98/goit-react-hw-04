import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={style.imageUl}>
      {images.map((image, index) => (
        <li key={index} className={style.imageLi}>
          <ImageCard image={image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
