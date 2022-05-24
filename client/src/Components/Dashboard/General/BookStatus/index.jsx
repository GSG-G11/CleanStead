import React, { useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';
import {
  CheckOutlined,
  CloseOutlined,
  MinusCircleOutlined,
  RiseOutlined,
} from '@ant-design/icons';
import './style.css';
import StatusNumber from './StatusNumber';

function BookStatus() {
  const [statusApprove, setStatusApprove] = React.useState(0);
  const [statusPending, setStatusPending] = React.useState(0);
  const [statusDecline, setStatusDecline] = React.useState(0);
  const [statusTotal, setStatusTotal] = React.useState(0);
  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get('/api/v1/book/status', {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data: { data } }) => {
        setStatusTotal(data[0].alltotal);
        data.forEach(({ status, total }) => {
          if (status === 'approve') {
            setStatusApprove(total);
          }
          if (status === 'pending') {
            setStatusPending(total);
          }
          if (status === 'decline') {
            setStatusDecline(total);
          }
        });
      })
      .catch(() => message.error('حدث خطأ ما'));
    return () => cancelTokenSource.cancel();
  }, []);
  const status = [
    {
      title: 'تم تاكيده',
      number: statusTotal,
      backgroundColor: '#EEEDFD',
      icon: <RiseOutlined style={{ color: '#7367F0' }} />,
    },
    {
      title: 'معلق',
      number: statusPending,
      backgroundColor: '#FFF3E8',
      icon: <MinusCircleOutlined style={{ color: '#FF9F43' }} />,
    },
    {
      title: 'مقبول',
      number: statusApprove,
      backgroundColor: '#E5F8EE',
      icon: <CheckOutlined style={{ color: '#28c76f' }} />,
    },
    {
      title: 'مرفوض',
      number: statusDecline,
      backgroundColor: '#FCEAEB',
      icon: <CloseOutlined style={{ color: '#EA5455' }} />,
    },
  ];
  return (
    <div className="book-status">
      {status.map(({ title, number, backgroundColor, icon }) => (
        <StatusNumber
          key={title}
          title={title}
          number={number}
          backgroundColor={backgroundColor}
          icon={icon}
        />
      ))}
    </div>
  );
}
export default BookStatus;
