import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Typography, Collapse, Space, message } from 'antd';
import ServicesCollapse from './ServicesCollapse';

const { Title } = Typography;
const { Panel } = Collapse;

function ServicesChoice({ categories }) {
  const [categoryServices, setCategoryServices] = useState([]);

  const expand = (key) => {
    if (key !== undefined && !Array.isArray(categoryServices[key])) {
      axios
        .get(`/api/v1/categories/${key}/services`)
        .then(({ data: { data } }) => {
          setCategoryServices({ ...categoryServices, [key]: data });
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
                categoryServices[category.id].map((item) => (
                  <ServicesCollapse key={item.id} item={item} />
                ))}
            </Space>
          </Panel>
        ))}
      </Collapse>
    </>
  );
}
ServicesChoice.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};
export default ServicesChoice;
