import classNames from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../button/Button";
import { ImagesGrid } from "../images-grid/ImagesGrid";
import { SearchField } from "../search-field/SearchField";

import styles from "./search.module.css";

const apiUrl = new URL(
  "https://api.unsplash.com/search/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs"
);

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const prevSearchValueRef = useRef("");
  const [searchImages, setSearchImages] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [searchPage, setSearchPage] = useState(0);
  const [searchStatus, setSearchStatus] = useState({});

  const loadData = useCallback(async () => {
    apiUrl.searchParams.set("query", searchValue);
    apiUrl.searchParams.set("page", searchPage);
    const response = await fetch(apiUrl);
    setSearchStatus({ ok: response.ok, status: response.status });
    if (!response.ok) {
      setSearchPage(0);
      return;
    }
    const result = await response.json();
    const urls = result.results.reduce((acc, item) => {
      acc.push(item.urls.small);
      return acc;
    }, []);
    setSearchImages((prev) => [...prev, ...urls]);
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setSearchPage(searchPage + 1);
    }
  }, [searchValue, searchPage]);

  useEffect(() => {
    if (!searchPage) {
      return;
    }

    loadData();
  }, [searchPage]);

  useEffect(() => {
    const callback = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setSearchPage(searchPage + 1);
      }
    };
    window.addEventListener("scroll", callback);

    return () => window.removeEventListener("scroll", callback);
  }, [searchPage]);

  const handleSearchFieldChange = (value) => {
    setSearchValue(value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setSearchActive(true);

    if (!searchValue || prevSearchValueRef.current !== searchValue) {
      prevSearchValueRef.current = searchValue;
      setSearchImages([]);
      setSearchPage(1);
    }
  };

  return (
    <>
      <div
        className={classNames({
          [styles.root]: !searchActive,
          [styles.rootActive]: searchActive,
        })}
      >
        <form className={styles.search} onSubmit={handleSubmitForm}>
          <SearchField value={searchValue} onChange={handleSearchFieldChange} />
          <Button title="Искать" />
        </form>
      </div>
      {searchActive && (
        <ImagesGrid images={searchImages} status={searchStatus} />
      )}
    </>
  );
};
