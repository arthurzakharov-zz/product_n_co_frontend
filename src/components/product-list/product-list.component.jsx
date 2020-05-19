import React from 'react';
import PropTypes from 'prop-types';
import styles from './product-list.module.css';
import Product from '../product/product.component';

const ProductList = (props) => {
  const { products } = props;
  return (
    <section className={styles.ProductList}>
      {products.map((product) => (
        <div key={product} className={styles.ProductListItem}>
          <Product />
        </div>
      ))}
    </section>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ProductList;
