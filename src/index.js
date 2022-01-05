import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import Countries from './components/Countries';
import Regions from './components/Regions';
import Navbar from './components/Navbar';
import './components/countries.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Navbar />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:country" element={<Regions />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
