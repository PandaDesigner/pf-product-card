import React from 'react';
import renderer from 'react-test-renderer'
import { ProductTitle } from '../../src/components/ProductTitle';

describe('ProductTitle', () => {
    test('se debe mostrar el component correctamente con el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title='custom product' className='custom' />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})