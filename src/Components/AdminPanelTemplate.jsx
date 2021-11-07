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
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../Redux/Actions/LoginAction';
import { useEffect, useState } from 'react';

const { Sider, Content } = Layout;

let { SubMenu } = Menu;

const AdminPanelTemplate = ({ children }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);

    let { SubMenu } = Menu;

    let userInfo = useSelector((state) => state.user);

    useEffect(() => {
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

    console.log(location.pathname);

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
                    defaultSelectedKeys={[
                        location.pathname.includes('/products')
                            ? '/products'
                            : location.pathname.includes('/category')
                            ? '/category'
                            : location.pathname,
                    ]}
                    mode="inline"
                    theme="dark"
                    className="shadow-lg"
                    defaultOpenKeys={[
                        location.pathname.includes('/products') ||
                        location.pathname.includes('/products/') ||
                        location.pathname.includes('/category')
                            ? 'catalogue'
                            : location.pathname.includes('/orders') ||
                              location.pathname.includes('/service-orders')
                            ? 'sales'
                            : location.pathname.includes('/inventory-dashboard') ||
                              location.pathname.includes('/inventory-details')
                            ? 'store'
                            : null,
                    ]}
                    inlineCollapsed={collapsed}
                >
                    <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
                        <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <SubMenu key="sales" icon={<AuditOutlined />} title="Sales">
                        <Menu.Item key="/orders">
                            <Link to="/orders">Orders</Link>
                        </Menu.Item>
                        <Menu.Item key="/service-orders">
                            <Link to="/service-orders">Service Orders</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/pos" icon={<ShopOutlined />}>
                        <Link to="/pos">POS</Link>
                    </Menu.Item>
                    <SubMenu key="catalogue" icon={<AppstoreAddOutlined />} title="Catalogue">
                        <Menu.Item key={'/products'}>
                            <Link to="/products">Product</Link>
                        </Menu.Item>
                        <Menu.Item key="/category">
                            <Link to="/category">Category</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/customers" icon={<TeamOutlined />}>
                        <Link to="/customers">Customers</Link>
                    </Menu.Item>
                    <SubMenu key="store" icon={<InventoryIcon />} title="Store & Inventory">
                        <Menu.Item key="/inventory-dashboard">
                            <Link to="/inventory-dashboard">Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="/inventory-details">
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
                    className="site-layout-background overflow-auto"
                    style={{
                        margin: '0px 0px 0px 0px',
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
