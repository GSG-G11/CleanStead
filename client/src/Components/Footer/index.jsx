import React from 'react';
import {
  Row, Col, Image, Typography,
  Button, Space, Tooltip, Layout,
} from 'antd';
import {
  PhoneOutlined, MailOutlined, TwitterOutlined,
  createFromIconfontCN, InstagramOutlined, WhatsAppOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import logo from '../../Assets/images/logo.svg';
import map from '../../Assets/images/map.svg';
import './footer.css';

const { Footer } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

const { Title, Paragraph, Text } = Typography;

function MainFooter() {
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
        <Image src={logo} />
        <Paragraph type="secondary" strong>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،
          لقد تم توليد هذا النص من مولد النص العربى،
          حيث يمكنك أن تولد مثل هذا النص.

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
          <Text strong type="secondary">تنظيف المنازل</Text>
          <Text strong type="secondary">تنظيف السجاد</Text>
          <Text strong type="secondary">تنظيف النوافذ</Text>
          <Text strong type="secondary">تنظيف السيارات</Text>
          <Text strong type="secondary">التنظيف التجاري</Text>
          <Text strong type="secondary">تنظيف بعد البناء</Text>
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
            0599000000
          </Text>
          <Text strong type="secondary">
            <MailOutlined style={{ color: '#00ADEE', marginLeft: '5px' }} />
            info@cleanstead.com
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
          <Space>
            <Tooltip title="facebook">
              <Button shape="circle" icon={<IconFont type="icon-facebook" />} />
            </Tooltip>
            <Tooltip title="twitter">
              <Button shape="circle" icon={<TwitterOutlined />} />
            </Tooltip>
            <Tooltip title="whatsapp">
              <Button shape="circle" icon={<WhatsAppOutlined />} />
            </Tooltip>
            <Tooltip title="youtube">
              <Button shape="circle" icon={<YoutubeOutlined />} />
            </Tooltip>
            <Tooltip title="instagram">
              <Button shape="circle" icon={<InstagramOutlined />} />
            </Tooltip>
          </Space>
          <Image src={map} preview={false} />
        </Space>
      </Col>
      <Footer className="copyright">جميع الحقوق محفوظة © 2022</Footer>
    </Row>
  );
}
export default MainFooter;
