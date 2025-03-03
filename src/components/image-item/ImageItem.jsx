import { useEffect, useRef, useState } from "react";
import styles from "./image-item.module.css";

export const ImageItem = ({ src, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const image = useRef();

  const handleOnLoad = () => setTimeout(() => setIsLoaded(true), 100);

  useEffect(() => {
    if (image.current.complete) {
      setTimeout(() => setIsLoaded(true), 100);
    }
  }, []);

  return (
    <>
      <div
        className={styles.placeholder}
        style={isLoaded ? { display: "none" } : null}
      />
      <a
        onClick={() => onClick(src)}
        style={!isLoaded ? { display: "none" } : null}
      >
        <img
          className={styles.image}
          ref={image}
          src={src}
          onLoad={handleOnLoad}
        />
      </a>
    </>
  );
};
