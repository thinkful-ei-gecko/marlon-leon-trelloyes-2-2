import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

describe('<Card />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title='okay' key='1' content='boogieboogie' />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})