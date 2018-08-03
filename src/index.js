import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { loadBlog } from './store/Blog';
import './index.css';

const store = configureStore();

store.dispatch(loadBlog());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
