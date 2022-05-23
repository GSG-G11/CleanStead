import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ArEg from 'antd/lib/locale/ar_EG';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ConfigProvider direction="rtl" locale={ArEg}>
      <App />
    </ConfigProvider>
  </Router>
);
