import React from 'react';
import styles from './product-list.module.css';
import Product from '../product/product.component';
import { HTTPS, path } from '../../axios';

const ProductList = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, status } = await HTTPS.get(path.products);
        if (status === 200 && data.hasOwnProperty('payload')) {
          setProducts(data.payload);
        }
      } catch (e) {
        console.error('Error on fetching products: ', e);
      }
    };
    // fetchProducts();
  }, []);

  return (
    <section className={styles.ProductList}>
      {products.map((product) => (
        <div key={product._id} className={styles.ProductListItem}>
          <Product />
        </div>
      ))}
    </section>
  );
};

export default ProductList;
