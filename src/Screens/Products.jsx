import { Breadcrumb, Card, Typography, Table, Button, Modal, Tag, message, Image } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminPanelTemplate from '../Components/AdminPanelTemplate';
import { HomeOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteProductAction, getProductAction } from './../Redux/Actions/ProductAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './../Components/Loader';

const { Title, Text } = Typography;

const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const { isLoading, data, error } = useSelector((state) => state.getProducts);
    const {
        isLoading: isLoadingDelete,
        data: dataDelete,
        error: errorDelete,
    } = useSelector((state) => state.deleteProduct);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        document.title = 'Admin Panel | Products';
        dispatch(getProductAction());

        if (data) {
            setProducts(data);
        }
        if (dataDelete) {
            setProducts(dataDelete);
        }

        if (error) {
            message.error(error);
        }

        if (errorDelete) {
            message.error(errorDelete);
        }
    }, [dispatch, data, dataDelete]);

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        // getCheckboxProps: (record) => ({
        //     disabled: record.name === 'Disabled User',
        //     // Column configuration not to be checked
        //     name: record.name,
        // }),
    };

    let tableColumn = [
        {
            title: 'Product Image',
            dataIndex: 'productImage',
            key: 'productImage',
            render: (image) => (
                <Image width={50} fallback="/images/broken-image.png" alt={image} src={image} />
            ),
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
                            {variants.length}
                        </Button>
                        <Modal
                            title="Variant Details"
                            visible={isModalOpen}
                            style={{ top: 20 }}
                            className="rounded-lg"
                            onOk={() => setIsModalOpen(false)}
                            onCancel={() => setIsModalOpen(false)}
                            footer={[
                                <Button key="back" onClick={() => setIsModalOpen(false)}>
                                    Close
                                </Button>,
                            ]}
                        >
                            <div className="overflow-auto h-96">
                                {variants &&
                                    variants.map((variant) => (
                                        <div
                                            className="flex justify-between my-4 mx-2 border px-4 py-4 rounded-lg shadow-lg overflow-auto "
                                            style={{ marginTop: 20, marginBottom: 20 }}
                                        >
                                            <div>
                                                <Image
                                                    preview={{ visible: false }}
                                                    height={200}
                                                    src={variant.image[1]}
                                                    fallback="/images/broken-image.png"
                                                    onClick={() => setVisible(true)}
                                                />
                                                <div style={{ display: 'none' }}>
                                                    <Image.PreviewGroup
                                                        preview={{
                                                            visible,
                                                            onVisibleChange: (vis) =>
                                                                setVisible(vis),
                                                        }}
                                                    >
                                                        {variant &&
                                                            variant.image.map((variantImage) => (
                                                                <Image
                                                                    height={window.innerHeight}
                                                                    width={window.innerWidth}
                                                                    src={variantImage}
                                                                    fallback="/images/broken-image.png"
                                                                />
                                                            ))}
                                                    </Image.PreviewGroup>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    <span className="font-semibold text-base">
                                                        SKU:{' '}
                                                    </span>
                                                    <span className="text-base">{variant.sku}</span>
                                                </p>
                                                <p>
                                                    <span className="font-semibold text-base">
                                                        Color:{' '}
                                                    </span>
                                                    <span className="text-base">
                                                        {variant.color}
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="font-semibold text-base">
                                                        Size:{' '}
                                                    </span>
                                                    <span className="text-base">
                                                        {variant.size}
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="font-semibold text-base">
                                                        Stock:{' '}
                                                    </span>
                                                    <span className="text-base">
                                                        {variant.stock}
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="font-semibold text-base">
                                                        Price:{' '}
                                                    </span>
                                                    <span className="text-base">
                                                        {variant.price}
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="font-semibold text-base">
                                                        Sales:{' '}
                                                    </span>
                                                    <span className="text-base">
                                                        {variant.sales}
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="font-semibold text-base">
                                                        Purchase Price:{' '}
                                                    </span>
                                                    <span className="text-base">
                                                        {variant.purchasePrice}
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="text-base">
                                                        <Tag
                                                            color={variant.inStock ? 'blue' : 'red'}
                                                            key={variant._id}
                                                        >
                                                            {variant.inStock
                                                                ? 'In Stock'
                                                                : 'Out of Stock'}
                                                        </Tag>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
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
            sorter: (a, b) => a.reviews - b.reviews,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                const [isActive, setIsActive] = useState(status);
                return (
                    <Tag
                        className="cursor-pointer"
                        onClick={() => setIsActive(!isActive)}
                        color={isActive ? 'blue' : 'red'}
                        key={status}
                    >
                        {isActive ? 'Active' : 'Inactive'}
                    </Tag>
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
                    let productName = products.find((product) => product._id === id).name;
                    setProducts(products.filter((product) => product._id !== id));
                    message.success(`Deleted product ${productName}`);
                    // dispatch(deleteProductAction(id));
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
    ];

    if (isLoading || isLoadingDelete) {
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
                <Breadcrumb.Item>Products</Breadcrumb.Item>
            </Breadcrumb>

            <main>
                <Card
                    title={<Title level={3}>Products</Title>}
                    className="border-2 shadow-md mt-10"
                >
                    {(isLoading || isLoadingDelete) && <Loader />}
                    {data && (
                        <Table
                            scroll={{ x: 1500 }}
                            rowSelection={{
                                type: 'checkbox',
                                ...rowSelection,
                            }}
                            columns={tableColumn}
                            dataSource={products}
                        />
                    )}
                </Card>
            </main>
        </AdminPanelTemplate>
    );
};

export default Products;
