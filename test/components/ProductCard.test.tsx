import React from 'react';
import renderer from 'react-test-renderer'
import { ProductCard } from '../../src/components';
// @ts-ignore
import { PRODUCT } from './data/products';

const { act } = renderer

describe('ProductCard', () => {
    test('se debe de mostrar el componente correctamente', () => {
        const wrapper = renderer.create(<ProductCard product={PRODUCT.withImage}>
            {() => (<h1> Product Cards</h1>)}
        </ProductCard>)
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de incrementar el contador', () => {
        const wrapper = renderer.create(<ProductCard product={PRODUCT.withImage}>
            {({ count, increaseBy }) => <>
                <h1>Product Cards</h1>
                <span>{count}</span>
                <button onClick={() => increaseBy(1)}></button>
            </>}
        </ProductCard>)

        let tree = wrapper.toJSON()
        expect(tree).toMatchSnapshot();
        act(() => {
            (tree as any).children[2].props.onClick();
        })
        tree = wrapper.toJSON();
        expect((tree as any).children[1].children[0]).toBe('1')

    });
})