import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './product.module.css';
import { BASE_URL, HTTPS } from '../../axios';
import { connect } from 'react-redux';
import { fetchProductsStartAsync } from '../../redux/product/product.actions';
import Modal from '../modal/modal.component';
import useModal from '../../hooks/useModal';
import InputField from '../input-field/input-field.component';

const Product = (props) => {
  const { color, image, name, price, quantity, _id } = props.details;
  const { fetchProductsStartAsync } = props;
  const [product, setProduct] = useState({});
  const { isShowing, toggle } = useModal();

  const handleDeleteButtonClick = async (product_id) => {
    try {
      await HTTPS.delete('/product/' + product_id);
    } catch (e) {
      console.error('Error on delete product: ', e.message);
    }
    await fetchProductsStartAsync();
  };

  const handleReviewButtonClick = async (product_id) => {
    try {
      const { status, data } = await HTTPS.get('/product/' + product_id);
      if (status === 200) {
        setProduct(data.payload);
        toggle();
      } else {
        console.log('May be handle some notifications');
      }
    } catch (e) {
      console.error('Error on delete product: ', e.message);
    }
  };

  const handleCancelButtonClick = () => {
    toggle();
    setProduct({});
  };

  const handleUpdateButtonClick = async () => {
    try {
      await HTTPS.put('/product/' + _id, {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        color: product.color,
        description: product.description,
      });
      await fetchProductsStartAsync();
    } catch (e) {
      console.error('Error on product update: ', e.message);
    }
    toggle();
    setProduct({});
  };

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
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
          {/* Just to show different approaches for event handle */}
          <button
            className={`${styles.ProductButton} ${styles.ProductButtonReview}`}
            onClick={handleReviewButtonClick.bind(null, _id)}
          >
            Review
          </button>
        </div>
      </article>
      <Modal isShowing={isShowing} hide={toggle}>
        {/* Yes know it needs to be splited into component but kids is too laud need help wife )) */}
        <div>
          <img
            src={BASE_URL + image}
            alt="product_image"
            className={styles.ProductImage}
          />
          <div>
            <div className={styles.ProductEditRow}>
              <InputField
                name="name"
                type="text"
                label="Name"
                value={product.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.ProductEditRow}>
              <InputField
                name="price"
                type="number"
                label="Price"
                value={product.price}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.ProductEditRow}>
              <InputField
                name="quantity"
                type="number"
                label="Quantity"
                value={product.quantity}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.ProductEditRow}>
              <InputField
                name="color"
                type="text"
                label="Color"
                value={product.color}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.ProductEditRow}>
              <InputField
                name="description"
                type="text"
                label="Description"
                value={product.description}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.ProductEditBtns}>
            <button
              className={`${styles.ProductEditBtn} ${styles.ProductButtonDelete}`}
              onClick={handleCancelButtonClick}
            >
              Cancel
            </button>
            <button
              className={`${styles.ProductEditBtn} ${styles.ProductButtonReview}`}
              onClick={handleUpdateButtonClick}
            >
              Update
            </button>
          </div>
        </div>
      </Modal>
    </>
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
