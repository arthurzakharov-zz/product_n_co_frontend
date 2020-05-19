import React from 'react';
import styles from './default.module.css';
import Header from '../../components/header/header.component';
import ProductList from '../../components/product-list/product-list.component';

const DefaultLayout = () => (
  <div className={styles.Default}>
    <Header />
    <ProductList />
  </div>
);

export default DefaultLayout;
