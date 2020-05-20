import React from 'react';
import styles from './product-list.module.css';
import Product from '../product/product.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProducts } from '../../redux/product/product.selectors';
import { fetchProductsStartAsync } from '../../redux/product/product.actions';

const ProductList = ({ products, fetchProductsStartAsync }) => {
  React.useEffect(() => {
    fetchProductsStartAsync();
  }, []);

  return (
    <section className={styles.ProductList}>
      {products.length ? (
        products.map((product) => (
          <div key={product._id} className={styles.ProductListItem}>
            <Product details={product} />
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

const mapDispatchToProps = (dispatch) => ({
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
