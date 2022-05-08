import React, { useEffect, useState } from 'react';
import { Image, Row, Col } from 'antd';
import Img from '../../Assets/images/img1.png';
import ContactUsForm from './ContactUsForm';
import DescriptionContent from './DescriptionContent';
import './style.css';

function DescriptionCard() {
  const [component, setcomponent] = useState();
  useEffect(() => {
    if (window.location.pathname === '/contact') {
      setcomponent(<ContactUsForm />);
    } else if (window.location.pathname === '/about') {
      setcomponent(<DescriptionContent />);
    } else if (window.location.pathname.includes('/category')) {
      setcomponent(
        <DescriptionContent
          title="تنظيف المنازل"
          link="/book"
          description="              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
          هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
          العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
          التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
          العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
          أخطاء لغوية
"
          button="ok"
        />
      );
    }
  }, []);

  return (
    <Row>
      <Col>
        <Image
          preview={false}
          className="description-image"
          width={450}
          src={Img}
        />
      </Col>
      <Col>{component}</Col>
    </Row>
  );
}

export default DescriptionCard;
