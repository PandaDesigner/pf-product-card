import * as ReactDOM from 'react-dom/client';

describe('it', () => {
    it('should render the ProductCard component', () => {
        const div = document.createElement('div');
        const root = ReactDOM.createRoot(div);
        root.unmount()
        console.log( 'Hola mundo!')
    });
});
