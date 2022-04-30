import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Category } from '../Pages';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/category/:id"
            element={<Category />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
