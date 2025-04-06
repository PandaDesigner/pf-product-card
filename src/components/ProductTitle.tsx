import { CSSProperties, useContext } from 'react';
// @ts-ignore
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';
import React from 'react';

export interface PropsTitle {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: PropsTitle) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
