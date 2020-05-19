import React from 'react';
import styles from './default.module.css';
import Header from '../../components/header/header.component';
import ProductList from '../../components/product-list/product-list.component';

const DefaultLayout = () => (
  <div className={styles.Default}>
    <Header />
    <ProductList products={[1, 2, 3, 4, 5, 6, 7]} />
  </div>
);

export default DefaultLayout;
