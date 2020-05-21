import React from 'react';
import styles from './product-list.module.css';
import Product from '../product/product.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProducts } from '../../redux/product/product.selectors';
import { fetchProductsStartAsync } from '../../redux/product/product.actions';
import { selectFilterSearch } from '../../redux/filter/filter.selectors';
import Modal from '../modal/modal.component';

const ProductList = (props) => {
  const { products, search, fetchProductsStartAsync } = props;

  const [productVisible, setProductsVisible] = React.useState([]);

  React.useEffect(() => {
    fetchProductsStartAsync();
  }, []);

  React.useEffect(() => {
    setProductsVisible(
      products.filter((p) => p.name.includes(search) || !search)
    );
  }, [search, products]);

  return (
    <section className={styles.ProductList}>
      {productVisible.length ? (
        productVisible.map((product) => (
          <div key={product._id} className={styles.ProductListItem}>
            <Product details={product} />
          </div>
        ))
      ) : (
        <p className={styles.ProductListNoItems}>No products</p>
      )}
      <Modal>
        <div>
          <p>PPPPP</p>
        </div>
      </Modal>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
  search: selectFilterSearch,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
