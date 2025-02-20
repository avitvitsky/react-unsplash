import { useState } from "react";
import styles from "./image-item.module.css";

export const ImageItem = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOnLoad = () => setIsLoaded(true);

  return (
    <>
      <div
        className={styles.placeholder}
        style={isLoaded ? { display: "none" } : null}
      ></div>
      <a style={!isLoaded ? { display: "none" } : null}>
        <img src={src} onLoad={handleOnLoad} />
      </a>
    </>
  );
};
