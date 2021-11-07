import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
const ErrorPage = ({ status, title, subTitle }) => {
    return (
        <Result
            status={status}
            title={title}
            subTitle={subTitle}
            extra={
                <Link to="/">
                    <Button type="primary">Back Home</Button>
                </Link>
            }
        />
    );
};

export default ErrorPage;
