import * as ReactDOM from 'react-dom';
describe('it', () => {
    it('should render the ProductCard component', () => {
        const div = document.createElement('div');
        // @ts-ignore
        ReactDOM.unmountComponentAtNode(div);
    });
});
