import React, { useState } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { Collapse, Checkbox, Avatar, Button, Typography, Form } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const { Paragraph, Text } = Typography;
const { Panel } = Collapse;

function ServicesCollapse({ item, onCheck }) {
  const [count, setCount] = useState(1);

  const onMouseEnter = (e) => {
    e.stopPropagation();
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
            <Form>
              <Form.Item name="myProp" valuePropName="checked">
                <Checkbox
                  value={item.name}
                  onClick={onMouseEnter}
                  onChange={onCheck}
                >
                  <span
                    className="test"
                    onClick={onMouseEnter}
                    aria-hidden="true"
                  >
                    {item.name}
                  </span>
                </Checkbox>
              </Form.Item>
            </Form>
            <Avatar src={item.image} shape="square" size={80} />
            <span className="price">{item.price}&#36;</span>
            <Button.Group onClick={onMouseEnter}>
              <Button
                className="count-btn"
                onClick={() => (count > 1 ? setCount(count - 1) : false)}
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
        <Paragraph>
          <Text type="secondary" className="items-title" level={5}>
            العناصر التي سيتم تنظيفها
          </Text>
          <ul className="description-list">
            {item.description.split('-').map((desc) => (
              <li className="description-item" key={uuid()}>
                <Text>{desc}</Text>
              </li>
            ))}
          </ul>
        </Paragraph>
      </Panel>
    </Collapse>
  );
}
ServicesCollapse.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default ServicesCollapse;
