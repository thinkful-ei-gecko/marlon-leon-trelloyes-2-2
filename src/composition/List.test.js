import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

describe('<List />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header='okay' key='1' cardIds={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})