import { Form, Input, Button, Checkbox, Row, Col, Breadcrumb, Tree, Select } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import AdminPanelTemplate from './../Components/AdminPanelTemplate';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { category } from './../jsonData';

const { Option } = Select;

const Category = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    const selectCategory = (value) => {
        console.log(value);
    };

    useEffect(() => {
        document.title = 'Admin Panel | Category';
    }, []);

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
                <Breadcrumb.Item>Category</Breadcrumb.Item>
            </Breadcrumb>

            <main className="mt-5">
                <Row>
                    <Col xs={24} sm={24} md={12}>
                        <Tree
                            checkable
                            showLine={true}
                            showIcon={false}
                            defaultExpandedKeys={[]}
                            defaultSelectedKeys={[]}
                            defaultCheckedKeys={[]}
                            onSelect={onSelect}
                            onCheck={onCheck}
                            treeData={category}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={12}></Col>
                </Row>
            </main>
        </AdminPanelTemplate>
    );
};

export default Category;
