import React, { useContext } from 'react';
import { Select, Form, Button, Spin, Input } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './style.css';
import { CategoriesContext } from '../../../../Contexts/CategoriesContext';

const { Option } = Select;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
function AddService({
  onChangeInput,
  onChangeSelect,
  serviceName,
  price,
  category,
  description,
  edited,
  submitService,
  onChangeImage,
  loading,
  loadingImage,
  error,
}) {
  const { categories } = useContext(CategoriesContext);
  return (
    <div>
      <Form layout="vertical">
        <Form.Item label="التصنيف" required>
          <Select
            placeholder="اختر التصنيف"
            value={category}
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
            className="input"
            placeholder="ادخل سعر الخدمة"
            value={price}
            onChange={onChangeInput}
          />
        </Form.Item>
        <Form.Item label="وصف الخدمة" required>
          <Input
            type="text"
            name="description"
            className="input"
            placeholder="ادخل وصف الخدمة"
            value={description}
            onChange={onChangeInput}
          />
        </Form.Item>
        <Form.Item label="صورة الخدمة" required>
          <Input
            type="file"
            name="image"
            className="input"
            placeholder="ادخل صورة الخدمة"
            onChange={onChangeImage}
          />
          {loadingImage && <Spin indicator={antIcon} />}
        </Form.Item>
        {error && <p className="error">{error}</p>}
        <Form.Item>
          {loading ? (
            <Button
              block
              type="primary"
              htmlType="submit"
              className="button"
              loading
            />
          ) : (
            <Button
              block
              type="primary"
              htmlType="submit"
              className="button"
              onClick={submitService}
            >
              {edited ? 'تعديل الخدمة' : 'اضافة الخدمة'}
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
}

AddService.defaultProps = {
  edited: false,
  loading: false,
  loadingImage: false,
  error: '',
};

AddService.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  serviceName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  edited: PropTypes.bool,
  submitService: PropTypes.func.isRequired,
  onChangeImage: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  loadingImage: PropTypes.bool,
  error: PropTypes.string,
};

export default AddService;
