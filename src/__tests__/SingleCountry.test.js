import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SingleCountry from '../components/SingleCountry';
import store from '../redux/store';
import '@testing-library/jest-dom';

test('renders cases', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <SingleCountry />
      </Router>
    </Provider>,
  );

  expect(getByText(/cases/i)).toBeInTheDocument();
});

it('renders without crushing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <SingleCountry />
    </Router>, div,
  );
});

it('applyes background color taken from props', () => {
  const { getByTestId } = render(

    <Provider store={store}>
      <Router>
        <SingleCountry backgroudColorForCountry="black" />
      </Router>
    </Provider>,
  );
  expect(getByTestId('linkid')).toHaveStyle('background-color: black');
});

it('testing integration on click', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Router>
        <SingleCountry country="Andorra" />
      </Router>
    </Provider>,
  );
  const link = getByTestId('linkid');
  fireEvent.click(link);
  expect(global.window.location.pathname).toEqual('/Andorra');
});
