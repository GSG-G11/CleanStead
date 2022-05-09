/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Collapse, Checkbox, Avatar, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

function ServicesCollapse({ item }) {
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(true);

  const onChange = () => {
    setCheck(!check);
    console.log(`checked = ${check}`);
  };

  return (
    <Collapse
      expandIconPosition="right"
      expandIcon={({ isActive }) =>
        isActive ? 'اخفاء التفاصيل' : 'رؤية التفاصيل'
      }
    >
      <Panel
        header={
          <div className="service-info">
            <Checkbox onChange={onChange} value={item.name}>
              {item.name}
            </Checkbox>
            <Avatar src={item.image} shape="square" size={80} />
            <span>{item.price}&#36;</span>
            <Button.Group>
              <Button
                className="count-btn"
                onClick={() => (count > 0 ? setCount(count - 1) : false)}
                icon={<MinusOutlined />}
              />
              <span className="count">{count}</span>
              <Button
                className="count-btn"
                onClick={() => setCount(count + 1)}
                icon={<PlusOutlined />}
              />
            </Button.Group>
          </div>
        }
      >
        <p>{item.description}</p>
      </Panel>
    </Collapse>
  );
}
export default ServicesCollapse;
