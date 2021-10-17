import { Avatar, Tag } from 'antd';
import { UserOutlined, ReconciliationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const sellingStatistics = [
    { month: 'Jan', value: 3000 },
    { month: 'Feb', value: 4500 },
    { month: 'Mar', value: 7000 },
    { month: 'Apr', value: 6000 },
    { month: 'May', value: 10000 },
    { month: 'Jun', value: 12000 },
    { month: 'Jul', value: 11000 },
    { month: 'Aug', value: 15000 },
    { month: 'Sep', value: 20000 },
];

export const orderStatistics = [
    {
        month: 'January',
        sales: 38,
    },
    {
        month: 'February',
        sales: 52,
    },
    {
        month: 'March',
        sales: 30,
    },
    {
        month: 'April',
        sales: 145,
    },
    {
        month: 'May',
        sales: 48,
    },
    {
        month: 'June',
        sales: 38,
    },
    {
        month: 'July',
        sales: 38,
    },
    {
        month: 'August',
        sales: 38,
    },
];

export const orderDetails = {
    tableColumn: [
        {
            title: 'Order ID',
            dataIndex: 'orderId',
            key: 'orderId',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Purchased At',
            dataIndex: 'purchasedAt',
            key: 'purchasedAt',
        },
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Sub Total',
            dataIndex: 'subTotal',
            key: 'subTotal',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Tag
                    color={
                        status === 'Pending'
                            ? 'gold'
                            : status === 'Success'
                            ? 'green'
                            : status === 'Cancelled'
                            ? 'red'
                            : 'blue'
                    }
                    key={status}
                >
                    {status}
                </Tag>
            ),
            filters: [
                {
                    text: 'Pending',
                    value: 'Pending',
                },
                {
                    text: 'Success',
                    value: 'Success',
                },
                {
                    text: 'Cancelled',
                    value: 'Cancelled',
                },
            ],
            onFilter: (value, record) => record.status.startsWith(value),
        },
        {
            title: 'Details',
            dataIndex: 'details',
            key: 'details',
            render: (details) => (
                <Link to="/oder-details/1234">
                    <Avatar className="hover:bg-gray-700" icon={<ReconciliationOutlined />} />
                </Link>
            ),
        },
    ],
    tableData: [
        {
            orderId: '1',
            userName: 'Mike',
            purchasedAt: new Date().toLocaleString('en-Us', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
            product: 'Black T-shirt',
            subTotal: 350,
            status: 'Pending',
        },
        {
            orderId: '2',
            userName: 'John',
            purchasedAt: new Date().toLocaleString('en-Us', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
            product: 'Pant',
            subTotal: 350,
            status: 'Success',
        },
        {
            orderId: '3',
            userName: 'John',
            purchasedAt: new Date().toLocaleString('en-Us', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
            product: 'Pant',
            subTotal: 350,
            status: 'Cancelled',
        },
        {
            orderId: '4',
            userName: 'John',
            purchasedAt: new Date().toLocaleString('en-Us', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
            product: 'Pant',
            subTotal: 350,
            status: 'Success',
        },
        {
            orderId: '5',
            userName: 'John',
            purchasedAt: new Date().toLocaleString('en-Us', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
            product: 'Pant',
            subTotal: 350,
            status: 'Pending',
        },
        {
            orderId: '6',
            userName: 'John',
            purchasedAt: new Date().toLocaleString('en-Us', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
            product: 'Pant',
            subTotal: 350,
            status: 'Success',
        },
        {
            orderId: '7',
            userName: 'John',
            purchasedAt: new Date().toLocaleString('en-Us', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
            product: 'Pant',
            subTotal: 350,
            status: 'Cancelled',
        },
        {
            orderId: '8',
            userName: 'John',
            purchasedAt: new Date().toLocaleString('en-Us', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
            product: 'Pant',
            subTotal: 350,
            status: 'Success',
        },
        {
            orderId: '9',
            userName: 'John',
            purchasedAt: new Date().toLocaleString('en-Us', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
            product: 'Pant',
            subTotal: 350,
            status: 'Success',
        },
        {
            orderId: '10',
            userName: 'John',
            purchasedAt: new Date().toLocaleString('en-Us', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
            product: 'Pant',
            subTotal: 350,
            status: 'Success',
        },
        {
            orderId: '11',
            userName: 'John',
            purchasedAt: new Date().toLocaleString('en-Us', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
            product: 'Pant',
            subTotal: 350,
            status: 'Success',
        },
    ],
};

export const bestSellingTable = {
    tableColumn: [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={image} height="50" width="50" alt={image} />,
        },
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Sales',
            dataIndex: 'sales',
            key: 'sales',
        },
    ],
    tableData: [
        {
            image: 'http://placeimg.com/640/480/abstract',
            product: 'Small Fresh Chair',
            sales: 25,
        },
        {
            image: 'http://placeimg.com/640/480/abstract',
            product: 'Generic Granite Shirt',
            sales: 20,
        },
        {
            image: 'http://placeimg.com/640/480/abstract',
            product: 'Generic Granite Shirt',
            sales: 18,
        },
        {
            image: 'http://placeimg.com/640/480/abstract',
            product: 'Generic Granite Shirt',
            sales: 15,
        },
        {
            image: 'http://placeimg.com/640/480/abstract',
            product: 'Generic Granite Shirt',
            sales: 12,
        },
    ],
};

export const customerData = {
    tableColumn: [
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'A/C Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Details',
            dataIndex: 'details',
            key: 'details',
            render: (details) => (
                <Link to="/customerDetials/1234">
                    <Avatar className="hover:bg-gray-700" icon={<UserOutlined />} />
                </Link>
            ),
        },
    ],
    tableData: [
        {
            customerName: 'Mr. Paula Zulauf',
            email: 'paula@gmail.com',
            phoneNumber: '386-963-4123',
            address: '697 Pacocha Parkways',
            createdAt: new Date('2021-09-20T13:36:24.400Z').toLocaleString('en-Us', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            }),
            details: 'details',
        },
        {
            customerName: 'Mr. Paula Zulauf',
            email: 'paula@gmail.com',
            phoneNumber: '386-963-4123',
            address: '697 Pacocha Parkways',
            createdAt: new Date('2021-09-20T13:36:24.400Z').toLocaleString('en-Us', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            }),
            details: 'details',
        },
        {
            customerName: 'Mr. Paula Zulauf',
            email: 'paula@gmail.com',
            phoneNumber: '386-963-4123',
            address: '697 Pacocha Parkways',
            createdAt: new Date('2021-09-20T13:36:24.400Z').toLocaleString('en-Us', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            }),
            details: 'details',
        },
        {
            customerName: 'Mr. Paula Zulauf',
            email: 'paula@gmail.com',
            phoneNumber: '386-963-4123',
            address: '697 Pacocha Parkways',
            createdAt: new Date('2021-09-20T13:36:24.400Z').toLocaleString('en-Us', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            }),
            details: 'details',
        },
        {
            customerName: 'Mr. Paula Zulauf',
            email: 'paula@gmail.com',
            phoneNumber: '386-963-4123',
            address: '697 Pacocha Parkways',
            createdAt: new Date('2021-09-20T13:36:24.400Z').toLocaleString('en-Us', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            }),
            details: 'details',
        },
    ],
};
