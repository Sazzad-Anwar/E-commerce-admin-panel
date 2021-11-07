import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AdminPanelTemplate from '../Components/AdminPanelTemplate';
import { HomeOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './../Components/Loader';
import { getProductAction } from './../Redux/Actions/ProductAction';
import { Form, Input, Button, Checkbox, Space, Breadcrumb, message, Row, Col } from 'antd';

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => state.getProducts);

    useEffect(() => {
        dispatch(getProductAction(id));

        if (data) {
            document.title = `Admin Panel | Product | ${id}`;
        }

        if (error) {
            message.error(error);
        }
    }, [id, dispatch]);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <AdminPanelTemplate>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/">
                        <HomeOutlined />
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <span>Catalogue</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/products">Products</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{data && data[0].name}</Breadcrumb.Item>
            </Breadcrumb>

            <main className="py-6">
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row>
                        <Col xs={24} md={24} lg={12} xl={6}>
                            <Form.Item
                                label="Name"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                min: 6,
                                message: 'Password length should be 6 character long',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                min: 6,
                                message: 'Password length should be 6 character long',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </main>
        </AdminPanelTemplate>
    );
};

export default Product;
