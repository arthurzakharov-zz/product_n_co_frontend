import React from 'react';
import styles from './product-list.module.css';
import Product from '../product/product.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProducts } from '../../redux/product/product.selectors';

const ProductList = ({ products }) => {
  return (
    <section className={styles.ProductList}>
      {products.length ? (
        products.map((product) => (
          <div key={product._id} className={styles.ProductListItem}>
            <Product />
          </div>
        ))
      ) : (
        <p className={styles.ProductListNoItems}>No products</p>
      )}
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps)(ProductList);
