import React from 'react';
import styles from './header.module.css';
import Search from '../search/search.component';
import AddProduct from '../add-product/add-product.component';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderSearch}>
        <Search />
      </div>
      <div className={styles.HeaderAddProduct}>
        <AddProduct />
      </div>
    </header>
  );
};

export default Header;
