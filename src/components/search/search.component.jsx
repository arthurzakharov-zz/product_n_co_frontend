import React from 'react';
import styles from './search.module.css';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

const Search = () => (
  <div className={styles.Search}>
    <SearchIcon className={styles.SearchIcon} />
    <label className={styles.SearchLabel}>
      <input placeholder="Search product..." className={styles.SearchInput} />
    </label>
  </div>
);

export default Search;
