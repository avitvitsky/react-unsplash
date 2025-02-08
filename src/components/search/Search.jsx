import { Button } from "../button/Button";
import { SearchField } from "../search-field/SearchField";

import styles from "./search.module.css";

export const Search = () => {
  return (
    <div className={styles.root}>
      <form className={styles.search}>
        <SearchField />
        <Button title="Искать" />
      </form>
    </div>
  );
};
