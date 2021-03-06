import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import store from '../redux/store';
import Regions from '../components/Countries';

describe('Countries', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><Regions /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});

it('renders without crushing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Regions />
      </Router>
    </Provider>, div,
  );
});
