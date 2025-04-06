/* eslint-disable jsx-a11y/img-redundant-alt */
import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
// @ts-ignore
import noImage from '../assets/no-image.jpg';
// @ts-ignore
import styles from '../styles/styles.module.css';
import React from 'react';

export interface PropsImage {
  imgs?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ imgs = '', className, style }: PropsImage) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (imgs) {
    imgToShow = imgs;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  // @ts-ignore
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt='Prooduct Image'
      style={style}
    />
  );
};
