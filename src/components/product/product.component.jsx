import React from 'react';
import PropTypes from 'prop-types';
import styles from './product.module.css';

const Product = (props) => {
  const { color, image, name, price, quantity } = props.details;
  return (
    <article className={styles.Product}>
      <h6 className={styles.ProductTitle}>{name}</h6>
      <img src={image} alt="product_image" className={styles.ProductImage} />
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
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default Product;
