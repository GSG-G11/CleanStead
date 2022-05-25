import React, { useEffect } from 'react';
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
import './style.css';

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
  const [labels, setLabels] = React.useState();
  const [dataChart, setDataChart] = React.useState();
  const [labelCahrt, setLabelChart] = React.useState('حجوزات اليوم');
  const [axisLabel, setAxisLabel] = React.useState('ساعات اليوم');
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
        setLabels(hoursForDay);
        setDataChart(numberOfRequest);
      })
      .catch((err) => {
        if (err.response.data.message) {
          message.error('لا يوجد حجوازت حتى الأن لليوم');
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
        setLabels(daysForMonth);
        setDataChart(numberOfRequest);
      })
      .catch((err) => {
        if (err.response.data.message) {
          message.error('لا يوجد حجوزات في هذا الشهر ');
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
    handleDataForDay();
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
        pointRadius: 0,
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
        label: labelCahrt,
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
            {labelCahrt}
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
      <Line options={options} data={data} className="chart" />
    </div>
  );
}

export default Chart;
