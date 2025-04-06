import React from 'react';
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { PRODUCT } from './data/products';

describe('ProductTitle', () => {
    test('should display the component correctly with the custom title', () => {
        const wrapper = renderer.create(
            <ProductTitle title='custom product' className='custom' />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('should display the component with the product name', () => {

        const wrapper = renderer.create(
            <ProductCard product={PRODUCT.withoutImage}>
                {() => <ProductCard.Title className="productDescription" />}
            </ProductCard>
        );
        //@ts-expect-error
        const titleNode = wrapper.toJSON()?.children?.[0]?.children?.[0] || null;

        expect(titleNode).toBe(PRODUCT.withoutImage.title)
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
})