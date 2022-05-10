import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ArEg from 'antd/lib/locale/ar_EG';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider direction="rtl" locale={ArEg}>
    <App />
  </ConfigProvider>
);
