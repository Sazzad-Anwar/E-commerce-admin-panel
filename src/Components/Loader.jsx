import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 54 }} spin />;

const Loader = () => {
    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <Spin indicator={antIcon} />
                    <h1 className="text-2xl text-blue-500 font-semibold">E-commerce</h1>
                </div>
            </div>
        </>
    );
};

export default Loader;
