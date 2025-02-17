import classNames from "classnames";
import { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { SearchField } from "../search-field/SearchField";

import styles from "./search.module.css";
import { ImagesGrid } from "../images-grid/ImagesGrid";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    if (!searchValue) {
      setSearchActive(false);
    }
  }, [searchValue]);

  const handleButtonClick = () => {
    if (searchValue === "") {
      return;
    }

    setSearchActive(true);
  };

  return (
    <>
      <div
        className={classNames({
          [styles.root]: !searchActive,
        })}
      >
        <form
          className={styles.search}
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <SearchField value={searchValue} onChange={setSearchValue} />
          <Button title="Искать" onClick={handleButtonClick} />
        </form>
      </div>
      <ImagesGrid />
    </>
  );
};
