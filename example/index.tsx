import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductCard } from "../src";

const App = () => {
    const product = {
        id: '1',
        title: 'Coffee Mug - Card',
        img: './coffee-mug.png',
    }
    return (
    <>
        <ProductCard
            product={product}
            initialValues={{ count: 4, maxCount: 10 }}
        >
            {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
                <>
                    <ProductCard.Image imgs='' />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </>
            )}
        </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
