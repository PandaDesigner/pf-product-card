import { CSSProperties, createContext } from 'react';
import { useProduct } from "../hooks/useProduct";
// @ts-ignore
import styles from '../styles/styles.module.css';

import {
  InitialValues,
  OnChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";
import React from 'react';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: (arg: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
        reset,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children
          ? children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset,
          })
          : null}
      </div>
    </Provider>
  );
};
