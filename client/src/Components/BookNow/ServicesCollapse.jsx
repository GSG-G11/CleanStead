import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { Collapse, Checkbox, Avatar, Button, Typography, Form } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const { Paragraph, Text } = Typography;
const { Panel } = Collapse;

function ServicesCollapse({
  item,
  itemIndex,
  categoryServices,
  setCategoryServices,
}) {
  const onMouse = (e) => {
    e.stopPropagation();
  };
  const changCheck = (categoryId, serviceIndex) => {
    if (
      !categoryServices[categoryId][serviceIndex].isChecked &&
      categoryServices[categoryId][serviceIndex].quantity === 0
    ) {
      categoryServices[categoryId][serviceIndex].quantity = 1;
    } else if (
      categoryServices[categoryId][serviceIndex].isChecked &&
      categoryServices[categoryId][serviceIndex].quantity === 1
    ) {
      categoryServices[categoryId][serviceIndex].quantity = 0;
    }
    categoryServices[categoryId][serviceIndex].isChecked =
      !categoryServices[categoryId][serviceIndex].isChecked;
    setCategoryServices({ ...categoryServices });
  };

  const increment = (categoryId, serviceIndex) => {
    categoryServices[categoryId][serviceIndex].quantity += 1;
    setCategoryServices({ ...categoryServices });
  };

  const decrement = (categoryId, serviceIndex) => {
    if (categoryServices[categoryId][serviceIndex].quantity > 0) {
      categoryServices[categoryId][serviceIndex].quantity -= 1;
      setCategoryServices({ ...categoryServices });
    }
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
                  value={
                    categoryServices[item.category_id][itemIndex].isChecked
                  }
                  onClick={onMouse}
                  onChange={() => changCheck(item.category_id, itemIndex)}
                >
                  <span className="label" onClick={onMouse} aria-hidden="true">
                    {item.name}
                  </span>
                </Checkbox>
              </Form.Item>
            </Form>
            <Avatar src={item.image} shape="square" size={80} />
            <span className="price">{item.price}&#36;</span>
            <Button.Group onClick={onMouse}>
              <Button
                className="count-btn"
                onClick={() => decrement(item.category_id, itemIndex)}
                icon={<MinusOutlined />}
              />
              <span className="count">
                {categoryServices[item.category_id][itemIndex].quantity}
              </span>
              <Button
                className="count-btn"
                onClick={() => increment(item.category_id, itemIndex)}
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
    category_id: PropTypes.number,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
  itemIndex: PropTypes.number.isRequired,
  categoryServices: PropTypes.shape({
    [PropTypes.number]: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        quantity: PropTypes.number,
        isChecked: PropTypes.bool,
      })
    ),
  }).isRequired,
  setCategoryServices: PropTypes.func.isRequired,
};

export default ServicesCollapse;
