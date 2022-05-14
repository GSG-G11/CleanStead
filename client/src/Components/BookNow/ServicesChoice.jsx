import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Typography, Collapse, Space, message } from 'antd';
import ServicesCollapse from './ServicesCollapse';

const { Title } = Typography;
const { Panel } = Collapse;
// const columns = [
//   {
//     title: 'الصنف',
//     dataIndex: 'name',
//     key: 'name',
//   },
// ];
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       'selectedRows: ',
//       selectedRows
//     );
//   },
//   onSelect: (record, selected, selectedRows) => {
//     console.log(record, selected, selectedRows);
//   },
//   onSelectAll: (selected, selectedRows, changeRows) => {
//     console.log(selected, selectedRows, changeRows);
//   },
// };
function ServicesChoice({ categories, onCheck }) {
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

  // const data = [];
  // categories.forEach((category) => {
  //   data.push({
  //     key: category.id,
  //     name: category.name,
  //   });
  // });
  // for (let i = 0; i < categories.length; i++) {
  //   data.push({
  //     key: i,
  //     name: `Edward King ${i}`,
  //     age: 32,
  //     address: `London, Park Lane no. ${i}`,
  //   });
  // }

  return (
    <>
      {/* <Table
        columns={columns}
        rowSelection={{ ...rowSelection }}
        dataSource={data}
      /> */}
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
                  <ServicesCollapse
                    key={item.id}
                    item={item}
                    onCheck={onCheck}
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
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCheck: PropTypes.func.isRequired,
};
export default ServicesChoice;
