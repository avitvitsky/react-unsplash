import { useState } from "react";
import { Button } from "../button/Button";
import { SearchField } from "../search-field/SearchField";

import styles from "./search.module.css";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.root}>
      <form
        className={styles.search}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <SearchField value={searchValue} onChange={setSearchValue} />
        <Button title="Искать" />
      </form>
    </div>
  );
};
