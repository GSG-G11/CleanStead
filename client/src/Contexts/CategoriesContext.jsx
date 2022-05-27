/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { message } from 'antd';
import { PropTypes } from 'prop-types';

const CategoriesContext = createContext();

function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const contextData = useMemo(
    () => ({ categories, loading }),
    [categories, loading]
  );

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    setLoading(true);
    axios
      .get('/api/v1/categories', {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data: { data } }) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        message.error('حدث خطأ ما');
      });

    return () => cancelTokenSource.cancel();
  }, []);

  return (
    <CategoriesContext.Provider value={contextData}>
      {children}
    </CategoriesContext.Provider>
  );
}

CategoriesProvider.prototype = {
  children: PropTypes.node.isRequired,
};

export { CategoriesProvider, CategoriesContext };
