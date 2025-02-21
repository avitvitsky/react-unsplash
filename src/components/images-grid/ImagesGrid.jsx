import { useEffect, useState } from "react";
import { ImageItem } from "../image-item/ImageItem";
import styles from "./images-grid.module.css";

export const ImagesGrid = ({ images, status }) => {
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setIsEmpty(false);
  }, [status]);

  useEffect(() => {
    if (status.status !== 200) {
      setIsEmpty(true);
    }
  }, [status]);

  useEffect(() => {
    let timeoutId;
    if (Object.keys(status).length && status.ok && images.length === 0) {
      timeoutId = setTimeout(() => {
        setIsEmpty(true);
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [status, images.length]);

  return (
    <>
      <div
        className={styles.empty}
        style={isEmpty ? null : { display: "none" }}
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
