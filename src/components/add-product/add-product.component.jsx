import React, { useState } from 'react';
import styles from './add-product.module.css';
import DragAndDrop from '../drag-n-drop/drag-n-drop.component';
import Modal from '../modal/modal.component';
import useModal from '../../hooks/useModal';
import InputField from '../input-field/input-field.component';
import { HTTPS } from '../../axios';
import { connect } from 'react-redux';
import { fetchProductsStartAsync } from '../../redux/product/product.actions';

const AddProduct = (props) => {
  const { fetchProductsStartAsync } = props;

  const { isShowing, toggle } = useModal();

  const [product, setProduct] = React.useState({
    image: null,
    name: null,
    price: null,
    quantity: null,
    color: null,
    description: null,
  });

  const [filled, setFiled] = useState(false);

  React.useEffect(() => {
    setFiled(Object.values(product).every((v) => Boolean(v)));
  }, [product]);

  const handleDrop = (file) => {
    setProduct((prev) => ({
      ...prev,
      image: file,
    }));
    toggle();
  };

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProductClick = async () => {
    try {
      let formData = new FormData();
      formData.append('image', product.image[0]);
      formData.append('name', product.name);
      formData.append('price', product.price);
      formData.append('quantity', product.quantity);
      formData.append('color', product.color);
      formData.append('description', product.description);
      await HTTPS.post('/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (e) {
      console.error('Error on creating product: ', e.message);
    }
    toggle();
    setProduct({
      image: null,
      name: null,
      price: null,
      quantity: null,
      color: null,
      description: null,
    });
    await fetchProductsStartAsync();
  };

  return (
    <div className={styles.AddProduct}>
      <div className={styles.AddProductWrap}>
        <DragAndDrop handleDrop={handleDrop}>
          <div className={styles.AddProductDrag}>Drag your photo here</div>
        </DragAndDrop>
        {isShowing && (
          <Modal isShowing={isShowing} hide={toggle}>
            <div>
              <div className={styles.AddProductFormRow}>
                <h6 className={styles.AddProductFormTitle}>
                  Add information about your product
                </h6>
              </div>
              <div className={styles.AddProductFormRow}>
                <InputField
                  name="name"
                  type="text"
                  label="Name"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.AddProductFormRow}>
                <InputField
                  name="price"
                  type="number"
                  label="Price"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.AddProductFormRow}>
                <InputField
                  name="quantity"
                  type="number"
                  label="Quantity"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.AddProductFormRow}>
                <InputField
                  name="color"
                  type="text"
                  label="Color"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.AddProductFormRow}>
                <InputField
                  name="description"
                  type="text"
                  label="Description"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.AddProductFormRow}>
                <button
                  className={styles.AddProductBtn}
                  disabled={!filled}
                  onClick={handleAddProductClick}
                >
                  Add product
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync()),
});

export default connect(null, mapDispatchToProps)(AddProduct);
