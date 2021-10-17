import { DatePicker, Space, Card, Row, Col, Typography, Table, Tabs } from 'antd';
import { lazy, Suspense } from 'react';
const { RangePicker } = DatePicker;
import {
    WalletOutlined,
    UserOutlined,
    MoneyCollectOutlined,
    RiseOutlined,
} from '@ant-design/icons';
import Loader from './../Components/Loader';
import {
    lineChartData,
    bestSellingTable,
    customerData,
    sellingStatistics,
    orderStatistics,
    orderDetails,
} from '../jsonData';
const AdminPanelTemplate = lazy(() => import('../Components/AdminPanelTemplate'));
const Chart = lazy(() => import('./../Components/Chart'));
const BarChart = lazy(() => import('../Components/BarChart'));

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const Dashboard = () => {
    const dateRangeHandler = (date, dateString) => {
        console.log(dateString);
    };

    const callback = (key) => {
        console.log(key);
    };

    return (
        <AdminPanelTemplate>
            <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-10">
                <h1 className="text-2xl">Dashboard</h1>
                <Space direction="vertical" size={12}>
                    <span className="text-sm">
                        <span className="mr-5">Filter By Date</span>
                        <RangePicker onChange={dateRangeHandler} />
                    </span>
                </Space>
            </div>

            {/* small details */}
            <Row gutter={20}>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={8}
                    xl={8}
                    xxl={6}
                    span={6}
                    className="gutter-row sm:mt-5 md:mt-5"
                >
                    <Card className="border-2 shadow-md">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full hover:bg-black bg-gray-400 text-white hover:text-white">
                                <WalletOutlined style={{ fontSize: 30 }} />
                            </div>
                            <div className="ml-5">
                                <h1 className="text-2xl">BDT 41032.00</h1>
                                <Text className="my-0 py-0" style={{ fontSize: 20 }}>
                                    Income
                                </Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={8}
                    xl={8}
                    xxl={6}
                    span={6}
                    className="gutter-row sm:mt-5 md:mt-5"
                >
                    <Card className="border-2 shadow-md">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full hover:bg-black bg-gray-400 text-white hover:text-white">
                                <UserOutlined style={{ fontSize: 30 }} />
                            </div>
                            <div className="ml-5">
                                <h1 className="text-2xl">9</h1>
                                <Text className="my-0 py-0" style={{ fontSize: 20 }}>
                                    Users
                                </Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={8}
                    xl={8}
                    xxl={6}
                    span={6}
                    className="gutter-row sm:mt-5 md:mt-5"
                >
                    <Card className="border-2 shadow-md">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full hover:bg-black bg-gray-400 text-white hover:text-white">
                                <MoneyCollectOutlined style={{ fontSize: 30 }} />
                            </div>
                            <div className="ml-5">
                                <h1 className="text-2xl">BDT 41032.00</h1>
                                <Text className="my-0 py-0" style={{ fontSize: 20 }}>
                                    Avg. Order price
                                </Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={8}
                    xl={8}
                    xxl={6}
                    span={6}
                    className="gutter-row sm:mt-5 md:mt-5"
                >
                    <Card className="border-2 shadow-md">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full hover:bg-black bg-gray-400 text-white hover:text-white">
                                <RiseOutlined style={{ fontSize: 30 }} />
                            </div>
                            <div className="ml-5">
                                <h1 className="text-2xl">79</h1>
                                <Text className="my-0 py-0" style={{ fontSize: 20 }}>
                                    Total Orders
                                </Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* sales chart */}
            <Row gutter={20}>
                <Col className="gutter-row mt-5" span={6} xs={24} sm={24} md={24} lg={12}>
                    <Card
                        title={<Title level={3}>Sales Overview</Title>}
                        className="border-2 shadow-md"
                    >
                        <Suspense fallback={<Loader />}>
                            <Chart
                                data={sellingStatistics}
                                xField={'month'}
                                yField={'value'}
                                size={5}
                            />
                        </Suspense>
                        <div className="flex flex-col justify-between lg:flex-row items-center mt-5 bg-gray-300">
                            <Card className="border-0 bg-transparent py-0 my-0">
                                <p className="text-lg text-center lg:text-sm">Total Sales</p>
                                <h1 className="xl:text-xl lg:text-sm">BDT 41032.00</h1>
                            </Card>
                            <Card className="border-0 bg-transparent py-0 my-0">
                                <p className="text-lg text-center lg:text-sm">This Month</p>
                                <h1 className="xl:text-xl lg:text-sm">BDT 41032.00</h1>
                            </Card>
                            <Card className="border-0 bg-transparent py-0 my-0">
                                <p className="text-lg text-center lg:text-sm">This Week</p>
                                <h1 className="xl:text-xl lg:text-sm">BDT 41032.00</h1>
                            </Card>
                        </div>
                    </Card>
                </Col>
                <Col className="gutter-row mt-5" span={6} xs={24} sm={24} md={24} lg={12}>
                    <Card
                        title={<Title level={3}>Sales Overview</Title>}
                        className="border-2 shadow-md"
                    >
                        <Suspense fallback={<Loader />}>
                            <BarChart
                                data={orderStatistics}
                                xField="month"
                                yField="sales"
                                fillColor="#FFFFFF"
                            />
                        </Suspense>
                        <div className="flex flex-col justify-between lg:flex-row items-center mt-5 bg-gray-300">
                            <Card className="border-0 bg-transparent py-0 my-0">
                                <p className="text-lg text-center lg:text-sm">Total Orders</p>
                                <h1 className="xl:text-xl lg:text-sm text-center">79</h1>
                            </Card>
                            <Card className="border-0 bg-transparent py-0 my-0">
                                <p className="text-lg text-center lg:text-sm">This Month</p>
                                <h1 className="xl:text-xl lg:text-sm text-center">7</h1>
                            </Card>
                            <Card className="border-0 bg-transparent py-0 my-0">
                                <p className="text-lg text-center lg:text-sm">This Week</p>
                                <h1 className="xl:text-xl lg:text-sm text-center">2</h1>
                            </Card>
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* latest order table */}
            <Row gutter={20}>
                <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={18} span={6}>
                    <Card
                        title={<Title level={3}>Latest Order</Title>}
                        className="border-2 shadow-md mt-10"
                    >
                        <Table
                            columns={orderDetails.tableColumn}
                            dataSource={orderDetails.tableData}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6} span={6}>
                    <Card
                        title={<Title level={3}>Best Selling Products</Title>}
                        className="border-2 shadow-md mt-10"
                    >
                        <Table
                            columns={bestSellingTable.tableColumn}
                            dataSource={bestSellingTable.tableData}
                        />
                    </Card>
                </Col>
            </Row>

            {/* tab navigation */}
            <Card className="border-2 shadow-md mt-5">
                <Tabs defaultActiveKey="1" type="card" onChange={callback}>
                    <TabPane tab="New Customers" key="1">
                        <Table
                            columns={customerData.tableColumn}
                            dataSource={customerData.tableData}
                        />
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Card>
        </AdminPanelTemplate>
    );
};

export default Dashboard;
