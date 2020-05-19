import React from 'react';
import styles from './product.module.css';

const Product = () => (
	<article className={styles.Product}>
			<h6 className={styles.ProductTitle}>Title</h6>
			<img
				src="https://33q47o1cmnk34cvwth15pbvt120l-wpengine.netdna-ssl.com/wp-content/uploads/raw-milk-1-e1563894986431.jpg"
				alt="product_image"
				className={styles.ProductImage}
			/>
			<div className={styles.ProductInfo}>
				<p className={styles.ProductText}>
					<b>Price: </b>14$
				</p>
				<p className={styles.ProductText}>
					<b>Quantity: </b>2
				</p>
				<p className={styles.ProductText}>
					<b>Color: </b>red
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

export default Product;
