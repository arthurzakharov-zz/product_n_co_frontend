import React from 'react';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.HeaderSearch}>
      <label>
        <input placeholder="Search product..." />
      </label>
    </div>
    <div className={styles.HeaderAddProduct}></div>
  </header>
);

export default Header;
