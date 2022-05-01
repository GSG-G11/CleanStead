import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Image, Typography, Space, Tooltip, Layout } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  TwitterOutlined,
  createFromIconfontCN,
  InstagramOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import logo from '../../Assets/images/logo.svg';
import map from '../../Assets/images/map.svg';
import './style.css';
import data from '../../data.json';

const { Footer } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

const { Title, Paragraph, Text } = Typography;

function MainFooter({ categories }) {
  return (
    <Row
      justify="space-between"
      align="top"
      gutter={[10, 30]}
      className="footer-row"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 12 }}
        md={{ span: 12 }}
        lg={{ span: 7 }}
        xl={{ span: 7 }}
      >
        <Image src={logo} alt="logo" preview={false} />
        <Paragraph type="secondary" strong>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.
        </Paragraph>
      </Col>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 12 }}
        md={{ span: 12 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
      >
        <Title level={4}>خدماتنا</Title>
        <Space direction="vertical">
          {categories.map(({ id, name }) => (
            <Link to={`/category/${id}`} className="categores-list">
              {name}
            </Link>
          ))}
        </Space>
      </Col>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 12 }}
        md={{ span: 12 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
      >
        <Title level={4}>تواصل معنا</Title>
        <Space direction="vertical">
          <Text strong type="secondary">
            <PhoneOutlined style={{ color: '#00ADEE', marginLeft: '5px' }} />
            {data.phone}
          </Text>
          <Text strong type="secondary">
            <MailOutlined style={{ color: '#00ADEE', marginLeft: '5px' }} />
            {data.email}
          </Text>
        </Space>
      </Col>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 12 }}
        md={{ span: 12 }}
        lg={{ span: 5 }}
        xl={{ span: 5 }}
      >
        <Title level={4}>تابعنا على</Title>
        <Space direction="vertical">
          <Space size={16}>
            <Tooltip title="facebook">
              <a href="#top" style={{ color: '#3b5998', fontSize: '20px' }}>
                <IconFont type="icon-facebook" />
              </a>
            </Tooltip>
            <Tooltip title="twitter">
              <a href="#top" style={{ color: '#55acee', fontSize: '20px' }}>
                <TwitterOutlined />
              </a>
            </Tooltip>
            <Tooltip title="whatsapp">
              <a href="#top" style={{ color: '#43d854', fontSize: '20px' }}>
                <WhatsAppOutlined />
              </a>
            </Tooltip>
            <Tooltip title="youtube">
              <a href="#top" style={{ color: '#cd201f', fontSize: '20px' }}>
                <YoutubeOutlined />
              </a>
            </Tooltip>
            <Tooltip title="instagram">
              <a href="#top" style={{ color: '#3f729b', fontSize: '20px' }}>
                <InstagramOutlined />
              </a>
            </Tooltip>
          </Space>
          <Image src={map} alt="map" preview={false} />
        </Space>
      </Col>
      <Footer className="copyright">جميع الحقوق محفوظة © 2022</Footer>
    </Row>
  );
}
MainFooter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.object))
    .isRequired,
};
export default MainFooter;
