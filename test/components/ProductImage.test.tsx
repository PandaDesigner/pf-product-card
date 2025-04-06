import React from 'react';
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import { PRODUCT } from './data/products';


describe('ProductImage', () => {
    test('should not display the custom image component', () => {
        const wrapper = renderer.create(
            <ProductImage imgs='http://hola.jpg' className='custom-class' />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    })

    test('should render the image from the product', () => {
        const wrapper = renderer.create(<ProductCard product={PRODUCT.withImage}>
            {() => (<ProductCard.Image />)}
        </ProductCard>)
        expect(wrapper.toJSON()).toMatchSnapshot();
    })



})