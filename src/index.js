import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from "./ContextFolder/ProductContext";
import { AddtocartContext } from "./ContextFolder/AddtocartContext"; // Updated import name
import { Provider } from 'react-redux';
import userStore from "./Slice/userStor";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={userStore}>
      <ProductProvider>
        <AddtocartContext> {/* Updated context import */}
          <App />
        </AddtocartContext> {/* Updated context import */}
      </ProductProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
