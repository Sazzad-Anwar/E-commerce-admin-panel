import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, ...rest }) => {
    let userInfo = useSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                userInfo && userInfo?.details?._id ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;
