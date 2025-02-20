import { ImageItem } from "../image-item/ImageItem";
import styles from "./images-grid.module.css";

export const ImagesGrid = ({ images }) => {
  return (
    <>
      <div
        className={styles.empty}
        style={images.length !== 0 ? { display: "none" } : null}
      >
        К сожалению, поиск не дал результатов
      </div>
      <div className={styles.root}>
        {images.map((url, index) => (
          <ImageItem key={index} src={url} />
        ))}
      </div>
    </>
  );
};
