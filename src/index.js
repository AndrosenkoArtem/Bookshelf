import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="Bookshelf">
        <App />
        <ToastContainer
          position="top-right"
          reverseOrder={false}
          theme="colored"
          hideProgressBar
          autoClose={5000}
        />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
