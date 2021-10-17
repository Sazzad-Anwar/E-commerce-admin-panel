import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 54 }} spin />;

const Loader = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Spin indicator={antIcon} />;
        </div>
    );
};

export default Loader;
