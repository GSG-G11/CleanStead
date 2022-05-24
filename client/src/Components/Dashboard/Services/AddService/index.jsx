import React, { useContext } from 'react';
import { Select, Form, Button, Spin, Input } from 'antd';
// import { LoadingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { CategoriesContext } from '../../../../Contexts/CategoriesContext';

const { Option } = Select;
// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
function AddService({
  onChangeInput,
  onChangeSelect,
  serviceName,
  price,
  image,
  category,
  description,
  edited,
  submitService,
  onChangeImage,
}) {
  const { categories } = useContext(CategoriesContext);

  return (
    <div>
      <Form layout="vertical">
        <Form.Item label="التصنيف" required>
          <Select
            placeholder="اختر التصنيف"
            defaultValue={category}
            onChange={(value) => {
              onChangeSelect(value);
            }}
          >
            {categories.map(({ name, id }) => (
              <Option key={id} value={name} />
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="اسم الخدمة" required>
          <Input
            type="text"
            className="input"
            name="serviceName"
            placeholder="ادخل اسم الخدمة"
            value={serviceName}
            onChange={onChangeInput}
          />
        </Form.Item>
        <Form.Item label="سعر الخدمة" required>
          <Input
            type="number"
            name="price"
            placeholder="ادخل سعر الخدمة"
            value={price}
            onChange={onChangeInput}
          />
        </Form.Item>
        <Form.Item label="وصف الخدمة" required>
          <Input
            type="text"
            name="description"
            placeholder="ادخل وصف الخدمة"
            value={description}
            onChange={onChangeInput}
          />
        </Form.Item>
        <Form.Item label="صورة الخدمة" required>
          <Input
            type="file"
            name="image"
            placeholder="ادخل صورة الخدمة"
            // value={image}
            onChange={onChangeImage}
          />
        </Form.Item>
        {/* {isloading && <Spin indicator={antIcon} />} */}
        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            className="button"
            onClick={submitService}
          >
            {edited ? 'تعديل الخدمة' : 'اضافة الخدمة'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

AddService.defaultProps = {
  edited: false,
};

AddService.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  serviceName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  edited: PropTypes.bool,
  submitService: PropTypes.func.isRequired,
  onChangeImage: PropTypes.func.isRequired,
};

export default AddService;
