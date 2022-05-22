import React, { useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Typography, Collapse, Space, message } from 'antd';
import ServicesCollapse from './ServicesCollapse';
import { CategoriesContext } from '../../Contexts/CategoriesContext';

const { Title } = Typography;
const { Panel } = Collapse;

function ServicesChoice({ categoryServices, setCategoryServices }) {
  const { categories } = useContext(CategoriesContext);
  const expand = (key) => {
    if (key !== undefined && !Array.isArray(categoryServices[key])) {
      axios
        .get(`/api/v1/categories/${key}/services`)
        .then(({ data: { data } }) => {
          const arr =
            data.length > 0
              ? data.map((category) => {
                  category.quantity = 0;
                  category.isChecked = false;
                  return category;
                })
              : [];
          setCategoryServices({ ...categoryServices, [key]: arr });
        })
        .catch(() => {
          message.error('حدث خطأ ما');
        });
    }
  };

  return (
    <>
      <Title className="choice-title" level={5}>
        اختر الخدمات التي تحتاج الى تنظيفها من اي تصنيف تريده
      </Title>
      <Collapse
        className="main-collapse"
        accordion
        collapsible="header"
        expandIconPosition="right"
        onChange={expand}
      >
        {categories.map((category) => (
          <Panel header={category.name} key={category.id}>
            <Space direction="vertical">
              {Array.isArray(categoryServices[category.id]) &&
                categoryServices[category.id].map((item, index) => (
                  <ServicesCollapse
                    key={item.id}
                    item={item}
                    itemIndex={index}
                    categoryServices={categoryServices}
                    setCategoryServices={setCategoryServices}
                  />
                ))}
            </Space>
          </Panel>
        ))}
      </Collapse>
    </>
  );
}

ServicesChoice.propTypes = {
  categoryServices: PropTypes.shape({
    [PropTypes.number]: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
      })
    ),
  }).isRequired,
  setCategoryServices: PropTypes.func.isRequired,
};
export default ServicesChoice;
