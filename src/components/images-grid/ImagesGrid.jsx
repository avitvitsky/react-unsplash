import { useEffect, useRef, useState } from "react";
import { ImageItem } from "../image-item/ImageItem";
import closeImage from "./close.svg";
import styles from "./images-grid.module.css";

export const ImagesGrid = ({ images, status }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const modal = useRef();
  const modalImage = useRef();

  useEffect(() => {
    setIsEmpty(false);
  }, [status]);

  useEffect(() => {
    if (Object.keys(status).length && status.status !== 200) {
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

  const handleImageOnClick = (src) => {
    const offsetWidthWithScrollbar = document.body.offsetWidth;
    modal.current.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${
      document.body.offsetWidth - offsetWidthWithScrollbar
    }px`;
    modalImage.current.src = src;
  };

  const handleCloseOnClick = () => {
    modal.current.style.display = "none";
    document.body.style.paddingRight = "0px";
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div
        className={styles.empty}
        style={isEmpty && !images.length ? null : { display: "none" }}
      >
        К сожалению, поиск не дал результатов
      </div>
      <div className={styles.root}>
        {images.map((url, index) => (
          <ImageItem key={index} src={url} onClick={handleImageOnClick} />
        ))}
      </div>
      <div ref={modal} className={styles.modal}>
        <div className={styles.close} onClick={handleCloseOnClick}>
          <img src={closeImage} />
        </div>
        <img ref={modalImage} className={styles.modalImage} />
      </div>
    </>
  );
};
