import React from 'react';
import styles from './header.module.css';
import Search from '../search/search.component';

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.HeaderSearch}>
      <Search />
    </div>
    <div className={styles.HeaderAddProduct}></div>
  </header>
);

export default Header;
