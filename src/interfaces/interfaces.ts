import { PropsButtons, PropsImage, PropsTitle } from '../components';
import { ProductCardProps } from '../components/ProductCard';
import {JSX} from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number | null;
  isMaxCountReached?: ProductCardHandlers;
  reset: () => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: PropsTitle) => JSX.Element;
  Image: (Props: PropsImage) => JSX.Element;
  Buttons: (Props: PropsButtons) => JSX.Element;
  onChange?: () => void;
  value?: number;
}

export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface PoductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
