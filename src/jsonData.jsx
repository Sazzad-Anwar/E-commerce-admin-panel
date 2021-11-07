import { Avatar, Tag, Modal, Button, Image } from 'antd';
import {
    UserOutlined,
    ReconciliationOutlined,
    EyeOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

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

export const profitStatistics = [
    { month: 'Jan', value: 15000 },
    { month: 'Feb', value: 10000 },
    { month: 'Mar', value: 20000 },
    { month: 'Apr', value: 8000 },
    { month: 'May', value: 17000 },
    { month: 'Jun', value: 11000 },
    { month: 'Jul', value: 21000 },
    { month: 'Aug', value: 25000 },
    { month: 'Sep', value: 30000 },
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
                    <Avatar
                        className="hover:bg-gray-700 transition-all"
                        icon={<ReconciliationOutlined />}
                    />
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

export const products = {
    tableColumn: [
        {
            title: 'Product Image',
            dataIndex: 'productImage',
            key: 'productImage',
            render: (image) => <img src={image} height="50" width="50" alt={image} />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Variants',
            dataIndex: 'variants',
            key: 'variants',
            render: (variants) => {
                const [isModalOpen, setIsModalOpen] = useState(false);

                return (
                    <>
                        <Button
                            type="default"
                            className="hover:cursor-pointer cursor-pointer text-blue-500"
                            onClick={() => setIsModalOpen(true)}
                            key={variants}
                        >
                            View
                        </Button>
                        <Modal
                            title="Basic Modal"
                            visible={isModalOpen}
                            onOk={() => setIsModalOpen(false)}
                            onCancel={() => setIsModalOpen(false)}
                        >
                            {variants &&
                                variants.map((variant) => (
                                    <div>
                                        <h1>hello</h1>
                                        <p>{variant.color}</p>
                                        <p>{variant.size}</p>
                                        <p>{variant.price}</p>
                                    </div>
                                ))}
                        </Modal>
                    </>
                );
            },
        },
        {
            title: 'Shipping Charge',
            dataIndex: 'shippingCharge',
            key: 'shippingCharge',
            sorter: (a, b) => a.shippingCharge - b.shippingCharge,
        },
        {
            title: 'Service Charge',
            dataIndex: 'serviceCharge',
            key: 'serviceCharge',
            sorter: (a, b) => a.serviceCharge - b.serviceCharge,
        },
        {
            title: 'Ratings',
            dataIndex: 'ratings',
            key: 'ratings',
            sorter: (a, b) => a.ratings - b.ratings,
        },
        {
            title: 'Reviews',
            dataIndex: 'reviews',
            key: 'reviews',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.reviews - b.reviews,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                const [isActive, setIsActive] = useState(status);
                return (
                    <Button type="text" onClick={() => setIsActive(!isActive)} key={status}>
                        <Tag color={isActive ? 'blue' : 'red'} key={status}>
                            {isActive ? 'Active' : 'Inactive'}
                        </Tag>
                    </Button>
                );
            },
            filters: [
                {
                    text: 'Active',
                    value: true,
                },
                {
                    text: 'Inactive',
                    value: false,
                },
            ],
            onFilter: (value, record) => record.status === value,
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (actions) => {
                const deleteProduct = (id) => {
                    console.log(id);
                    products.tableData = products.tableData.filter((data) => data._id !== id);
                };

                return (
                    <div className="flex justify-between items-center">
                        <Link to={`/products/${actions}`}>
                            <Button type="default" icon={<EyeOutlined />} size="middle" />
                        </Link>
                        <Button
                            type="default"
                            icon={<DeleteOutlined />}
                            onClick={() => deleteProduct(actions)}
                            size="middle"
                        />
                    </div>
                );
            },
        },
    ],
    tableData: (function () {
        let productData = [];
        for (let i = 0; i <= 30; i++) {
            productData.push({
                key: uuid(),
                _id: `6176f0f661667b2bf0e6f38d${i}`,
                productImage:
                    i % 2 === 0
                        ? '/images/APPL-12-5G-BLACK.jpg'
                        : i % 3 === 0
                        ? '/images/APPL-12-5G-BLUE.jpg'
                        : '/images/APPL-12-5G-GREEN.jpg',
                name: `iPhone 12 pro-${i}`,
                brand: 'Treutel and Sons',
                category: `T-shirt`,
                variants: [
                    {
                        color: 'black',
                        size: '354',
                        stock: Math.round(Math.random() * 100),
                        price: Math.round(Math.random() * 100),
                        image: [
                            '/images/APPL-12-5G-BLACK.jpg',
                            '/images/APPL-12-5G-BLUE.jpg',
                            '/images/APPL-12-5G-GREEN.jpg',
                            '/images/APPL-12-5G-RED.jpg',
                            '/images/APPL-12-5G-WHITE.jpg',
                        ],
                        sales: 0,
                        sku: 'iphon-12-black-128gb',
                        inStock: true,
                        purchasePrice: 0,
                        _id: '6176f0f661667b2bf0e6f38e',
                        key: '6176f0f661667b2bf0e6f38e',
                    },
                    {
                        color: 'blue',
                        size: '197',
                        stock: Math.round(Math.random() * 100),
                        price: Math.round(Math.random() * 100),
                        image: [
                            '/images/APPL-12-5G-BLACK.jpg',
                            '/images/APPL-12-5G-BLUE.jpg',
                            '/images/APPL-12-5G-GREEN.jpg',
                            '/images/APPL-12-5G-RED.jpg',
                            '/images/APPL-12-5G-WHITE.jpg',
                        ],
                        sales: 0,
                        sku: 'iphon-12-blue-128gb',
                        inStock: true,
                        purchasePrice: 0,
                        _id: '6176f0f661667b2bf0e6f38f',
                        key: '6176f0f661667b2bf0e6f38f',
                    },
                ],
                shippingCharge: Math.round(Math.random() * 100),
                serviceCharge: Math.round(Math.random() * 100),
                ratings: Math.ceil(Math.random() * 5),
                reviews: Math.round(Math.random() * 10),
                status: true,
                actions: `6176f0f661667b2bf0e6f38d${i}`,
            });
        }

        return productData;
    })(),
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

export const category = [
    {
        key: '617d7030f224c4495ac65247',
        title: 'Dress',
        children: [
            {
                key: '617d703ef224c4495ac6524b',
                title: 'Men',
                children: [
                    {
                        key: '617d7049f224c4495ac65251',
                        title: 'T-shirt',
                        children: [],
                        __v: 0,
                    },
                    {
                        key: '617d7053f224c4495ac65257',
                        title: 'Shirt',
                        children: [],
                        __v: 0,
                    },
                ],
                __v: 4,
            },
        ],
        __v: 1,
    },
    // {
    //     _id: '617d703ef224c4495ac6524b',
    //     title: 'Men',
    //     key: '0-0',
    //     children: [
    //         {
    //             _id: '617d7049f224c4495ac65251',
    //             title: 'T-shirt',
    //             key: '0-0-0',
    //             children: [],
    //             __v: 0,
    //         },
    //         {
    //             _id: '617d7053f224c4495ac65257',
    //             title: 'Shirt',
    //             key: '0-0-1',
    //             children: [],
    //             __v: 0,
    //         },
    //     ],
    //     __v: 4,
    // },
    // {
    //     _id: '617d7049f224c4495ac65251',
    //     title: 'T-shirt',
    //     key: '0-0',
    //     children: [],
    //     __v: 0,
    // },
    // {
    //     _id: '617d7053f224c4495ac65257',
    //     title: 'Shirt',
    //     key: '0-0',
    //     children: [],
    //     __v: 0,
    // },
];

export const orders = [
    {
        orderItem: {
            qty: 2,
            price: 939,
            product: {
                _id: '6172b652e5ba16e7c4c2dd9a',
                name: 'Unbranded Frozen Towels',
                category: {
                    _id: '6172b53a93f8c186efde0e89',
                    category: 'Cloths',
                    subCategory: 'T-shirts',
                },
            },
            vendor: {
                _id: '61488e8b5251a2ea0d017250',
                shopName: 'Will and Sons',
            },
            variantId: '6172b652e5ba16e7c4c2dd9e',
            color: 'violet',
            size: '963',
            image: 'http://placeimg.com/640/480/abstract',
        },
        refund: {
            asked: false,
            photo: [],
        },
        _id: '6172bd9be5ba16e7c4c2ddb0',
        user: '61488e585251a2ea0d01724b',
        discount: 0.13,
        discountPrice: 1633.86,
        serviceCharge: 939,
        shippingCharge: 239,
        shippingStatus: 'PENDING',
        totalPrice: 2811.8599999999997,
        isPaid: false,
        isDelivered: false,
        addedToCart: true,
        createdAt: '2021-10-22T13:33:15.356Z',
        updatedAt: '2021-10-22T13:33:15.356Z',
        __v: 0,
    },
];
