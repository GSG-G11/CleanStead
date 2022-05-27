import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Menu, message } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import io from 'socket.io-client';
import './style.css';

const socket = io.connect(
  `https://${window.location.hostname}:${window.location.port}`
);

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

const { Title, Text } = Typography;
const months = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل',
  'مايو',
  'يونيو',
  'يوليو',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر',
];

function Chart() {
  const [labels, setLabels] = useState();
  const [dataChart, setDataChart] = useState();
  const [labelChart, setLabelChart] = useState('حجوزات اليوم');
  const [axisLabel, setAxisLabel] = useState('ساعات اليوم');
  const [error, setError] = useState('');
  const [activeSelect, setActiveSelect] = useState('');
  const date = new Date();

  const handleDataForDay = () => {
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get('/api/v1/book/day', {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data: { hoursForDay, numberOfRequest } }) => {
        setLabelChart('حجوزات اليوم');
        setAxisLabel('ساعات اليوم');
        setActiveSelect('day');
        setLabels(hoursForDay);
        setDataChart(numberOfRequest);
      })
      .catch((err) => {
        if (err.response.data.message) {
          setError('لا يوجد حجوازت حتى الأن لليوم');
          setLabelChart('حجوزات اليوم');
          setAxisLabel('ساعات اليوم');
          setLabels();
          setDataChart();
        } else {
          message.error('حدث خطأ ما');
        }
      });

    return () => cancelTokenSource.cancel();
  };

  const handleDataForMonth = () => {
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get('/api/v1/book/month', {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data: { daysForMonth, numberOfRequest } }) => {
        setLabelChart('حجوزات الشهر');
        setAxisLabel('أيام الشهر');
        setActiveSelect('month');
        setLabels(daysForMonth);
        setDataChart(numberOfRequest);
      })
      .catch((err) => {
        if (err.response.data.message) {
          setError('لا يوجد حجوازات حتى الأن للشهر');
          setLabelChart('حجوزات الشهر');
          setAxisLabel('أيام الشهر');
          setLabels();
          setDataChart();
        } else {
          message.error('حدث خطأ ما');
        }
      });

    return () => cancelTokenSource.cancel();
  };

  useEffect(() => {
    socket.on('postBook', () => {
      message.info('تم اضافة حجز جديد');
      if (activeSelect === 'month') {
        handleDataForMonth();
      } else {
        handleDataForDay();
      }
    });
  }, [socket]);

  useEffect(() => {
    if (activeSelect === 'month') {
      handleDataForMonth();
    } else {
      handleDataForDay();
    }
  }, []);

  const getDays = () => {
    handleDataForDay();
  };
  const getMonths = () => {
    handleDataForMonth();
  };
  const options = {
    datasets: {
      line: {
        backgroundColor: '#e9f8fe',
        borderColor: '#00ADEE',
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        pointStyle: 'star',
      },
    },
    scales: {
      y: {
        min: 0,
        ticks: {
          padding: 5,
        },
        title: {
          display: true,
          text: 'عدد الحجوزات',
          color: '#00ADEE',
          font: {
            size: 14,
          },
        },
      },
      x: {
        ticks: {
          padding: 5,
        },
        title: {
          display: true,
          text: axisLabel,
          color: '#00ADEE',
          font: {
            size: 14,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      filler: {
        propagate: true,
      },
      chartAreaBorder: {
        borderColor: 'red',
        borderWidth: 2,
        borderDash: [5, 5],
        borderDashOffset: 2,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: labelChart,
        data: dataChart,
      },
    ],
  };
  const items = [
    {
      label: (
        <Text onClick={getDays} type="text">
          اليوم
        </Text>
      ),
      key: 1,
    },
    {
      label: (
        <Text onClick={getMonths} type="text">
          الشهر
        </Text>
      ),
      key: 2,
    },
  ];

  return (
    <div className="book-chart">
      <Row>
        <Col span={18}>
          <Title level={4} className="book-chart-title">
            {labelChart}
          </Title>
          <Text>
            {date.getDate()} - {months[date.getMonth()]} - {date.getFullYear()}
          </Text>
        </Col>
        <Col span={6} className="day-month-menu">
          <Menu
            theme="light"
            defaultSelectedKeys={['1']}
            mode="block"
            items={items}
          />
        </Col>
      </Row>
      {error && (
        <Text type="danger" className="error-booking">
          {error}
        </Text>
      )}
      <Line options={options} data={data} className="chart" />
    </div>
  );
}

export default Chart;
