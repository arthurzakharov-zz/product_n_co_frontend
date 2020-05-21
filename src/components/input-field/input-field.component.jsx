import React from 'react';
import styles from './input-field.module.css';

const InputField = ({ handleChange, label, ...otherProps }) => (
  <div className={styles.InputField}>
    <label className={styles.InputFieldLabel}>{label}</label>
    <input
      className={styles.InputFieldInput}
      onChange={handleChange}
      {...otherProps}
    />
  </div>
);

export default InputField;
