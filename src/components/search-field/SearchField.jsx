import styles from "./search-field.module.css";
import resetImage from "./reset.svg";
import searchImage from "./search.svg";

export const SearchField = ({ value, onChange }) => {
  return (
    <div className={styles.root}>
      <img src={searchImage} className={styles.search} />
      <input
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Телефоны, яблоки, груши..."
      />
      <img
        src={resetImage}
        className={styles.reset}
        style={!value ? { display: "none" } : null}
        onClick={() => onChange("")}
      />
    </div>
  );
};
