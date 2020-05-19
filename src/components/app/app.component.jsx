import React from 'react';
import styles from './app.module.css';
import Product from '../product/product.component';

function App() {
  return (
    <div className={styles.App}>
      <Product />
    </div>
  );
}

export default App;
