// import React, { useRef, useEffect, useState } from 'react';
// import axios from 'axios';
// import { DeleteOutlined } from '@ant-design/icons';
// import { Tag, Space, message } from 'antd';
// import ProTable from '@ant-design/pro-table';
// import request from 'umi-request';

// const columns = [
//   {
//     title: 'الرقم',
//     dataIndex: 'index',
//     valueType: 'indexBorder',
//     width: 48,
//   },
//   {
//     title: 'اسم المرسل',
//     dataIndex: 'contactName',
//     formItemProps: {
//       rules: [
//         {
//           required: true,
//           message: 'هذا الحقل مطلوب',
//         },
//       ],
//     },
//     width: '20%',
//     search: false,
//   },
//   {
//     title: 'الرسالة',
//     dataIndex: 'message',
//     copyable: true,
//     ellipsis: true,
//     tip: 'سيتم تقليص العنوان في حال كان طويل جدًا',
//     formItemProps: {
//       rules: [
//         {
//           required: true,
//           message: 'هذا الحقل مطلوب',
//         },
//       ],
//     },
//     width: '20%',
//     search: false,
//   },
//   {
//     title: 'رقم الجوال',
//     key: 'phone',
//     dataIndex: 'phone',
//     valueType: 'phone',
//   },
//   {
//     title: 'الايميل',
//     key: 'email',
//     dataIndex: 'email',
//     valueType: 'email',
//   },
//   {
//     title: 'الحالة',
//     dataIndex: 'state',
//     initialValue: 'open',
//     filters: true,
//     onFilter: true,
//     valueEnum: {
//       all: { text: 'الكل', status: 'Default' },
//       open: {
//         text: 'معلق',
//         status: 'Error',
//       },
//       closed: {
//         text: 'تم الرد',
//         status: 'Success',
//       },
//       processing: {
//         text: 'نعمل عليها',
//         status: 'Processing',
//       },
//     },
//   },
//   {
//     title: 'التسمية',
//     dataIndex: 'labels',
//     render: (_, record) => (
//       <Space>
//         {record.labels.map(({ name, color }) => (
//           <Tag color={color} key={name}>
//             {name}
//           </Tag>
//         ))}
//       </Space>
//     ),
//   },
//   {
//     title: 'التشغيل',
//     valueType: 'option',
//     render: (text, record, _, action) => [<DeleteOutlined />],
//   },
// ];

// function Contact() {
//   const actionRef = useRef();
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     const cancelTokenSource = axios.CancelToken.source();
//     axios
//       .get(`/api/v1/contact`, {
//         cancelToken: cancelTokenSource.token,
//       })
//       .then(({ data: { data } }) => {
//         setContacts(data);
//       })
//       .catch(() => {
//         message.error('حدث خطأ ما');
//       });

//     return () => cancelTokenSource.cancel();
//   }, []);
//   console.log(contacts);
//   return (
//     <ProTable
//       columns={columns}
//       actionRef={actionRef}
//       request={(params, sorter, filter) => {
//         console.log(params, sorter, filter);
//         return Promise.resolve({
//           data: contacts,
//           success: true,
//         });
//       }}
//       pagination={{
//         pageSize: 5,
//       }}
//       rowKey="id"
//       search={{
//         labelWidth: 'auto',
//       }}
//       dateFormatter="string"
//     />
//   );
// }
// export default Contact;

import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { DeleteOutlined } from '@ant-design/icons';
import { Tag, Space, message } from 'antd';
import ProTable from '@ant-design/pro-table';

const columns = [
  {
    title: 'الرقم',
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'اسم المرسل',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'هذا الحقل مطلوب',
        },
      ],
    },
    width: '10%',
    search: false,
  },
  {
    title: 'الخدمة',
    key: 'category_id',
    dataIndex: 'category_id',
    valueType: 'category_id',
    width: '10%',
  },
  {
    title: 'الرسالة',
    dataIndex: 'message',
    copyable: true,
    tip: 'سيتم تقليص العنوان في حال كان طويل جدًا',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'هذا الحقل مطلوب',
        },
      ],
    },
    width: '20%',
    search: false,
  },
  {
    title: 'رقم الجوال',
    key: 'phone',
    dataIndex: 'phone',
    valueType: 'phone',
  },
  {
    title: 'الايميل',
    key: 'email',
    dataIndex: 'email',
    valueType: 'email',
  },
  // {
  //   title: 'الحالة',
  //   dataIndex: 'state',
  //   initialValue: 'open',
  //   filters: true,
  //   onFilter: true,
  //   valueEnum: {
  //     all: { text: 'الكل', status: 'Default' },
  //     open: {
  //       text: 'معلق',
  //       status: 'Error',
  //     },
  //     closed: {
  //       text: 'تم الرد',
  //       status: 'Success',
  //     },
  //     processing: {
  //       text: 'نعمل عليها',
  //       status: 'Processing',
  //     },
  //   },
  // },
  // {
  //   title: 'التسمية',
  //   dataIndex: 'labels',
  //   render: (_, record) => (
  //     <Space>
  //       {record.labels.map(({ name, color }) => (
  //         <Tag color={color} key={name}>
  //           {name}
  //         </Tag>
  //       ))}
  //     </Space>
  //   ),
  // },
  {
    title: 'التشغيل',
    valueType: 'option',
    render: (text, record, _, action) => [<DeleteOutlined />],
  },
];
function Contact() {
  const actionRef = useRef();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get(`/api/v1/contact`, {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data: { data } }) => {
        setContacts(data);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      });

    return () => cancelTokenSource.cancel();
  }, []);
  console.log(contacts);
  return (
    <ProTable
      columns={columns}
      actionRef={actionRef}
      request={() =>
        Promise.resolve({
          data: contacts,
          success: true,
        })
      }
      pagination={{
        pageSize: 5,
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      dateFormatter="string"
    />
  );
}
export default Contact;
