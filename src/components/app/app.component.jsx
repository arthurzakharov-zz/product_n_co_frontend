import React from 'react';
import styles from './app.module.css';
import ProductList from '../product-list/product-list.component';
import Header from '../header/header.component';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <ProductList products={[1, 2, 3, 4, 5, 6, 7]} />
    </div>
  );
}

export default App;
