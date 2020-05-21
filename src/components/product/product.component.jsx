import React from 'react';
import PropTypes from 'prop-types';
import styles from './product.module.css';
import { BASE_URL, HTTPS } from '../../axios';
import { connect } from 'react-redux';
import { fetchProductsStartAsync } from '../../redux/product/product.actions';

const Product = (props) => {
  const { color, image, name, price, quantity, _id } = props.details;

  const handleDeleteButtonClick = async (product_id) => {
    try {
      await HTTPS.delete('/product/' + product_id);
    } catch (e) {
      console.error('Error on delete product: ', e.message);
    }
    await props.fetchProductsStartAsync();
  };

  return (
    <article className={styles.Product}>
      <h6 className={styles.ProductTitle}>{name}</h6>
      <img
        src={BASE_URL + image}
        alt="product_image"
        className={styles.ProductImage}
      />
      <div className={styles.ProductInfo}>
        <p className={styles.ProductText}>
          <b>Price: </b>
          {price}$
        </p>
        <p className={styles.ProductText}>
          <b>Quantity: </b>
          {quantity}
        </p>
        <p className={styles.ProductText}>
          <b>Color: </b>
          {color}
        </p>
      </div>
      <div className={styles.ProductButtons}>
        <button
          className={`${styles.ProductButton} ${styles.ProductButtonDelete}`}
          onClick={() => handleDeleteButtonClick(_id)}
        >
          Delete
        </button>
        <button
          className={`${styles.ProductButton} ${styles.ProductButtonReview}`}
        >
          Review
        </button>
      </div>
    </article>
  );
};

Product.propTypes = {
  details: PropTypes.shape({
    _id: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.string,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Product);
