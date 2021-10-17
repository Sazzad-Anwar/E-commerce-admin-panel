import { PageHeader, Menu, Dropdown, Button, Avatar, Badge, Layout } from 'antd';
import {
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DashboardOutlined,
    AuditOutlined,
    ShopOutlined,
    AppstoreAddOutlined,
    BellOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../Redux/Actions/LoginAction';
import { useEffect, useRef, useState, createElement } from 'react';

const { Sider, Content } = Layout;

let { SubMenu } = Menu;

const AdminPanelTemplate = ({ children }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);

    let { SubMenu } = Menu;

    let userInfo = useSelector((state) => state.user);

    const redirect = location.search ? location.search.split('=')[1] : '/dashboard';

    useEffect(() => {
        if (userInfo && userInfo?.details?._id) {
            history.push(redirect);
        }

        if (window.innerWidth <= 991) {
            setCollapsed(true);
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 991) {
                setCollapsed(true);
            }
        });
    }, [userInfo?.details?._id]);

    // menu collapse function
    const toggleCollapsed = () => setCollapsed(!collapsed);

    // logout function
    const logoutHandler = () => {
        dispatch(logOut());
    };

    const menu = (
        <Menu>
            <Menu.Item>
                <Link to="/profile">
                    <UserOutlined /> <span>Profile</span>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/settings">
                    <SettingOutlined /> <span>Settings</span>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <span onClick={logoutHandler}>
                    <LogoutOutlined /> <span>Log Out</span>
                </span>
            </Menu.Item>
        </Menu>
    );

    const notification = (
        <Menu>
            <Menu.Item>
                <div className="flex items-center">
                    <Avatar icon={<BellOutlined />} size="small" />
                    <p className="ml-2 text-base">Order placed</p>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="flex items-center">
                    <Avatar icon={<BellOutlined />} size="small" />
                    <p className="ml-2 text-base">User reviewed a product</p>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="flex items-center">
                    <Avatar icon={<BellOutlined />} size="small" />
                    <p className="ml-2 text-base">Order cancelled</p>
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout className="h-screen">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo flex justify-center items-center p-5">
                    <img src="/favicon.ico" height="30" width="30" alt="icon" />
                    {!collapsed ? <h3 className="text-xl text-white ml-3">E-commerce</h3> : null}
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme="dark"
                    className="shadow-lg"
                    inlineCollapsed={collapsed}
                >
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <SubMenu key="3" icon={<AuditOutlined />} title="Sales">
                        <Menu.Item key="orders">
                            <Link to="/orders">Orders</Link>
                        </Menu.Item>
                        <Menu.Item key="service-orders">
                            <Link to="/service-orders">Service Orders</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4" icon={<ShopOutlined />}>
                        <Link to="/pos">POS</Link>
                    </Menu.Item>
                    <SubMenu key="5" icon={<AppstoreAddOutlined />} title="Catalogue">
                        <Menu.Item key="product">
                            <Link to="/add-product">Product</Link>
                        </Menu.Item>
                        <Menu.Item key="category">
                            <Link to="/add-category">Category</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6" icon={<TeamOutlined />}>
                        <Link to="/customers">Customers</Link>
                    </Menu.Item>
                    <SubMenu key="7" icon={<InventoryIcon />} title="Store & Inventory">
                        <Menu.Item key="product">
                            <Link to="/inventory-dashboard">Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="category">
                            <Link to="/inventory-details">Inventory Details</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <PageHeader
                    className="border shadow-lg py-2"
                    id="navHeader"
                    style={{ paddingLeft: 5 }}
                    // onBack={() => history.goBack()}
                    title={
                        <Button type="default" className="ml-3" onClick={toggleCollapsed}>
                            {collapsed ? (
                                <MenuUnfoldOutlined size="large" />
                            ) : (
                                <MenuFoldOutlined size="large" />
                            )}
                        </Button>
                    }
                    extra={[
                        <Dropdown
                            overlay={notification}
                            trigger={['click']}
                            placement="bottomRight"
                            arrow
                        >
                            <Badge size="small" count={5}>
                                <Button
                                    type="default"
                                    shape="circle"
                                    icon={<BellOutlined />}
                                    size="default"
                                />
                            </Badge>
                        </Dropdown>,

                        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight" arrow>
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<UserOutlined />}
                                size="large"
                            />
                        </Dropdown>,
                    ]}
                />
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminPanelTemplate;
